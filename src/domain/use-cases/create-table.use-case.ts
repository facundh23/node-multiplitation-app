<<<<<<< HEAD
=======
// ? AQUI VAN LAS REGLAS DE NEGOCIO QUE YO QUIERO FORZAR A ESTA CLASE A QUE IMPLEMENTE
>>>>>>> be284ec (testing finalizado)
export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
<<<<<<< HEAD
  // Es lo que primero se llama al instanciar una clase
  constructor(/** @internal
   * DI - Dependency Injection
   * */) {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    let output = "";
    for (let i = 1; i <= limit; i++) {
      output += `${base} x ${i} = ${base * i}`;

      if (i < limit) output += "\n";
    }
    return output;
=======
  constructor() {
    /**
     * DI - Dependency injection, para eso es importante este metodo, //! RECORDAR QUE ES EL PRIMER METODO QUE SE EJECUTA AL INSTANCIAR NUESTRA CLASE
     *
     */
  }

  //? AQUI ES DONDE SE EJECUTA EL CASO DE USO, AQUI PODREMOS USAR LAS DEPENDENCIAS QUE VIENEN DEL MUNDO EXTERIOR
  execute({ base, limit = 10 }: CreateTableOptions) {
    let content = "";
    for (let i = 1; i <= limit; i++) {
      content += `${base} x ${i} = ${base * i}`;

      if (i < limit) content += "\n";
    }
    return content;
>>>>>>> be284ec (testing finalizado)
  }
}
