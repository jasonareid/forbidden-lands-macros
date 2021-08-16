const SECTOR_ACTOR_ID = "z1OUmGMahPYgQctB";
const tagsCompendium = "world.swn-world-tags";
const tagsExCompendium = "world.swnex-expanded-world-gen";

function randomPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
}

function parseReferences(tags) {
    let split = tags.split(/[\@\s\{]/);
    let entryRefs = split.filter(s => s.startsWith("Compendium"));
    let tagsRefs = entryRefs.filter(s => s.indexOf(tagsCompendium) > -1 || s.indexOf(tagsExCompendium) > -1);
    let entryIds = tagsRefs.map(tR => {
        if(tR.indexOf(tagsCompendium) > -1) {
            console.log(tR);
            return {pack: tagsCompendium, id: tR.match(/swn-world-tags\.(.*)\]/)[1]};
        } else {
            return {pack: tagsExCompendium, id: tR.match(/swnex-expanded-world-gen\.(.*)\]/)[1]};
        }
    })
    return entryIds;
}

async function resolveDocuments(references) {
    return await Promise.all(references.map(async (r) => {
        return await game.packs.get(r.pack).getDocument(r.id);
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
        if (w === 'Enemy' || w === 'Enemies') {
            needs.push('E');
        } else if (w === 'Friend' || w === 'Friends') {
            needs.push('F');
        } else if (w === 'Complication' || w === 'Complications') {
            needs.push('C');
        } else if (w === 'Thing' || w === 'Things') {
            needs.push('T');
        } else if (w === 'Place' || w === 'Places') {
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
    let sector = game.actors.get(SECTOR_ACTOR_ID);
    let planets = sector.items.contents.filter(i => i.data.type === 'planet' && i.id === planetID);
    let planet = randomPlanet(planets);
    let resultHtml = '';
    console.log(planet.name);
    resultHtml += `<h2 style="cursor:pointer" class="planetName" data-planet-id="${planetID}">${planet.name}</h2>`;

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
            width: 640,
            height: 640,
            resizable: true,
        });
    }
    _renderInner(data, options) {
        let sector = game.actors.get(SECTOR_ACTOR_ID);
        let planets = sector.items.contents.filter(i => i.data.type === 'planet');

        let html = `<div>`;
        html += `<h2>Planets</h2>`;
        html += `<div>`;
        html += `<table><tr>`
        planets.forEach((p, i) => {
            html += '<td>';
            html += `<span style="cursor:pointer" class="srcPlanetName" id="${p.id}">${p.name}</span>&nbsp;`
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
        html += `<div id="output" style="margin-top:16px;">`;
        html += `</div>`;
        html += `</div>`;
        return $(html);
    }
    activateListeners(html) {
        super.activateListeners(html);
        html.find('.srcPlanetName').on('click', async (ev) => {
            let inner = await getAdventure($(ev.currentTarget).attr('id'));
            console.log(TextEditor.enrichHTML(inner));
            html.find('#output').html(TextEditor.enrichHTML(inner));
        });
        html.on('click', '.planetName', (ev) => {
            let planetId = $(ev.currentTarget).data('planetId');
            let sector = game.actors.get(SECTOR_ACTOR_ID);
            let planet = sector.getOwnedItem(planetId);
            planet.sheet.render(true);
        });
    }
}

new SeededAdventure().render(true);