Config = {}
Config.Rewards = {
	['case_recoil'] = { --Case item name in your inventory
		--Reward items
		{
			item = 'weapon_pistol', --Item name in your inventory. Can be any item.
			weight = 70 --Weighted chance of item dropping. Higher the number, higher the chance. 70/100 == high chance, common. 5/100 == low chance, rare. Duh.
		},
		{
			item = 'weapon_assaultrifle',
			weight = 25
		},
		{
			item = 'cola',
			weight = 5
		},
	},
	['case_prisma2'] = {
		{
			item = 'cola',
			weight = 70
		},
		{
				item = 'water',
				weight = 25
		},
		{
				item = 'burger',
				weight = 5
		},
	},
}
