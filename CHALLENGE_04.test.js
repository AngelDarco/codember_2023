const { solution, text } = require("./CHALLENGE_04");

describe("CHALLENGE_03 requires", () => {
  it("Should return a string", () => {
    expect(typeof solution("xyzz33-xy")).toBe("string");
  });

  it("Should return Real", () => {
    expect(solution("xyzz33-xy")).toBe("Real xy");
  });
  it("Should return Fake", () => {
    expect(solution("abcca1-ab1")).toBe("Fake aba1");
  });
  it("Should return the CHALLENGE_04 codember result", () => {
    expect(solution(text, 33)).toBe("Real O2hrQ");
  });
});
