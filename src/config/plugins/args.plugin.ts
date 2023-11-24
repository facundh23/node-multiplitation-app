import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// hideBin => Oculta el bin folder
export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Multiplication Table Base",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Multiplitacion table limit",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show Multiplication Table",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "multiplication-table",
    describe: "File Name",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: "outputs/",
    describe: "File destination",
  })
  .check((argv, options) => {
    // Se pueden agregar todas las condiciones que queramos, si pasa todas las condiciones regresa true
    if (argv.b < 1) throw "Error: base must be greater than 0";
    if (argv.l < 1) throw "Error: limit must be greater than 0";
    return true;
  })
  .parseSync();
