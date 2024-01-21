const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumer){
        super(name, id, email);
        this.officeNumber = officeNumer;
    };

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
    };

};

module.exports = Manager;