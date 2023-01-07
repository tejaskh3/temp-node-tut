// The File System module provides a way of working with the computer's file system.

const {readFileSync,writeFileSync} = require("fs")
console.log('start');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
// console.log(first,second);

// lot of work is going here synchronously so, reading & writing(new file) 
// so if this takes too long time then our application will be down 
// as an alternative check out the async approach.
// go to the async file 11-async.js you you will find the difference b/w sync and async approach.

// we can't server another user untill we get done with previous one.

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag : "a"}
)
console.log('done with the task.')
console.log('Starting the next one.');
