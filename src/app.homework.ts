import { yarg } from "./config/plugins/args.plugin";

let outPutMessage = "";
const { b: base, l: limit, s: show } = yarg;

const headerMesage = ` ================================================
                     Tabla del ${base}
 ================================================\n`;

for (let i = 1; i <= limit; i++) {
  outPutMessage += `${base} x ${i} = ${base * i}\n`;
  outPutMessage = headerMesage + outPutMessage;
}

if (show) {
  console.log(outPutMessage);
}
