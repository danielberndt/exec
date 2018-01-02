# exec

promisifies `require("child_process").exec` and pretty-prints the output of stdout and stderr as data comes in.

## install

```
npm i @danielberndt/exec;
```

## usage examples:

```javascript
const result = await exec("ls -l");
```

```javascript
exec("ls -l doesntexist").catch(errCode => {
  // do something with errCode
});
```
