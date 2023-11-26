import { SaveFile } from "./save-file.use-case";
import fs, { readFileSync } from "fs";

describe("Server file useCase", () => {
  // Este options se aplica al segundo test, ya que en el primer test existe la constante options,
  // por lo que prevalece esa constante por sobre estas creadas aquí arriba por un tema de scope
  const customOptions = {
    fileContent: "custom-content",
    fileDestination: "custom-outputs/file-destination",
    fileName: "custom-table-name",
  };

  const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

  afterEach(() => {
    // Procedimiento de limpieza, borra de manera recursiva  la carpeta de prueba (output)
    const outputFolderExist = fs.existsSync("outputs");
    if (outputFolderExist) fs.rmSync("outputs", { recursive: true });
  });

  beforeAll(() => {});
  test("Should Save files with default values", () => {
    const saveFile = new SaveFile();
    const filePath = "outputs/table.txt";
    const options = {
      fileContent: "test content",
    };

    const result = saveFile.execute(options);
    const fileExist = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

    expect(result).toBeTruthy();
    expect(fileExist).toBeTruthy();
    expect(fileContent).toBe(options.fileContent);
  });

  test("Should be save with custom values", () => {
    const saveFile = new SaveFile();

    const result = saveFile.execute(customOptions);
    const fileExiste = fs.existsSync(customFilePath);
    const fileContent = fs.readFileSync(customFilePath, {
      encoding: "utf8",
    });
    expect(result).toBe(true);
    expect(fileExiste).toBe(true);
    expect(fileContent).toBe(customOptions.fileContent);
  });

  test("Should return false and the directory could not be created", () => {
    const saveFile = new SaveFile();
    const mkdirMockSpy = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
      throw new Error("This is a custom error message from testing");
    });

    const result = saveFile.execute(customOptions);

    expect(result).toBe(false);

    mkdirMockSpy.mockRestore();
  });
  test("Should return false and the file could not be created", () => {
    const saveFile = new SaveFile();
    const writeFileMockSpy = jest
      .spyOn(fs, "writeFileSync")
      .mockImplementation(() => {
        throw new Error("This is a custom error message File from testing");
      });

    const result = saveFile.execute({ fileContent: "Hola" });

    expect(result).toBe(false);

    writeFileMockSpy.mockRestore();
  });
});
