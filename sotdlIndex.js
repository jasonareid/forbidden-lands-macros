const pdfDirectory = [
    {name: "Core Book", code: "CORE", directory: [
        ["Character Creation", [
            ["Ancestries", [
                ["Human", 11],
                ["Changeling", 13],
                ["Clockwork", 15],
                ["Dwarf", 17],
                ["Goblin", 19],
                ["Orc", 21],
            ]],
        ]],
        ["Playing the Game", [
            ["Damage", 39],
            ["Afflictions", 41],
            ["The Environment", 42],
            ["Combat", [
                ["The Battlefield", 46],
                ["Awareness / Surprise", 46],
                ["Rounds", 46],
                ["Move", 47],
                ["Action", 48],
                ["Attacks", 50],
            ]]
        ]],
        ["Novice Paths", 53],
        ["Expert Paths", 59],
        ["Master Paths", 77],
        ["Equipment", 99],
        ["Magic", [
            ["Spells", 111],
            ["Traditions", 115],
        ]],
        ["A Land in Shadow", [
            ["The Northern Reach", 163]
        ]]
    ]},
    {name: "Cheat Sheet", code: "CHEAT", directory: [
        ["Sheet", 1],
    ]},
    {name: "Dungeon World: Perilous Wilds", code: "DW_TPW", directory: [
        ["Lead the Way: Followers", 18],
        ["See the World: Travel", 24],
        ["Weather the Storm: Weather", 32],
        ["Plumb the Depths: Dungeons", 54],
        ["Name Every Person", 66],
    ]},
    {name: "GMM: Wilderness Dressing", code: "GMM_WD", directory: [
        ["Features & Events", [
            ["Campsite: Minor Events", 8],
            ["Campsite: Features", 10],
            ["Small Castles", 12],
            ["Large Castles", 14],
            ["Castle Dressing", 16],
            ["Castle Names", 18],
            ["Castle Hooks, Complications & Opportunities", 19],
            ["Lord of the Castle", 19],
            ["Small Ruins", 20],
            ["Large Ruins", 22],
            ["Ruins Dressing", 24],
            ["Small Caves", 26],
            ["Small Cave Dressing", 28],
            ["Extreme Weather: Rainstorms", 30],
            ["Extreme Weather: Snowstorms", 32],
            ["Extreme Weather: Windstorms", 34],
        ]],
        ["Folk", [
            ["Bandit Rank & File", 38],
            ["Bandit Leaders", 39],
            ["Bandit Hooks, Complications & Opportunities", 40],
            ["Travellers: Peddlers, Merchants & Traders", 42],
            ["Travellers: Bards, Minstrels & Troubadours", 44],
            ["Travellers: Mercenaries, Sellswords & Freebooters", 46],
        ]],
        ["By Land", [
            ["Borderlands: Minor Events", 50],
            ["Borderlands: Dressing", 52],
            ["Desert: Minor Events", 54],
            ["Desert: Dressing", 56],
            ["Farmland: Minor Events", 58],
            ["Farmland: Farmland Dressing", 60],
            ["Forests & Woodlands: Minor Events", 62],
            ["Forests & Woodlands: Dressing", 66],
            ["Forest(Primal): Minor Events", 70],
            ["Forest (Primal): Dressing", 73],
            ["Frozen Lands: Minor Events", 75],
            ["Frozen Lands: Dressing", 78],
            ["Hills: Minor Events", 80],
            ["Hills: Dressing", 82],
            ["Mountains: Minor Events", 84],
            ["Mountains: Dressing", 86],
            ["Plains: Minor Events", 88],
            ["Plains: Dressing", 90],
            ["Swamps & Marshes: Minor Events", 92],
            ["Swamps & Marshes: Dressing", 94],
        ]],
        ["By Sea", [
            ["Coast: Minor Events", 98],
            ["Coast: Coastal Dressing", 102],
            ["Sea Voyages: Shipboard Events", 106],
            ["Sea Voyages: Omens", 108],
            ["Sea Voyages: Minor Encounters", 109],
            ["Shipwrecks: The Wreck", 110],
            ["Shipwrecks: Shipwreck Dressing", 112],
            ["Pirate Ships: Designing A Pirate Ship", 114],
            ["Pirate Ships: Ship’s Name (Subject)", 116],
            ["Pirate Ships: Ship’s Name (Descriptor)", 117],
            ["Pirate Ships: Knowledge", 118],
            ["Pirate Ships: Flags and Figureheads", 120],
        ]],
    ]},
    {name: "GMM: Urban Dressing", code: "GMM_UD1", directory: [
        ["Naming Locations", [
            ["Naming Locations", 8],
            ["Table A (Descriptive)", 9],
            ["Table B (Creatures)", 10],
            ["Table C (People)", 11],
            ["Table D (Objects)", 12],
            ["Table E (Other)", 13],
        ]],
        ["Alleyways", [
            ["Appearance", 14],
            ["Names", 16],
            ["Hooks, Complications & Opportunities", 17],
            ["Encounters", 17],
            ["Associated NPCs", 18],
        ]],
        ["Docks", [
            ["Characteristics and Appearance", 22],
            ["Docked Ships", 24],
            ["Hooks, Complications and Opportunities", 25],
            ["Sights & Sounds", 26],
            ["NPCs", 28],
        ]],
        ["Graveyards", [
            ["Characteristics & Appearance", 30],
            ["Grave Markings", 32],
            ["Associated NPCs", 34],
            ["Hooks, Complications & Opportunities", 36],
        ]],
        ["Guildhalls", [
            ["Types of Guilds", 38],
            ["Guildhalls:Guildhalls", 40],
            ["Initiation, Motivations and Rumours", 42],
            ["Associated NPCS", 44],
        ]],
        ["Market Stalls", [
            ["Characteristics & Appearance", 46],
            ["What’s For Sale?", 48],
            ["Hooks, Complications & Opportunities", 49],
            ["Associated NPCs", 50],
        ]],
        ["Parks", [
            ["Characteristics and Appearance", 54],
            ["Things to Stumble Upon", 56],
            ["Hooks, Complications and Opportunities", 57],
            ["Associated NPCs", 58],
        ]],
        ["Ruined Buildings", [
            ["Characteristics & Appearance", 60],
            ["Dressing", 62],
            ["Hooks, Complications & Opportunities", 63],
            ["Legends & Rumours", 64],
        ]],
        ["Sages", [
            ["Characteristics & Appearance", 66],
            ["Whispers & Rumours", 68],
            ["Hooks, Complications & Opportunities", 69],
            ["Sample Sages", 70],
        ]],
        ["Shrines", [
            ["Characteristics and Appearance", 72],
            ["Object of Veneration", 74],
            ["Hooks, Complications and Opportunities", 75],
            ["Associated NPCs", 76],
        ]],
        ["Statues and Monuments", [
            ["Characteristics & Appearance", 80],
            ["Dressing", 82],
            ["Hooks, Complications & Opportunities", 84],
            ["Legends & Rumours", 85],
        ]],
        ["Temples", [
            ["Characteristics and Appearance", 86],
            ["Domain Features", 88],
            ["Donations, Tithings and Sacrifices", 90],
            ["Events, Festivals and Rites", 91],
            ["Clergy in a Hurry", 92],
        ]],
        ["Theatres", [
            ["Characteristics & Appearance (External)", 94],
            ["Characteristics & Appearance (Internal)", 96],
            ["Hooks, Complications & Opportunities", 97],
            ["Sights & Sounds", 98],
            ["Associated NPCs", 99],
        ]],
        ["Thieves", [
            ["Pick Pockets & Confidence Tricksters", 102],
            ["Thugs & Bashers", 104],
            ["Skilled Thieves", 106],
            ["Specialists", 108],
            ["Hooks, Complications & Opportunities", 110],
        ]],
        ["Traders & Craftsmen", [
            ["Characteristics & Appearance", 112],
            ["Selling", 114],
            ["Hooks, Complications & Opportunities", 115],
            ["Associated NPCs", 116],
        ]],
        ["The Watch", [
            ["Rank & File", 118],
            ["Experts & Specialists", 120],
            ["Informers & Watchers", 121],
            ["Sergeants & Captains & Specialists", 122],
            ["Hooks, Complications & Opportunities", 124],
        ]],
        ["Wizard's Tower", [
            ["Characteristics & Appearance", 126],
            ["Dressing", 128],
            ["Hooks, Complications & Opportunities", 130],
            ["Legends & Rumours", 131],
        ]],
        ["Taverns!", [
            ["Table A: Tavern Name (Descriptor)", 134],
            ["Table B: Tavern Name (Subject)", 135],
            ["Interesting Tavern Features", 136],
            ["Sample Customers", 138],
            ["Sample Staff", 140],
            ["Food & Drink", 142],
            ["Taproom Events", 144],
            ["Taproom Entertainment", 146],
            ["Sample Tavern Songs", 147],
            ["Games To Play", 148],
            ["Games to Play: Dragon and the Thief", 150],
            ["Games to Play: Events", 152],
            ["Games to Play: Players", 153],
            ["Barroom Brawls: Running a Brawl", 154],
            ["Barroom Brawls: Brawl Triggers", 155],
            ["Barroom Brawls: Brawl Events", 156],
            ["Barroom Brawls: Aftermath", 157],
        ]],
    ]},
    {name: "GMM: Urban Dressing II", code: "GMM_UD2", directory: [
        ["Naming Thoroughfares", 3],
        ["Borderland Town", [
            ["Sights & Sounds", 6],
            ["Businesses", 8],
            ["Folk of Interest", 10],
            ["Hooks, Complications & Opportunities", 12],
        ]],
        ["Bridge Town", [
            ["Sights & Sounds", 14],
            ["Businesses", 16],
            ["Remarkable Bridges", 18],
            ["Hooks, Complications & Opportunities", 20],
        ]],
        ["Decadent Town", [
            ["Sights & Sounds", 22],
            ["Businesses", 24],
            ["Folk of Interest", 26],
            ["Hooks, Complications & Opportunities", 28],
        ]],
        ["Dwarven Town", [
            ["Sights & Sounds", 30],
            ["Businesses", 32],
            ["Folk of Interest", 34],
            ["Hooks, Complications & Opportunities", 36],
        ]],
        ["Elven Town", [
            ["Sights & Sounds", 38],
            ["Businesses", 40],
            ["Folk of Interest", 42],
            ["Hooks, Complications & Opportunities", 44],
        ]],
        ["Logging Town", [
            ["Sights & Sounds", 46],
            ["Businesses", 48],
            ["Folk of Interest", 50],
            ["Hooks, Complications & Opportunities", 52],
        ]],
        ["Marsh Town", [
            ["Sights & Sounds", 54],
            ["Businesses", 56],
            ["Folk of Interest", 58],
            ["Hooks, Complications & Opportunities", 60],
        ]],
        ["Mining Town", [
            ["Sights & Sounds", 62],
            ["Businesses", 64],
            ["Folk of Interest", 66],
            ["Hooks, Complications & Opportunities", 68],
        ]],
        ["Pirate Town", [
            ["Sights & Sounds", 70],
            ["Businesses", 72],
            ["Folk of Interest", 74],
            ["Hooks, Complications & Opportunities", 76],
        ]],
        ["Plague Town", [
            ["Sights & Sounds", 78],
            ["Businesses", 80],
            ["Folk of Interest", 82],
            ["Hooks, Complications & Opportunities", 84],
        ]],
        ["Port Town", [
            ["Sights & Sounds", 86],
            ["Businesses", 88],
            ["Folk of Interest", 90],
            ["Hooks, Complications & Opportunities", 92],
        ]],
        ["Slum Town", [
            ["Sights & Sounds", 94],
            ["Businesses", 96],
            ["Folk of Interest", 98],
            ["Hooks, Complications & Opportunities", 100],
        ]],
        ["Trade Town", [
            ["Sights & Sounds", 102],
            ["Businesses", 104],
            ["Folk of Interest", 106],
            ["Hooks, Complications & Opportunities", 108],
        ]],
        ["War-Torn Town", [
            ["Sights & Sounds", 110],
            ["Businesses", 112],
            ["Folk of Interest", 114],
            ["Hooks, Complications & Opportunities", 116],
        ]],
    ]},
    {name: "GMM: Village Backdrops I", code: "GMM_VB1", directory: [
        ["Designing A Village", 6],
        ["Village Features", 7],
        ["Secrets & Conflicts", 9],
        ["Sample Village Names", 10],
    ]},
    {name: "GMM: Dungeon Dressing", code: "GMM_DD", directory: [
        ["Dungeon Design", [
            ["Things To Know About A Dungeon", 8],
            ["The Dungeon’s Purpose", 9],
            ["Dungeon Design", 10],
            ["Dungeon Ecology", 11],
            ["Dungeon Dressing", 12],
            ["Dungeon Physicality", 13],
            ["Principles of Megadungeon Design", 14],
            ["Alternate Dungeons", 16],
        ]],
        ["Dungeon Names", [
            ["Naming Conventions", 73],
            ["Table A (Type of Complex)", 75],
            ["Table B (Descriptor)", 76],
            ["Table C (Subject)", 78],
            ["Table D (Proper Names)", 79],
            ["Table E (Parts of a Dungeon)", 80],
        ]],
        ["Altars", [
            ["Characteristics & Appearance", 18],
            ["Dressing & Features", 20],
        ]],
        ["Archways", [
            ["Characteristics & Appearance", 22],
            ["Dressing & Features", 24],
        ]],
        ["Bridges", [
            ["Characteristics & Appearance", 26],
            ["Dressing & Features", 28],
        ]],
        ["Captives", [
            ["Adventurers", 30],
            ["Merchants & Their Train", 32],
            ["Evil Humanoids", 34],
            ["Hooks, Complications & Opportunities", 35],
        ]],
        ["Ceilings", [
            ["Characteristics & Appearance", 36],
            ["Dressing & Features", 38],
        ]],
        ["Chests", [
            ["Characteristics & Appearance", 40],
            ["Dressing & Features", 42],
        ]],
        ["Concealed Doors", [
            ["Characteristics & Appearance", 44],
            ["Dressing & Features", 46],
        ]],
        ["Corpses", [
            ["Characteristics and Appearance", 48],
            ["Monsters", 50],
            ["Humanoids", 51],
            ["Adventurers", 52],
        ]],
        ["Doom Paintings", [
            ["Characteristics & Appearance", 54],
            ["Dressing & Features", 56],
        ]],
        ["Doors", [
            ["Characteristics & Appearance", 58],
            ["Dressing & Features", 60],
        ]],
        ["Double Doors", [
            ["Characteristics & Appearance", 62],
            ["Dressing & Features", 66],
        ]],
        ["Dungeon Entrances", [
            ["Characteristics & Appearance", 68],
            ["Dressing & Features", 70],
            ["Secret Entrances", 72],
        ]],
        ["Floors", [
            ["Characteristics & Appearance", 81],
            ["Dressing & Features", 84],
        ]],
        ["Fountains", [
            ["Characteristics & Appearance", 86],
            ["Dressing & Features", 88],
        ]],
        ["Gates & Portals", [
            ["Characteristics & Appearance", 90],
            ["Dressing & Features", 92],
            ["Location", 94],
        ]],
        ["Goblin's Pickets", [
            ["Goblin’s Pockets", 97],
            ["Utterly Worthless", 98],
            ["Broken & Battered", 99],
            ["Yummy Nibbles", 100],
            ["Shiny Treasures", 101],
        ]],
        ["Illumination", [
            ["Braziers", 102],
            ["Candelabra", 103],
            ["Fireplaces", 104],
            ["Lanterns", 106],
            ["Magical Lights", 107],
            ["Torch Sconces", 108],
        ]],
        ["Legends", [
            ["Legends", 109],
            ["Lost Treasures", 110],
            ["Famed Adventurers", 112],
            ["Dungeon Features", 114],
            ["Dungeon Inhabitants", 116],
            ["Events & Deeds", 118],
        ]],
        ["Miscellaneous Features", [
            ["Carpets & Rugs", 120],
            ["Evidence of Previous Explorers", 122],
            ["Graffiti", 124],
            ["Junk & Rubbish", 126],
            ["Locks", 128],
            ["Mirrors", 130],
        ]],
        ["Miscellaneous", [
            ["Strange Atmosphere", 131],
            ["Strange Magical Affects", 132],
            ["Strange Smells", 134],
            ["Strange Sounds", 135],
        ]],
        ["Mundane Chest Contents", [
            ["Clothes & Possessions", 136],
            ["Odds & Sundries", 138],
            ["Priest’s Chests", 139],
            ["Provisions", 140],
            ["Wizard’s Chests", 141],
        ]],
        ["Pits", [
            ["Characteristics & Appearance", 142],
            ["Dressing & Features", 144],
        ]],
        ["Pools", [
            ["Characteristics & Appearance", 146],
            ["Dressing & Features", 148],
        ]],
        ["Portcullises", [
            ["Characteristics & Appearance", 150],
            ["Dressing & Features", 152],
        ]],
        ["Sarcophagi", [
            ["Characteristics & Appearance", 154],
            ["Dressing & Features", 156],
        ]],
        ["Secret Doors", [
            ["Characteristics & Appearance", 158],
            ["Dressing & Features", 160],
        ]],
        ["Stairs", [
            ["Characteristics & Appearance", 162],
            ["Dressing & Features", 164],
        ]],
        ["Statues", [
            ["Characteristics & Appearance", 166],
            ["Subjects (Personalities)", 167],
            ["Subjects (Beasts & Monsters)", 168],
            ["Statue Dressing", 169],
        ]],
        ["Strange Growths", [
            ["Characteristics & Appearance", 170],
            ["Dressing & Features", 172],
        ]],
        ["Tapestries", [
            ["Characteristics & Appearance", 174],
            ["Dressing & Features", 176],
        ]],
        ["Thrones", [
            ["Characteristics & Appearance", 178],
            ["Dressing & Features", 180],
        ]],
        ["Trapdoors", [
            ["Characteristics & Appearance", 182],
            ["Dressing & Features", 184],
        ]],
        ["Walls", [
            ["Characteristics & Appearance", 186],
            ["Dressing & Features", 188],
        ]],
        ["Wells", [
            ["Characteristics & Appearance", 190],
            ["Dressing & Features", 192],
        ]],
    ]},
    {name: "GMM: Monstrous Lairs I", code: "GMM_ML1", directory: [
        ["Aboleth’s Sunken Cavern", 4],
        ["Bandit Camp", 6],
        ["Bugbears’ Lair", 8],
        ["Dark Creeper Village", 10],
        ["Ghoul Nest", 12],
        ["Giant Spider’s Web", 14],
        ["Gnolls’ Camp", 16],
        ["Goblin Raiding Camp", 18],
        ["Harpy’s Nest", 20],
        ["Kobold Warrens", 22],
        ["Lizardfolk Village", 24],
        ["Medusa Lair", 26],
        ["Minotaur’s Den", 28],
        ["Mummy’s Crypt", 30],
        ["Ogre’s Cave", 32],
        ["Owlbear Nest", 34],
        ["Pirates’ Cove", 36],
        ["Sahuagin’s Sunken Caves", 38],
        ["Troll Cave", 40],
        ["Thieves’ Hideout", 42],
        ["Wights’ Barrow", 44],
        ["Witch’s Hovel", 46],
    ]},
    {name: "GMM: Monstrous Lairs II", code: "GMM_ML2", directory: [
        ["Assassins’ Hideout", 4],
        ["Basilisk’s Den", 6],
        ["Chimera’s Den", 8],
        ["Cultists' Hidden Fane", 10],
        ["Derro Outpost.", 12],
        ["Drow Outpost", 14],
        ["Dryad's Glade", 16],
        ["Duergar Outpost", 18],
        ["Fire Giants’ Hall", 20],
        ["Frost Giant’s Glacial Rift", 22],
        ["Ghost-Haunted House", 24],
        ["Green Hag's Swamp", 26],
        ["Otyugh's Sewer", 28],
        ["Hill Giants’ Steading", 30],
        ["Hydra’s Den", 32],
        ["Roper's Cave", 34],
        ["Sphinx's Cave", 36],
        ["Smugglers' Hidden Den", 38],
        ["Scrags' Sunken Cave", 40],
        ["Sea Hag's Grotto.", 42],
        ["Troglodytes’ Warren", 44],
        ["Vampire’s Crypt.", 46],
        ["Wyvern’s Nest.", 48],
        ["Wolves’ Den", 50],
    ]},
    {name: "GMM: Awesome NPCs", code: "GMM_ANPC", directory: [
        ["DESIGNING NPCS", [
            ["Designing Major NPCs", 5],
            ["Naming NPCs", 6],
            ["Pre-Generated NPCs", 7],
            ["Table A: Physical Traits", 8],
            ["Table B: Emotional/Behavioural Traits", 9],
            ["Table C: Mannerisms", 10],
            ["Table D: Activity", 11],
            ["Table E: Profession", 12]
        ]],
        ["DEMI-HUMAN NAMES", [
            ["Dwarven Names", 14],
            ["Elven Names", 15],
            ["Gnomish Names", 16],
            ["Halfling Names", 17],
            ["Half-Orc Names", 18],
            ["Sample Names", 19]
        ]],
        ["HUMAN NAMES", [
            ["African Names", 22],
            ["Anglo-Saxon Names", 23],
            ["Arabic Names", 24],
            ["Carolingian Names", 25],
            ["Chinese Names", 26],
            ["Egyptian Names", 27],
            ["Finnish Names", 28],
            ["Germanic Names", 29],
            ["Gothic Names", 30],
            ["Greek Names", 31],
            ["Italian Names", 32],
            ["Japanese Names", 33],
            ["Roman Names", 34],
            ["Slavic Names", 35],
            ["South American Names", 36],
            ["Spanish Names", 37],
            ["Sumerian Names", 38],
            ["Viking Names", 39]
        ]]
    ]},
    {name: "d30 DM Companion", code: "D30_DMC", directory: [
        ["INTRO", [
            ["Using This Book", 3],
            ["Dungeon Mapping Master Key", 4],
            ["Dungeon Crawl Worksheet", 5],
        ]],
        ["QUICK CHARACTER GENERATION", [
            ["Classed Character Attribute Generator (quick slot-based attribute generation for classed characters)", 6],
            ["Motivations (30 character motivations for freelance adventurers)", 6],
            ["Quick Character Inventory: Weapons, Armor, and Class-specific Equipment", 7],
        ]],
        ["DUNGEON FEATURES", [
            ["Dungeon Features (General): Walls, Floors, and Doors", 8],
            ["Miscellaneous Dungeon Embellishments", 9],
            ["Miscellaneous Dungeon Debris", 10],
            ["Molds, Slimes, and Mushrooms", 11],
            ["Room Trap Generator", 12],
            ["Treasure Containers & Protection and Miscellaneous Magic Trap Effects", 13],
            ["Poison Generator", 13],
        ]],
        ["MONSTERS", [
            ["Monster Encounters: Overview, Number Appearing Determination Chart", 14],
            ["Monster Encounter Tables: Levels 1-3", 15],
            ["Monster Encounter Tables: Levels 4-5", 16],
            ["Edition Guide to Monster Listings", 16],
            ["Monster Encounter Tables: Levels 6-7", 17],
            ["Monster Encounter Tables: Levels 8-9", 18],
            ["Monster Encounter Descriptions: Human and Demi-human", 19],
            ["Monster Encounter Descriptions: Ant, Giant Driver - Copper Colossus", 20],
            ["Monster Encounter Descriptions: Corroder - Ghoul", 21],
            ["Monster Encounter Descriptions: Giant, Cloud - Hellhound", 22],
            ["Monster Encounter Descriptions: Hobghoul - Lycanthrope, Weretiger", 23],
            ["Monster Encounter Descriptions: Lycanthrope, Werewolf - Shrieker", 24],
            ["Monster Encounter Descriptions: Skeleton - Zombie", 25],
        ]],
        ["TREASURE", [
            ["Quick Treasure Horde Generation I: Overview, Gems, Jewels", 26],
            ["Quick Treasure Horde Generation: II Copper, Silver, Electrum, Gold, Platinum", 27],
            ["Quick Treasure Horde Generation III: Magic Items, Individual Treasure Types", 28],
            ["Gems and Gem-centric Jewelry", 29],
            ["Elven/Dwarven Jewelry", 29],
            ["Magic Items I: Weapons, Armor, and Protective Items", 30],
            ["Magic Items II: Scrolls", 31],
            ["Magic Items III: Potions", 32],
            ["Magic Items IV: Summon/Control/Command Items", 33],
            ["Magic Items V: Miscellaneous Magic Items I", 34],
            ["Magic Items VI: Miscellaneous Magic Items II", 35],
        ]]
    ]},
    {name: "d30 Sandbox", code: "D30_SBX", directory: [
            ["INTRO", [
                ["Using This Book", 3],
                ["Wilderness Mapping Key", 6],
                ["Hex Crawl Worksheet", 7],
                ["Settlement Worksheet", 8],
                ["NPC Record Sheet", 9],
            ]],
            ["ADVENTURE GENERATOR", [
                ["Adventure Generator Tables I", 10],
                ["Adventure Generator Tables II", 11],
            ]],
            ["WILDERNESS LOCATIONS & LOCALES", [
                ["Prevailing Weather Conditions", 12],
                ["Weather Events", 13],
                ["Off-course Determination", 14],
                ["Foraging & Hunting", 15],
                ["Natural Features & Phenomena", 16],
                ["Natural Features & Phenomena Defns", 17],
                ["Settlements & Inhabitation", 18],
                ["Ruins Generator", 19],
                ["Temple Generator", 20],
                ["Cult Generator", 21],
                ["Magical Places Generator", 22],
                ["Pilgrims Generator", 23],
                ["Road Encounters", 24],
                ["Stronghold: Owner and Patrol", 26],
                ["Stronghold: Construction", 27],
                ["Heraldry Generator", 28],
                ["Expanded Heraldry", 29],
            ]],
            ["SETTLEMENTS", [
                ["Settlement Background", 30],
                ["Assorted Settlement Encounters", 31],
                ["City Guards & Patrols", 32],
                ["Torture & Execution", 33],
                ["Settlement Suppliers", 34],
                ["Shops & Shopkeepers", 35],
                ["Tavern Names", 36],
                ["Taverns", 37],
            ]],
            ["NPCs", [
                ["Classed NPCs: Summaries", 38],
                ["Classed NPCs: Abilities", 39],
                ["Classed NPCs: Inventory", 40],
                ["Classed NPCs: Magic Items", 41],
                ["Occupations", 42],
                ["Nobles and Households", 43],
                ["Sages", 44],
                ["Physical Traits", 46],
                ["Persona & Behavior", 47],
                ["Background, Eccentricities, and Talents", 48],
                ["Language Determination", 49],
                ["Henchmen/Hirelings", 50],
                ["Henchmen/Hirelings Reactions", 50],
                ["Henchmen/Hirelings Recruitment Modifiers", 51],
                ["Retainer Loyalty", 51],
            ]],
        ]},
    {name: "The Metamorphica", code:"METAM", directory: [
        ["Mutations Tables", [
            ["Directions", 7],
            ["The Mutation Table Index", 7],
            ["Body: Form Table", 8],
            ["Body: Functions Table", 10],
            ["Mind: Behaviours Table", 12],
            ["Mind: Cognition Table", 13],
            ["Psychic Powers Table", 14],
            ["Supernatural Attributes Table", 15],
        ]],
        ["Mutation Descriptions", [
            ["Body: Form Mutations", 20],
            ["Body: Functions Mutations", 36],
            ["Mind: Behaviours Mutations", 54],
            ["Mind: Cognitive Mutations", 64],
            ["Psychic Powers", 70],
            ["Supernatural Attributes", 86],
        ]],
        ["Additional Tables", [
            ["Appearance Change Table", 134],
            ["Body Part Table", 134],
            ["Colour Table: Basic", 135],
            ["Colour Table: Extended", 135],
            ["Creature Tables", 136],
            ["Amphibians and Reptiles", 136],
            ["Aquatic Animals", 137],
            ["Birds", 138],
            ["Fantastic Animals", 140],
            ["Fantastic Peoples", 141],
            ["Mammals", 142],
            ["Other Animals", 143],
            ["Plants", 144],
            ["Detrimental Mental Mutations", 146],
            ["Detrimental Physical Mutations", 147],
            ["Favourable Mental Mutations", 148],
            ["Favourable Physical Mutations", 149],
            ["Materials", 150],
            ["Monster Parts", 151],
            ["Monster Powers", 152],
            ["Mutant Features Tables", 154],
        ]],
        ["After the Fall", [
            ["Post-Apocalyptic Mutants", 158],
            ["Beastlings", 159],
            ["Hyperevolved Animals", 160],
            ["Mutant Hordes", 161],
            ["Mutant Plants", 166],
            ["Plant Societies", 169],
            ["Post-Apocalyptic Mutations", 170],
            ["Scavenged Pieces of the World", 172],
        ]],
        ["The Ficto-Technica", [
            ["Artifacts of Ficto-Science", 182],
            ["Aspects", 184],
            ["Effects", 189],
            ["Forms", 191],
            ["Prefixes", 196],
            ["Qualities", 201],
            ["Suffixes", 205],
            ["Magic Items", 208],
            ["Adjectives", 214],
            ["Features", 215],
            ["Purposes", 217],
            ["Shapes", 218],
        ]],
        ["Popular Science", [
            ["Experiments in Secret", 222],
            ["Four-Colour Heroes", 223],
            ["Super Powers Table", 224],
            ["Uplifted Animals", 226],
            ["Xenobiology", 228],
        ]],
        ["Swords of the Chaos Lord", [
            ["Slaves to Chaos", 232],
            ["The Blessings of Demon-Gods", 233],
            ["Demons", 234],
            ["Motivations", 236],
            ["Infernal Characteristics", 237],
            ["Summoning Mishap Table", 255],
            ["Bibliography", 258],
            ["Index", 260],
        ]],
    ]}
];

const toolsDirectory = [
    {name: "Game", directory: [
        ["SotDL Reference Tables", "https://schwalbentertainment.com/play-aids/shadow-of-the-demon-lord-reference-tables/"],
    ]},
    {name: "Generators", directory: [
        ["Forbidden Lands Session Generator", "https://perchance.org/fl-session-generator"],
        ["Wyrmtales", "http://wyrmtales.net/"],
        ["Fantasy Name Generator", "https://www.fantasynamegenerators.com/"],
        ["Kassoon Town Generator+", "https://www.kassoon.com/dnd/town-generator/"],
        ["Chaotic Shiny", "http://chaoticshiny.com/index.php"],
        ["Donjon", [
            ["Fantasy Random", "https://donjon.bin.sh/fantasy/random/"],
            ["Dungeon", "https://donjon.bin.sh/fantasy/dungeon/"],
            ["Town Map", "https://donjon.bin.sh/fantasy/town/"],
        ]],
    ]},
];

class WebTool extends Application {
    constructor(name, url) {
        super({title: name});
        this.name = name;
        this.url = url;
    }
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 800,
            height: 590,
            resizable: true,
        });
    }
    _renderInner(data, options) {
        return $(
            `<iframe src="${this.url}" width="100%" height="580px"></iframe>`
        );
    }
}

class SotdlIndex extends Application {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            title: "Index",
            width: 320,
            height: 675,
            resizable: true,
        });
    }
    activateListeners(html) {
        super.activateListeners(html);
        html.find('.folder').on('click', (ev) => {
            ev.stopPropagation();
            var ullist = $(ev.currentTarget).children('ul:first');
            ullist.toggle('fast');
        });

        html.find('.entry').on('click', (ev) => {
            ev.stopPropagation();
            let $entry = $(ev.currentTarget);
            let page = parseInt($entry.data('page'));
            let bookCode = $entry.closest('.book').data('code');
            ui.PDFoundry.openPDFByCode(bookCode, {page: page});
        });
        
        html.find('.tool').on('click', (ev) => {
            ev.stopPropagation();
            let $entry = $(ev.currentTarget);
            let name = $entry.data('name');
            let url = $entry.data('url');
            new WebTool(name, url).render(true);
        });
    }

    _renderInner(data, options) {
        let html = `<div>`;
        html += `<h3>PDFs</h3>`;
        html += `<ul>`;
        pdfDirectory.forEach(book => {
            html += `<li class='book folder' style="cursor: pointer;" data-code="${book.code}">${book.name}`;
            html += `<ul style="display:none">`;
            book.directory.forEach(entry => {
                if(Number.isInteger(entry[1])) {
                    html += `<li style="cursor:pointer;" class='entry' data-page="${entry[1]}">${entry[0]}</li>`;
                } else {
                    html += `<li style="cursor:pointer;" class='folder'">${entry[0]}`;
                    if(entry[1]) {
                        html += '<ul style="display:none">';
                        entry[1].forEach(subEntry => {
                            if(Number.isInteger(subEntry[1])) {
                                html += `<li style="cursor:pointer" class='entry' data-page="${subEntry[1]}">${subEntry[0]}</li>`;
                            } else {
                                html += `<li style="cursor:pointer;" class='folder'">${subEntry[0]}`;
                                html += '<ul style="display:none">';
                                subEntry[1].forEach(subSubEntry => {
                                    html += `<li style="cursor:pointer" class='entry' data-page="${subSubEntry[1]}">${subSubEntry[0]}</li>`;
                                });
                                html += '</ul>'
                                html += '</li>';
                            }
                        })
                        html += '</ul>';
                    }
                    html += '</li>';
                }
            });
            html += `</ul></li>`;
        })
        html += `</ul>`;
        html += `<h3>Tools</h3>`;
        html += `<ul>`;
        toolsDirectory.forEach(toolCollection => {
            html += `<li class='folder' style="cursor: pointer;">${toolCollection.name}`;
            html += `<ul style="display:none">`;
            toolCollection.directory.forEach(tool => {
                if(typeof tool[1] === 'string') {
                    html += `<li style="cursor:pointer;" class='tool' data-name="${tool[0]}" data-url="${tool[1]}">${tool[0]}</li>`;
                } else {
                    html += `<li style="cursor:pointer;" class='folder'">${tool[0]}`;
                    if (tool[1]) {
                        html += '<ul style="display:none">';
                        tool[1].forEach(subTool => {
                            html += `<li style="cursor:pointer" class='tool' data-name="${tool[0]}" data-url="${subTool[1]}">${subTool[0]}`;
                        })
                        html += '</ul>';
                    }
                    html += '</li>';
                }
            });
            html += `</ul>`;
            html += '</li>';
        })
        html += `</ul>`;
        html += '</div>;'
        return $(html);
    }
}

new SotdlIndex().render(true);