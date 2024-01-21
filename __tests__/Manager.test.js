const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

const testData = 306;
const employee = new Manager("Foo", 1, "test@test.com", testData);

test("Can set office number via constructor argument", () => {
  expect(employee.officeNumber).toBe(testData);
});

test('getRole() should return "Manager"', () => {
  const testData = "Manager";
  expect(employee.getRole()).toBe(testData);
});

test("Can get office number via getOffice()", () => {
  expect(employee.getOfficeNumber()).toBe(testData);
});
