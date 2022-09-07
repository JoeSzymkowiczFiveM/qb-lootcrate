local QBCore = exports['qb-core']:GetCoreObject()

local function weighted_random(pool)
    local poolsize = 0
    for i = 1, #pool do
        v = pool[i]
        poolsize = poolsize + v['weight']
    end
    local selection = math.random(poolsize)
    for i = 1, #pool do
        v = pool[i]
        selection = selection - v['weight']
        if (selection <= 0) then
            --print(i)
            return i
        end
    end
end

CreateThread(function()
    for k, v in pairs(Config.Rewards) do
        QBCore.Functions.CreateUseableItem(k, function(source, item)
            local src = source
            local Player = QBCore.Functions.GetPlayer(src)
            if Player.Functions.RemoveItem(k, 1) then
                local random = weighted_random(Config.Rewards[k])
                --print(random)
                SetTimeout(9500, function()
                    if Player.Functions.AddItem(Config.Rewards[k][random]['item'], 1) then
                        TriggerClientEvent('inventory:client:ItemBox', src, QBCore.Shared.Items[Config.Rewards[k][random]['item']], "add")
                        TriggerClientEvent('QBCore:Notify', src, 'You Won a ' .. QBCore.Shared.Items[Config.Rewards[k][random]['item']]['label']..'!', 'success')
                    end
                end)
                TriggerClientEvent('qb-lootcrate:client:open', src, k, random)
                TriggerClientEvent('inventory:client:ItemBox', src, QBCore.Shared.Items[k], "remove")
            end
        end)
    end
end)