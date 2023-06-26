var spin = require('spinnies')

var spinner = { 
"interval": 120,
"frames": [
"",
"Bo",
"Bot ",
"Bot by",
"Bot by Xe",
"Bot by Xeon",
"Bot by Xe",
"Bot by ",
"Bot by",
"Bot ",
"Bo",
""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}