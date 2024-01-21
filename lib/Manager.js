class Manager extends Employee {
    constructor(name, id, email, officeNumer){
        this.officeNumber = officeNumer;
        super(name, id, email);
    };

    getRole(){
        return "Manager";
    };
};

module.exports = Manager;