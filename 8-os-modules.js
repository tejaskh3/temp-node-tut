// os module

const os = require("os")

// info about current user
 const user = os.userInfo()
 console.log(user)

//  method that returns the system uptime in seconds.

console.log(`The system up time is ${(os.uptime)/(60*60*24)} days.`)

const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMenu: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOS)