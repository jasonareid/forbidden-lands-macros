const fs = require('fs');
let str = fs.readFileSync('/Users/jasonreid/Library/Application Support/JetBrains/WebStorm2020.3/scratches/scratch_8.txt', 'utf-8');
/**
 * Title
 * Description
 * Tag Lines 1-5
 */
let split = str.split("\n");
console.log(split);
let markup = '';
markup += `<h2>${split[0]}*</h2>\n`;
markup += `<p>${split[1]}</p>\n`;
markup += `<p>&nbsp;</p>\n`;
markup += "<table style=\"width: 99.1501%;\" border=\"1\">\n";
markup += "<tbody>\n";
let row = [null, null, 'E', 'F', 'C', 'T', 'P']; // World
//let row = [null, null, 'Auth', 'Antag', 'Things', 'Compls', 'Regs']; // Trade
for(let i = 2; i < split.length; i++) {
    if(split[i] === '') continue;
    markup += '<tr>\n';
    markup += `<td style=\"width: 10%;\">${row[i]}</td>\n`;
    markup += `<td style=\"width: 84%;\">${split[i].substring(split[i].indexOf(' ') + 1)}</td>\n`;
    markup += '</tr>\n';
}
markup += "</tbody>\n";
markup += "</table>\n";
markup += "<p>*From expansion</p>"
console.log(markup);
pbcopy(markup);
function pbcopy(data) {
    var proc = require('child_process').spawn('pbcopy');
    proc.stdin.write(data); proc.stdin.end();
}