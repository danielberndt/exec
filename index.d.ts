declare module "@danielberndt/exec" {
  function exec(cmd: string): Promise<string>;
  namespace exec {

  }
  export = exec;
}
