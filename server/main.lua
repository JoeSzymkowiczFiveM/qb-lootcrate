local function weighted_random(pool)
	local poolsize = 0
	for _, item in pairs(pool) do
		poolsize = poolsize + item.weight
	end

	math.randomseed(os.time())
	local selection = math.random(poolsize)

	for id, item in pairs(pool) do 
		selection = selection - item.weight
		if selection <= 0 then 
			return id
		end
	end
end

CreateThread(function()
	for caseName, items in pairs(Config.Rewards) do 
		ESX.RegisterUsableItem(caseName, function(player, _, item)
			local random <const> = weighted_random(items)

			TriggerClientEvent('lootcrate:client:open', player, caseName, random, item)
		end)
	end
end)

RegisterNetEvent("lootcrate:server:give", function(data)
	local usedItem <const> = data.usedItem

	local slotItem <const> = exports.ox_inventory:GetSlot(source, usedItem.slot)
	if not slotItem or slotItem.name ~= usedItem.name then 
		return
	end

	exports.ox_inventory:RemoveItem(source, usedItem.name, 1, nil, usedItem.slot)
	
	local result <const> = Config.Rewards[data.case][data.random]
	if not result then 
			return
	end

	exports.ox_inventory:AddItem(source, result.item, 1)
end)