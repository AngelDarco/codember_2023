const { solution, text } = require("./CHALLENGE_03");

describe("CHALLENGE_03 requires", () => {
  it("it is correct, so Should return undefined", () => {
    expect(solution("2-4 f: fgff")).toBe(undefined);
  });

  it("its incorrect, so Should return zzzsg", () => {
    expect(solution("4-6 z: zzzsg")).toBe("zzzsg");
  });
  it("its correct, so Should return undefined", () => {
    expect(solution("1-6 h: hhhhhh")).toBe(undefined);
  });
  it("Should return the CHALLENGE_03 codember result", () => {
    expect(solution(text, 41)).toBe("bgamidqewtbus");
  });
  it("Should return the secret pass for a codember secret", () => {
    expect(solution(text, 12)).toBe("nljzuyfzb");
  });
});
