const nodeExec = require("child_process").exec;
const chalk = require("chalk");

const indent = val => val.replace(/\n/g, "\n  ");

const exec = cmd =>
  new Promise((resolve, reject) => {
    const output = [];
    const childProcess = nodeExec(cmd);
    console.log(chalk.blue(cmd));
    childProcess.addListener("error", reject);
    childProcess.addListener("exit", code => {
      if (code === 0) {
        console.log("");
        resolve(output.join(""));
      } else {
        console.log(`${chalk.red("!  ")}${chalk.bgRed.white(` Command exited with ${code} `)}\n`);
        reject(code);
      }
    });
    childProcess.stdout.on("data", data => {
      output.push(data.trim());
      console.log(chalk.dim(`> ${indent(data.trim())}`));
    });
    childProcess.stderr.on("data", data => {
      console.log(`${chalk.red("> ")}${chalk.dim(indent(data.trim()))}`);
    });
  });

module.exports = exec;
