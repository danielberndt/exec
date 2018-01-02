const exec = require("../index");

async function sample() {
  await exec("ls -l");
  await exec("ls -l doesntexist").catch(() => {});
}

sample();
