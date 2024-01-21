const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor", () => {
  const testData = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testData);
  expect(e.github).toBe(testData);
});

test("getRole() should return \"Engineer\"", () => {
  const testData = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testData);
});

test("Can get GitHub username via getGithub()", () => {
  const testData = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testData);
  expect(e.getGithub()).toBe(testData);
});
