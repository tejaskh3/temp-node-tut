const path = require("path");
const { text } = require("stream/consumers");

const pathfile = path.join('content', 'subfolder' , 'text.txt')
console.log(pathfile);
const base = path.basename(pathfile)
console.log(base);
// the last file/folder (item) is base.
const absolute = path.resolve(__dirname, 'content', 'subfolder','text.txt')
console.log(absolute);
