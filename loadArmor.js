( async () => {
    let pack = game.packs.find(p => p.collection === 'world.armor');
    const existingContent = await pack.getContent();
    for(const entry of existingContent) {
        await pack.deleteEntity(entry._id);
    }

    let itemData = [
        ['Leather', 2, 4, 'Body', 'Light', ''],
        ['Studded Leather', 3, 6, 'Body', 'Normal', ''],
        ['Chainmail', 6, 24, 'Body', 'Heavy', 'Armor Rating 3 against arrows and Stabs.'],
        ['Plate Armor', 8, 80, 'Body', 'Heavy', 'Modifies Move by –2'],
        ['Studded Leather Cap', 1, 3, 'Head', 'Light', ''],
        ['Open Helmet', 2, 8, 'Head', 'Light', ''],
        ['Closed Helmet', 3, 18, 'Head', 'Normal', ''],
        ['Great Helm', 4, 30, 'Head', 'Normal', 'Modifies Scout by -2'],
    ];
    for(let i = 0; i < itemData.length; i++) {
        let row = itemData[i];
        let created = await Item.create(  {
            name: row[0],
            type: "armor",
            data: {
                rating: {
                    value: row[1],
                    max: row[1],
                },
                cost: row[2],
                part: row[3],
                weight: row[4],
                features: row[5]
            }
        }, {temporary: true});
        console.log(created);
        console.log(pack);
        const entity = await pack.importEntity(created);
        console.log(`Imported Item ${created.name} into Compendium pack ${pack.collection}`);
    }
})();
