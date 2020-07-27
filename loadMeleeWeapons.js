( async () => {
    let pack = game.packs.find(p => p.collection === 'world.weapons-melee');
    const existingContent = await pack.getContent();
    for(const entry of existingContent) {
        await pack.deleteEntity(entry._id);
    }

    let itemData = [
        ['Knife', '1H', '1', '1', 'Arm', '1s', 'Light', 'Pointed'],
        ['Dagger', '1H', '1', '1', 'Arm', '2s', 'Light', 'Edged, Pointed'],
        ['Falchion', '1H', '1', '2', 'Arm', '4s', 'Normal', 'Edged, Pointed'],
        ['Shortsword', '1H', '2', '1', 'Arm', '6s', 'Normal', 'Edged, Pointed, Parrying'],
        ['Broadsword', '1H', '2', '2', 'Arm', '10s', 'Normal', 'Edged, Pointed, Parrying'],
        ['Longsword', '1H', '2', '2', 'Arm', '18s', 'Heavy', 'Edged, Pointed, Parrying'],
        ['Two-Handed Sword', '2H', '2', '3', 'Arm', '40s', 'Heavy', 'Edged, Pointed, Parrying'],
        ['Scimitar', '1H', '1', '2', 'Arm', '8s', 'Normal', 'Edged, Pointed, Hook, Parrying'],
        ['Handaxe', '1H', '2', '2', 'Arm', '2s', 'Normal', 'Edged, Hook'],
        ['Battleaxe', '1H', '2', '2', 'Arm', '6s', 'Heavy', 'Edged, Hook'],
        ['Two-Handed Axe', '2H', '2', '3', 'Arm', '24s', 'Heavy', 'Edged, Hook'],
        ['Mace', '1H', '2', '1', 'Arm', '4s', 'Normal', 'Blunt'],
        ['Morningstar', '1H', '2', '2', 'Arm', '8s', 'Normal', 'Blunt'],
        ['Warhammer', '1H', '2', '2', 'Arm', '12s', 'Normal', 'Blunt, Hook'],
        ['Flail', '1H', '1', '2', 'Near', '16s', 'Normal', 'Blunt'],
        ['Wooden Club', '1H', '1', '1', 'Arm', '1s', 'Normal', 'Blunt'],
        ['Large Wooden Club', '2H', '1', '2', 'Arm', '2s', 'Heavy', 'Blunt'],
        ['Heavy Warhammer', '2H', '2', '3', 'Arm', '22s', 'Heavy', 'Blunt, Hook'],
        ['Staff', '2H', '1', '1', 'Near', '1s', 'Normal', 'Blunt, Hook, Parrying'],
        ['Short Spear', '1H', '1', '1', 'Near', '2s', 'Normal', 'Pointed'],
        ['Long Spear', '2H', '2', '1', 'Near', '4s', 'Normal', 'Pointed'],
        ['Pike', '2H', '2', '2', 'Near', '12s', 'Heavy', 'Pointed'],
        ['Halberd', '2H', '2', '2', 'Near', '30s', 'Heavy', 'Pointed, Edged, Hook'],
        ['Trident', '2H', '1', '2', 'Near', '6s', 'Normal', 'Pointed, Hook'],
    ];
    for(let i = 0; i < itemData.length; i++) {
        let row = itemData[i];
        let created = await Item.create(  {
            name: row[0],
            type: "weapon",
            data: {
                category: "Melee",
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
