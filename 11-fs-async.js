// The File System module provides a way of working with the computer's file system.

// this id different from sync approach if the following way 
// 1. when the controle reach out to the functionality this approach offload this task and make it self ready 
// for another user at the very same moment, this way we can server more user at same time.


// callback function -A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

const {readFileSync,writeFileSync, readFile} = require("fs")

// add start before reading this file 
console.log('start')

readFile('./content/first.txt', 'utf8', (err,result)=> {
    if(err){
        console.log(err);
        return;
    }
    const first = result 
    readFile('./content/second.txt', 'utf8', (err,result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result 
        writeFileSync('./content/result-async.txt', `Here is the async result : ${first}, ${second}`, (err,result)=>{
            if(err){
                console.log(err)
                return 
            }
            console.log('Done with this result.');
        })
    })
})

console.log('start the next task.');

// later we will use these reading and writing with database that is reading and writing in database.
