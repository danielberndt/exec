declare module "@danielberndt/exec" {
  function exec(cmd: string): Promise<string>;
  export = exec;
}
