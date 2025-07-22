import fs from "fs";
import path from "path";
import { yarg } from "./config/plugins/args.plugin";

let base = yarg.b;
let limit = yarg.l;
let show = yarg.s;

const outputDir = "outputs";
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}
let content = "===============\n";
content += `Tabla del ${base}\n`;
content += "===============\n";

for (let i = 1; i <= limit; i++) {
  content += `${base} x ${i} = ${base * i}\n`;
}

//   Path asegura compatiblidad con todos los sistemas operativos
const filePath = path.join(outputDir, `tabla-${base}.txt`);
fs.writeFileSync(filePath, content, "utf-8");

show ? console.log(content) : console.log("File created");
