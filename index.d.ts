declare module "exec" {
  function exec(cmd: string): Promise<string>;
  export = exec;
}
