<<<<<<< HEAD
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// hideBin => Oculta el bin folder
=======
import yargs, { boolean, options } from "yargs";
import { hideBin } from "yargs/helpers";

>>>>>>> be284ec (testing finalizado)
export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
<<<<<<< HEAD
    describe: "Multiplication Table Base",
=======
    describe: "Multiplication table base",
>>>>>>> be284ec (testing finalizado)
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
<<<<<<< HEAD
    describe: "Multiplitacion table limit",
=======
    describe: "Multiplication table limit",
>>>>>>> be284ec (testing finalizado)
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
<<<<<<< HEAD
    describe: "Show Multiplication Table",
=======
    describe: "Show multiplication table",
>>>>>>> be284ec (testing finalizado)
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "multiplication-table",
<<<<<<< HEAD
    describe: "File Name",
=======
    describe: "File name",
>>>>>>> be284ec (testing finalizado)
  })
  .option("d", {
    alias: "destination",
    type: "string",
<<<<<<< HEAD
    default: "outputs/",
    describe: "File destination",
  })
  .check((argv, options) => {
    // Se pueden agregar todas las condiciones que queramos, si pasa todas las condiciones regresa true
    if (argv.b < 1) throw "Error: base must be greater than 0";
    if (argv.l < 1) throw "Error: limit must be greater than 0";
=======
    default: "outputDir",
    describe: "File destination",
  })
  .check((argv) => {
    if (argv.b < 1) throw "Base number must be greater than 0";

>>>>>>> be284ec (testing finalizado)
    return true;
  })
  .parseSync();
