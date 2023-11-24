export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  // Es lo que primero se llama al instanciar una clase
  constructor(/** @internal
   * DI - Dependency Injection
   * */) {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    let output = "";
    for (let i = 1; i <= limit; i++) {
      const result = `${base} x ${i} = ${base * i}\n`;
      output += result;
    }
    return output;
  }
}
