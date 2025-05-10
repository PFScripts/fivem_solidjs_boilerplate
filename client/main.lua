local handleNuiMessage = require('modules.nui')

RegisterCommand('test_nui', function()
    handleNuiMessage({ action = 'visibility', data = true }, true)
end, false)