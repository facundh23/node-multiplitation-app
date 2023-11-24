import fs from "fs";

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() /** Inyeccion de dependencias probable el repositorio en el cual nosotros vamos a grabar la informacion StorageRepository
   * AWS, FTP FS puede ser cualquiera
   *
   */ {}

  execute({
    fileContent,
    fileDestination = "outputs/",
    fileName = "table",
  }: Options): boolean {
    // Crear carpeta de manera dinamica, es recursive en true porque quiero que sea de manera recursica a creacion,
    // en el caso de que tengamos mas path por ejemplo outputs/path1/path2 ....

    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      console.log("File Created");
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
