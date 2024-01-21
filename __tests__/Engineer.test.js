const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor", () => {
  const testData = "GitHubUser";
  const employee = new Engineer("Foo", 1, "test@test.com", testData);
  expect(employee.github).toBe(testData);
});

test("getRole() should return \"Engineer\"", () => {
  const testData = "Engineer";
  const employee = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(employee.getRole()).toBe(testData);
});

test("Can get GitHub username via getGithub()", () => {
  const testData = "GitHubUser";
  const employee = new Engineer("Foo", 1, "test@test.com", testData);
  expect(employee.getGithub()).toBe(testData);
});
