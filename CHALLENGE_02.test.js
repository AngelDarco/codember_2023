const solution = require("./CHALLENGE_02");

describe("CHALLENGE_02 requires", () => {
  it("should return the inicial value", () => {
    expect(solution("")).toBe("0");
  });
  it("should increase the numeric value by 1", () => {
    expect(solution("#")).toBe("1");
  });
  it("should decrease the numeric value by 1", () => {
    expect(solution("@")).toBe("-1");
  });
  it("should multiplies the numeric value by itself", () => {
    expect(solution("##*")).toBe("4");
  });
  it("should prints the current numeric value", () => {
    expect(solution("&")).toBe("0");
  });
  it("should prints 4", () => {
    expect(solution("##*&")).toBe("4");
  });
  it("should prints 0243", () => {
    expect(solution("&##&*&@&")).toBe("0243");
  });
  it("should prints the CHALLENGE_02 codember result", () => {
    expect(
      solution(
        "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"
      )
    ).toBe("024899455");
  });
});
