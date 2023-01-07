// npm - golbal command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <package name>
// sudo npm install -g <pacakgename> (for mac)

// packet.jason - manifest file (stores important information about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// in out project i have or have created a file package.json whcih contains dependencies 
// stores the name of package installed

const _ =require('lodash');

const items = [1,[2,3,[4]]];
const newItems = _.flattenDeep(items); 

console.log(newItems);