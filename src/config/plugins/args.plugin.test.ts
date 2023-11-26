const runCommando = async (args: string[]) => {
  process.argv = [...process.argv, ...args];

  const { yarg } = await import("./args.plugin");
  return yarg;
};

describe("Test argv.plugin", () => {
  const originalArgv = process.argv;
  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });
  test("Should return default values", async () => {
    const argv = await runCommando(["-b", "5"]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        n: "multiplication-table",
        d: "outputs/",
      })
    );
  });
  test("Should return configuration with custom values", async () => {
    const argv = await runCommando([
      "-b",
      "8",
      "-l",
      "5",
      "-s",
      "true",
      "-n",
      "custom-multiplication-table",
      "-d",
      "custom-outputs/",
    ]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 8,
        l: 5,
        s: true,
        n: "custom-multiplication-table",
        d: "custom-outputs/",
      })
    );
    expect(argv.b).toBe(8);
    expect(argv.l).toBe(5);
    expect(argv.s).toBe(true);
    expect(argv.n).toBe("custom-multiplication-table");
    expect(argv.d).toBe("custom-outputs/");
  });
});
