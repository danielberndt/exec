interface ExecOptions {
  cwd?: string;
  env?: NodeJS.ProcessEnv;
  shell?: string;
  timeout?: number;
  maxBuffer?: number;
  killSignal?: string;
  uid?: number;
  gid?: number;
  windowsHide?: boolean;
}

declare module "@danielberndt/exec" {
  function exec(cmd: string, opts?: ExecOptions): Promise<string>;
  namespace exec {

  }
  export = exec;
}
