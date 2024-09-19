const fs = require("fs");
const yargs = require("yargs");
const express = require("express");
const app = express();
const { hideBin } = require('yargs/helpers')


// Directory Name
console.log(__dirname);
// File Name
console.log(__filename);

// Argument Variable
const argv = process.argv.slice(2);
const yargsArgv = yargs(argv).argv;
const Port = yargsArgv?.port || 4000;

console.log(hideBin(process.argv))
const serve = () => app.listen(Port, () => console.log(`Server Runing on port ${Port}`));


yargs(hideBin(process.argv))
  .command('serve [port]', 'start the server', (yargs) => {
    return yargs
      .positional('port', {
        describe: 'port to bind on',
        default: 5000
      })
  }, (argv) => {
    console.log(argv, "Inside console Wokr")
    if (argv.verbose) console.info(`start server on :${argv.port}`)
    serve(argv.port)
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .parse()
console.log(Port);

// fs.writeFile(__dirname + "/tst.js", 'console.log("test")', (e) => {
//   console.log("Work");
// });

app.get("/",(req,res) => {
    res.send("Work Fine")
})
