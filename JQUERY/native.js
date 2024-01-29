const fs = require('node:fs');
const os = require('node:os')

// console.log(fs)
fs.writeFile("intro.txt", "hello world !", (err) => {
  if (err) console.log(err);
});
