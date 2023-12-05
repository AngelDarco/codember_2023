const { solution, text } = require("./CHALLENGE_05");

describe("CHALLENGE_03 requires", () => {
  it("Should return a string", () => {
    expect(typeof solution("1a421fa,alex,alex9@gmail.com,18,Barcelona")).toBe(
      "string"
    );
  });

  it("Should return Valid", () => {
    expect(solution("1a421fa,alex,alex9@gmail.com,18,Barcelona")).toBe("Valid");
  });
  it("Should return an invalid result m", () => {
    expect(solution("9412p_m,maria,mb@hotmail.com,22,CDMX")).toBe("m");
  });
  it("Should return an invalid result m", () => {
    expect(solution("494ee0,madeval,mdv@twitch.tv,,")).toBe("Valid");
  });
  it("Should return an invalid result m", () => {
    expect(solution("494ee0,madeval,twitch.tv,22,Montevideo")).toBe("m");
  });
  it("Should return the CHALLENGE_04 codember result", () => {
    expect(solution(text)).toBe("youh4v3beenpwnd");
  });
});
