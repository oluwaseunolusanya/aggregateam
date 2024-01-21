const Employee = require("../lib/Employee");

test("Can instantiate Employee Class", () => {
    const employee = new Employee(); 
    expect(typeof(employee)).toBe("object");
});

test("Can employee's name via constructor arguments", () => { 
    const testData = "John";
    const employee = new Employee(testData);
    expect(employee.name).toBe(testData);
});

test("Can set id via constructor argument", () => {
    const testData = 100;
    const employee = new Employee("Foo", testData);
    expect(employee.id).toBe(testData);
});

test("Can set email via constructor argument", () => {
    const testData = "test@test.com";
    const employee = new Employee("Foo", 1, testData);
    expect(employee.email).toBe(testData);
});
  
test("Can get name via getName()", () => {
    const testData = "Alice";
    const employee = new Employee(testData);
    expect(employee.getName()).toBe(testData);
});
  
test("Can get id via getId()", () => {
    const testData = 100;
    const employee = new Employee("Foo", testData);
    expect(employee.getId()).toBe(testData);
});
  
test("Can get email via getEmail()", () => {
    const testData = "test@test.com";
    const employee = new Employee("Foo", 1, testData);
    expect(employee.getEmail()).toBe(testData);
});

test("getRole() should return \"Employee\"", () => {
    const testData = "Employee";
    const employee = new Employee("Alice", 1, "test@test.com");
    expect(employee.getRole()).toBe(testData);
});