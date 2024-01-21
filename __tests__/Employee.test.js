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
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});
  
test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});
  
test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});
  
test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});