let str = "" +
    "Alien\n" +
    "The denizens of this world are either aliens or else possess such a strange culture that they might as well be non-humans. Such societies tend to have strange estimates of value by ordinary human standards, often prizing substances of limited interstellar value or requiring bizarre procedures before business can be conducted. Dealing with alien societies is fraught with danger even by far trader standards, as it is easy for a human to trespass taboos that seem so obvious to their local dragoman that there is no thought to warn them beforehand.\n" +
    "Member of a special trading caste, Bureaucrat that communicates in strange idioms, Judicial official of an incomprehensible law, Gone-native human transplant with full authority over human traders\n" +
    "Amoral far trader selling the aliens tech dangerous to humans, Alien renegade seeking offworld goods for its plots, Alien trader trying to sell local artifacts forbidden from export, Alien selling goods that are actually very dangerous\n" +
    "Alien religious artifacts, Exotic alien tech, Alien slave caste, Precious biological extract from dead aliens\n" +
    "The locals suddenly become very dangerous due to alien ritual behavior or biological impulses, Aliens suddenly demand a particular good to continue trading, Aliens become enraged over inexplicable slight, Alien rebels start fighting for control of human trade\n" +
    "Humans are restricted to trade zones, Traders are required to give passage to members of a non-starfaring species, Traders must prove themselves honorary members of the species, Offworld trade is always prefaced by harsh ritual";

let split = str.split("\n");
split.splice(1, 0, '');
split = split.reduce((prev, curr) => {
    if(curr === '') {
        prev.push('');
    } else {
        if(curr.startsWith('E ') || curr.startsWith('F ') || curr.startsWith('C ') || curr.startsWith('T ') || curr.startsWith('P ')) {
            curr = curr.substr(2);
            prev.push('');
        }
        if(prev[prev.length -1] === '') {
            prev[prev.length - 1] = curr;
        } else {
            prev[prev.length - 1] = prev[prev.length - 1] + ' ' + curr;
        }
    }
    return prev;
}, ['']);
let markup = '';
markup += `<h2>${split[0]}</h2>\n`;
markup += `<p>${split[1]}</p>\n`;
markup += `<p>&nbsp;</p>\n`;
markup += "<table style=\"width: 99.1501%;\" border=\"1\">\n";
markup += "<tbody>\n";
let row = [null, null, 'E', 'F', 'C', 'T', 'P'];
for(let i = 2; i < split.length; i++) {
    markup += '<tr>\n';
    markup += `<td style=\"width: 5%;\">${row[i]}</td>\n`;
    markup += `<td style=\"width: 94%;\">${split[i]}</td>\n`;
    markup += '</tr>\n';
}
markup += "</tbody>\n";
markup += "</table>\n";
console.log(markup);
pbcopy(markup);
function pbcopy(data) {
    var proc = require('child_process').spawn('pbcopy');
    proc.stdin.write(data); proc.stdin.end();
}