Config = {}
Config.Rewards = {
	--['case item name']
	['case_recoil'] = { --Case item name in your inventory
		[1] = {
			item = 'weapon_pistol', --Item name in your inventory. Can be any item.
			weight = 70 --Weighted chance of item dropping. Higher the number, higher the chance. 70/100 == high chance, common. 5/100 == low chance, rare. Duh.
		},
		[2] = {
			item = 'weapon_assaultrifle',
			weight = 25
		},
		[3] = {
			item = 'cola',
			weight = 5
		},
	},
    -- ['case_prisma2'] = {
    --     [1] = {
    --         item = 'weapon_g19',
    --         image = 'img/weapon_g19.png',
    --         weight = 70
    --     },
    --     [2] = {
    --         item = 'weapon_mp5',
    --         image = 'img/weapon_mp5.png',
    --         weight = 25
    --     },
    --     [3] = {
    --         item = 'weapon_scar17fm',
    --         image = 'img/weapon_scar17fm.png',
    --         weight = 5
    --     },
    -- },
}
