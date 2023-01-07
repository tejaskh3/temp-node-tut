const http = require('http')

// creating a server using a method createServer which have a callback function
// which have two parameters and they both are objects
//  req - contains req and type of req made by user
// res - shows our response associated to that request.

const server = http.createServer((req,res)=>{
    //  res.write('welcome to our home page.')
    //  res.end()

    if(req.ulr == '/'){
        res.end("welcome to our home page.")
    }
    if(req.url == '/about'){
        res.end('this is our history.')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>Seems you have requested worng url</p>
        <a href='/'>Click here to go back home.</a>
    `)
})

// which port is being used by server.
server.listen(5000)

// now on running this program it it will start taking response and we can see 
// this in our browser  using localhost:5000


