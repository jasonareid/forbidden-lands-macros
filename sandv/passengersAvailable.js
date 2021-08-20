class PassengersAvailable extends Application {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            title: "Passengers",
            width: 640,
            height: 800,
            resizable: true,
        });
    }
    _renderInner(data, options) {
        let html = `
            <div>
                <h2>Passengers</h2>
                <div id="dmForm">
                    <table border="0">
                        <tr>
                            <td>Steward:</td>
                            <td><input type="text" value="0" id="steward" style="width:50px;" /></td>
                            <td>Broker:</td>
                            <td><input type="text" value="0" id="broker" style="width:50px;" /></td>
                        </tr>
                        <tr>
                            <td>From</td>
                        </tr>
                        <tr>
                            <td>Pop 1-</td>
                            <td><input type="checkbox" data-passengerMod="-4" data-freightMod="-4" /></td>
                            <td>Pop 6-7</td>
                            <td><input type="checkbox" data-passengerMod="1" data-freightMod="2" /></td>
                            <td>Pop 8+</td>
                            <td><input type="checkbox" data-passengerMod="3" data-freightMod="4"/></td>
                        </tr>
                        <tr>
                            <td>Port A</td>
                            <td><input type="checkbox" data-passengerMod="2" data-freightMod="2"/></td>
                            <td>Port B</td>
                            <td><input type="checkbox" data-passengerMod="1" data-freightMod="1"/></td>
                        </tr>
                        <tr>
                            <td>Port E</td>
                            <td><input type="checkbox" data-passengerMod="-1" data-freightMod="-1"/></td>
                            <td>Port X</td>
                            <td><input type="checkbox" data-passengerMod="-3" data-freightMod="-3"/></td>
                        </tr>
                        <tr>
                            <td>TL 6-</td>
                            <td><input type="checkbox" data-freightMod="-1"/></td>
                            <td>TL 9+</td>
                            <td><input type="checkbox" data-freightMod="+2"/></td>
                        </tr>
                        <tr>
                            <td>Amber Zone</td>
                            <td><input type="checkbox" data-passengerMod="1" data-freightMod="-2" /></td>
                            <td>Red Zone</td>
                            <td><input type="checkbox" data-passengerMod="-4" data-freightMod="-6" /></td>
                        </tr>
                        <tr>
                            <td>To</td>
                        </tr>
                        <tr>
                            <td>Pop 1-</td>
                            <td><input type="checkbox" data-passengerMod="-4" data-freightMod="-4" /></td>
                            <td>Pop 6-7</td>
                            <td><input type="checkbox" data-passengerMod="1" data-freightMod="2" /></td>
                            <td>Pop 8+</td>
                            <td><input type="checkbox" data-passengerMod="3" data-freightMod="4" /></td>
                        </tr>
                        <tr>
                            <td>Port A</td>
                            <td><input type="checkbox" data-passengerMod="2" data-freightMod="2"/></td>
                            <td>Port B</td>
                            <td><input type="checkbox" data-passengerMod="1" data-freightMod="1"/></td>
                        </tr>
                        <tr>
                            <td>Port E</td>
                            <td><input type="checkbox" data-passengerMod="-1" data-freightMod="-1"/></td>
                            <td>Port X</td>
                            <td><input type="checkbox" data-passengerMod="-3" data-freightMod="-3"/></td>
                        </tr>
                        <tr>
                            <td>Amber Zone</td>
                            <td><input type="checkbox" data-passengerMod="-4" data-freightMod="1" /></td>
                            <td>Red/Unspecified</td>
                            <td><input type="checkbox" data-passengerMod="-6" data-freightMod="2"/></td>
                        </tr>
                    </table>
                    <button id="roll">Roll!</button>
                </div>
                <div id="output"></div>
            </div>
        `;
        return $(html);
    }
    activateListeners(html) {
        super.activateListeners(html);
        html.find('#roll').on('click', async (ev) => {
            let result = "";
            let passengerDM = 0;
            let freightDM = 0;
            passengerDM += parseInt(html.find("#steward").val());
            freightDM += parseInt(html.find("#broker").val());
            html.find("input:checked").each((i, el) => {
                passengerDM += parseInt($(el).data('passengerMod') || 0);
                freightDM += parseInt($(el).data('freightMod') || 0);
            });
            let rd6 = function(count) {
                let sum = 0;
                for(let i = 0; i < count; i++) {
                    sum += Math.floor(Math.random() * 6) + 1;
                }
                return sum;
            }
            let passengerDice = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 7, 8, 9, 10];
            let freightDice =   [0, 0, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 8, 9, 10];
            let rollResult = function(title, mod, diceSet, units, mult) {
                mult = mult || 1;
                return `
                    <div>
                        <h4>${title}: ${mult * rd6(diceSet[Math.min(Math.max(0, rd6(2) + mod), 20)])} ${units}</h4>
                    </div>
                `;
            }
            result += '<h3>Passengers</h3>';
            result += rollResult("High", -4 + passengerDM, passengerDice, "passengers");
            result += rollResult("Middle", passengerDM, passengerDice, "passengers");
            result += rollResult("Basic", passengerDM, passengerDice, "passengers");
            result += rollResult("Low", 1 + passengerDM, passengerDice, "passengers");
            result += '<h3>Freight</h3>';
            result += rollResult("Major", -4 + freightDM, freightDice, "tons", 10);
            result += rollResult("Minor", freightDM, freightDice, "tons", 5);
            result += rollResult("Incidental", 2+ freightDM, freightDice, "tons");

            html.find('#output').html(TextEditor.enrichHTML(result));
        });
    }
}
new PassengersAvailable().render(true);