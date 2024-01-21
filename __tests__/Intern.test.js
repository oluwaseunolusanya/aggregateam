const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testData = "MIT";
  const employee = new Intern("John", 1, "test@test.com", testData);
  expect(employee.school).toBe(testData);
});

test("getRole() should return \"Intern\"", () => {
  const testData = "Intern";
  const employee = new Intern("Jane", 1, "test@test.com", "UCLA");
  expect(employee.getRole()).toBe(testData);
});

test("Can get school via getSchool()", () => {
  const testData = "Imperial College";
  const employee = new Intern("Harry", 1, "test@test.com", testData);
  expect(employee.getSchool()).toBe(testData);
});
