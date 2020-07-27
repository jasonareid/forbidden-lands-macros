( async () => {
    let pack = game.packs.find(p => p.collection === 'world.weapons-ranged');
    const existingContent = await pack.getContent();
    for(const entry of existingContent) {
        await pack.deleteEntity(entry._id);
    }

    let itemData = [
        ['Rock', '1H', 0, 1, 'Near', '0s', 'Light', ''],
        ['Throwing Knife', '1H', 1, 1, 'Near', '1s', 'Light', ''],
        ['Throwing Axe', '1H', 1, 2, 'Near', '2s', 'Normal', ''],
        ['Throwing Spear', '1H', 2, 1, 'Short', '2s', 'Normal', ''],
        ['Sling', '1H', 1, 1, 'Short', '1s', 'Light', ''],
        ['Short Bow', '2H', 2, 1, 'Short', '6s', 'Light', ''],
        ['Longbow', '2H', 2, 1, 'Long', '12s', 'Normal', ''],
        ['Light Crossbow', '2H', 1, 2, 'Long', '24s', 'Normal', 'Loading is slow action.'],
        ['Heavy Crossbow', '2H', 1, 3, 'Long', '40s', 'Heavy', 'Loading is a slow action.']
    ];
    for(let i = 0; i < itemData.length; i++) {
        let row = itemData[i];
        let created = await Item.create(  {
            name: row[0],
            type: "weapon",
            data: {
                category: "Ranged",
                grip: row[1],
                bonus: parseInt(row[2]),
                damage: parseInt(row[3]),
                range: row[4],
                cost: row[5],
                weight: row[6],
                features: row[7]
            }
        }, {temporary: true});
        console.log(created);
        console.log(pack);
        const entity = await pack.importEntity(created);
        console.log(`Imported Item ${created.name} into Compendium pack ${pack.collection}`);
    }
})();
