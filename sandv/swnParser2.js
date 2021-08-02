const fs = require('fs');
let str = fs.readFileSync('/Users/jasonreid/Library/Application Support/JetBrains/WebStorm2020.3/scratches//scratch_7.txt', 'utf-8');
/**
 *
 * Data of the form
 Xenophobic
 The locals hate offworlders. This hate may be born of some venerable crime against the planet, or it might just be the product of cultural loathing. Most planets naturally assume that their culture is morally or aesthetically superior to those of other worlds, but these people actively hate their neighbors. Offworlders are depraved, vicious, filthy beings who likely host a variety of social diseases and ought to be shunned or worse if they dare to show their faces on the clean soil of this world. Unsurprisingly, this makes trade a rather difficult business, but some among the governments and major corporations of this world are willing to make grim sacrifices to necessity. Of course, any such deals must be hidden from the populace or else mob violence is almost certain to ensue. Few traders have any love of landing on these worlds, but their very isolationism tends to make them fabulously profitable for those few ships that actually do arrive.
 Profoundly disgusted bureaucrat, Furtive corporate executive fearing discovery, Official who thinks the PCs have no moral reservations about any work, Desperate local willing to deal with the devil for some vital thing
 Purity-minded local demagogue, Investigator for "alien influences", Politician seeking to tie his rivals to offworlders, Local who wants to bury his former contracts permanently
 Store of goods too obviously alien to release to the market, Local specialty kept from outsiders, Cache of goods hidden by a lynched trader, Local treasure of incalculable value to natives
 The locals have been misled by manipulative rulers, The locals blame offworlders for a great disaster, The natives have a deeply alien moral framework, Only the ruling class is xenophobic
 Offworlders are executed on discovery if the mob doesn't get them first, Locals will buy only goods that can be disguised as local wares, The locals view certain wares as being too good for offworlders, All trade must take place under the pretext of tribute and submission.
 */
let split = str.split("\n");
console.log(split);
let markup = '';
markup += `<h2>${split[0]}</h2>\n`;
markup += `<p>${split[1]}</p>\n`;
markup += `<p>&nbsp;</p>\n`;
markup += "<table style=\"width: 99.1501%;\" border=\"1\">\n";
markup += "<tbody>\n";
let row = [null, null, 'Auth', 'Antag', 'Things', 'Compls', 'Regs'];
for(let i = 2; i < split.length; i++) {
    if(split[i] === '') continue;
    markup += '<tr>\n';
    markup += `<td style=\"width: 10%;\">${row[i]}</td>\n`;
    markup += `<td style=\"width: 84%;\">${split[i]}</td>\n`;
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