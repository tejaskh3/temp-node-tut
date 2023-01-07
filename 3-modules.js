// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)


const names = require('./4-name')
const sayhii = require("./5-utils")
const data = require('./alternative-flavor')
require('./7-mind-grenade')


console.log(data)

sayhii("vansh");
sayhii(names.tej);
sayhii(names.nam);