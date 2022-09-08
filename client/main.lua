local opening = false

RegisterNUICallback("getRewards", function(_, cb)
  cb(Config.Rewards)
end)

RegisterNUICallback("close", function(data, cb)
	if not opening then 
		return cb('ok')
	end

	if not data.immediate then
		Wait(1000)
		TriggerServerEvent("lootcrate:server:give", opening)
		Wait(1000)
	end
	SetNuiFocus(false, false)
	SendNUIMessage({
		status = false,
	})

	opening = nil
	cb('ok')
end)

RegisterNetEvent("lootcrate:client:open", function(case, random, usedItem)
	if opening then
		return
	end

	opening = {
		case = case,
		random = random,
		usedItem = usedItem,
	}

	SetNuiFocus(true, true)
	SendNUIMessage({
		status = true,
		case = case,
		selected = random,
	})
end)