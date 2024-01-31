const fs = require("node:fs");
const os = require("node:os");

// console.log(fs)
fs.writeFile("intro.txt", "hello world !", (err) => {
  if (err) console.log(err);
});

const user = os.hostname();
const cpu = os.cpus();
const cpuArch = os.arch();

console.log("Host Name:", user);
console.log(cpu, "architecture:", cpuArch);

console.log(Math.floor(os.freemem() / (1024 * 1024 * 1024)), "gb is free");

console.log(os.homedir());
console.log(os.machine());

//today i was learn about shadcn ui and other ui library their uses and logic behind that
