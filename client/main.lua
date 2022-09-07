local display = false
local loadedConfig = false

RegisterNUICallback("close", function(data, cb)
    if not data.immediate then
        Wait(2000)
    end
    SetNuiFocus(false, false)
    SendNUIMessage({
        type = "ui",
        status = false,
    })
    cb('ok')
end)

RegisterNetEvent("qb-lootcrate:client:open", function(case, random)
    SetNuiFocus(true, true)
    if not loadedConfig then
        loadedConfig = true
        SendNUIMessage({
            type = "load",
            rewards = Config.Rewards,
        })
        Wait(100)
    end
    SendNUIMessage({
        type = "ui",
        status = true,
        case = case,
        selected = random,
    })
end)