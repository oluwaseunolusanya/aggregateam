//Import Employee Class.
const Employee = require("../lib/Employee");

//Test Employee Class Instantiation.
test("Can instantiate Employee Class", () => {
    const employee = new Employee(); 
    expect(typeof(employee)).toBe("object");
});

//Test setting of employee's name via constructor.
test("Can employee's name via constructor arguments", () => { 
    const name = "John";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});