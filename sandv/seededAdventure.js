const tagsCompendium = "world.swn-world-tags"

function randomPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
}

function parseReferences(tags) {
    let split = tags.split(/[\@\s\{]/);
    let entryRefs = split.filter(s => s.startsWith("Compendium"));
    let tagsRefs = entryRefs.filter(s => s.indexOf(tagsCompendium) > -1);
    let entryIds = tagsRefs.map(tR => tR.match(/swn-world-tags\.(.*)\]/)[1])
    return entryIds;
}

async function resolveDocuments(references) {
    return await Promise.all(references.map(async (r) => {
        return await game.packs.get(tagsCompendium).getDocument(r);
    }))
}

function parseNeedIndexes(documents) {
    let index = {
        E: [],
        F: [],
        C: [],
        T: [],
        P: []
    };
    let contents = documents.map(d => d.data.content);
    contents.forEach(c => {
        jQuery(c).find('tr').each((i, tr) => {
            let $tr = jQuery(tr);
            let key = $tr.find('td:first-child').text();
            let value = $tr.find('td:last-child').text();
            let entries = value.split(',');
            entries.forEach(e => {
                index[key].push(e.trim())
            });
        });
    });
    return index;
}

async function parseTagDocuments(tags) {
    let references = parseReferences(tags);
    let documents = await resolveDocuments(references);
    let indexes = parseNeedIndexes(documents);
    return indexes;
}

function parseNeeds(seed) {
    let needs = [];
    let split = seed.split(/[^A-Za-z0-9]+/);
    split.forEach(w => {
        if (w === 'Enemy') {
            needs.push('E');
        } else if (w === 'Friend') {
            needs.push('F');
        } else if (w === 'Complication') {
            needs.push('C');
        } else if (w === 'Thing') {
            needs.push('T');
        } else if (w === 'Place') {
            needs.push('P');
        }
    });
    return needs;
}

function meetNeed(need, tagDocuments) {
    let met = {key: need};
    let options = tagDocuments[need];
    met.value = options[Math.floor(Math.random() * options.length)]
    return met;
}

async function getAdventure(planetID) {
    let sector = game.actors.get("z1OUmGMahPYgQctB");
    let planets = sector.items.contents.filter(i => i.data.type === 'planet' && i.id === planetID);
    let planet = randomPlanet(planets);
    let resultHtml = '';
    console.log(planet.name);
    resultHtml += `<h4>@Item[${planetID}]{${planet.name}}</h4>`;

    let tagDocuments = await parseTagDocuments(planet.data.data.tags)
    let seedsId = game.packs.get("world.swn").index.contents.filter(i => i.name === 'Adventure Seeds')[0]._id;
    let table = await game.packs.get("world.swn").getDocument(seedsId);

    let res = await table.draw({displayChat: false});
    console.log(res.results[0].data.text);
    resultHtml += `<p>${res.results[0].data.text}</p>`;
    let needs = parseNeeds(res.results[0].data.text)
    let draws = {};
    needs.forEach(n => {
        let met = meetNeed(n, tagDocuments);
        if (!draws[met.key]) {
            draws[met.key] = [];
        }
        draws[met.key].push(met.value);
    })
    let keys = ['E', 'F', 'C', 'T', 'P'];
    resultHtml += `<table>`;
    keys.forEach(k => {
        if (draws[k]) {
            console.log(k + ":" + JSON.stringify(draws[k]))
            resultHtml += `<tr>`;
            resultHtml += `<td width="5%">${k}</td>`;
            resultHtml += `<td width="94%">${JSON.stringify(draws[k])}</td>`;
            resultHtml += `</tr>`;
        }
    });
    resultHtml += `</table>`;
    return resultHtml;
}

class SeededAdventure extends Application {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            title: "Adventure",
            width: 480,
            height: 480,
            resizable: true,
        });
    }
    _renderInner(data, options) {
        let sector = game.actors.get("z1OUmGMahPYgQctB");
        let planets = sector.items.contents.filter(i => i.data.type === 'planet');

        let html = `<div>`;
        html += `<h3>Planets</h3>`;
        html += `<div>`;
        html += `<table><tr>`
        planets.forEach((p, i) => {
            html += '<td>';
            html += `<span class="planetName" id="${p.id}">${p.name}</span>&nbsp;`
            html += '</td>';
            if (i % 3 === 2) {
                html += '</tr>';
                if(i < planets.length - 1) {
                    html += '<tr>';
                }
            }
        });
        if (planets.length % 3 !== 2) {
            html += '</tr>';
        }
        html += '</table>';
        html += `</div>`;
        html += `<div id="output">`;
        html += `</div>`;
        html += `</div>`;
        return $(html);
    }
    activateListeners(html) {
        super.activateListeners(html);
        html.find('.planetName').on('click', async (ev) => {
            let inner = await getAdventure($(ev.currentTarget).attr('id'));
            console.log(TextEditor.enrichHTML(inner));
            html.find('#output').html(TextEditor.enrichHTML(inner));
        });
    }
}

new SeededAdventure().render(true);