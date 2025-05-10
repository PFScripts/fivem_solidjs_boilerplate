---@param message NuiMessage
---@param shouldFocus boolean
local function handleNuiMessage(message, shouldFocus)
    if not (type(message) == 'table') then return end
    if not (type(shouldFocus) == 'boolean') then return end
    SetNuiFocus(shouldFocus, shouldFocus)
    SendNUIMessage(message)
end

local function hideNui(data, cb)
    handleNuiMessage(data, false)
    cb(true)
end

RegisterNUICallback('hide', hideNui)

return handleNuiMessage