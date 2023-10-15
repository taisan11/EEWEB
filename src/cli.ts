import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";

function init() {
    
}

await new Command()
  .name("cliffy")
  .version("0.1.0")
  .description("Command line framework for Deno")
  .command("foo", "Foo sub-command.")
  .option("-f, --foo", "Foo option.")
  .arguments("<value:string>")
  .action((options, ...args) => console.log("Foo command called."))
  .parse(Deno.args);
