describe("hiringEmployee", () => {

    it("invalid input", () => {
        expect(() => companyAdministration.hiringEmployee('Pesho', 'Driver', 4)).to.throw("We are not looking for workers for this position.");

    })
    it("valid input1", () => {
        expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 4)).to.equal(`Pesho was successfully hired for the position Programmer.`);
    });
    it("valid input2", () => {
        expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 3)).to.equal(`Pesho was successfully hired for the position Programmer.`);
    });
    it("valid input3", () => {
        expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 2)).to.equal(`Pesho is not approved for this position.`);
    });

});

describe("calculateSalary", () => {

    it("invalid input1", () => {
        expect(() => companyAdministration.calculateSalary('abc')).to.throw("Invalid hours");
    })
    it("invalid input2", () => {
        expect(() => companyAdministration.calculateSalary(undefined)).to.throw("Invalid hours");
    })
    it("invalid input3", () => {
        expect(() => companyAdministration.calculateSalary('123b')).to.throw("Invalid hours");
    })
    it("invalid input4", () => {
        expect(() => companyAdministration.calculateSalary(-1)).to.throw("Invalid hours");
    })
    it("valid input1", () => {
        expect(companyAdministration.calculateSalary(161)).to.equal((161 * 15) + 1000);
    });
    it("valid input2", () => {
        expect(companyAdministration.calculateSalary(160)).to.equal((160 * 15));
    });
    it("valid input3", () => {
        expect(companyAdministration.calculateSalary(159)).to.equal((159 * 15));
    });
    it("valid input3", () => {
        expect(companyAdministration.calculateSalary(0)).to.equal((0));
    });
});
describe("firedEmployee", () => {

    it("invalid input1", () => {
        expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 'abc')).to.throw("Invalid input");
    })
    it("invalid input2", () => {
        expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], undefined)).to.throw("Invalid input");
    })
    it("invalid input3", () => {
        expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], '123b')).to.throw("Invalid input");
    })
    it("invalid input4", () => {
        expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1)).to.throw("Invalid input");
    })
    it("invalid input5", () => {
        expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3)).to.throw("Invalid input");
    })
    it("invalid input6", () => {
        expect(() => companyAdministration.firedEmployee('Pesho', 0)).to.throw("Invalid input");
    })
    it("invalid input7", () => {
        expect(() => companyAdministration.firedEmployee([], 0)).to.throw("Invalid input");
    })
    it("invalid input7", () => {
        expect(() => companyAdministration.firedEmployee(undefined, 0)).to.throw("Invalid input");
    })
    it("invalid input8", () => {
        expect(() => companyAdministration.firedEmployee(1, 0)).to.throw("Invalid input");
    })
    it("invalid input9", () => {
        expect(() => companyAdministration.firedEmployee({}, 0)).to.throw("Invalid input");
    })
    it("valid input1", () => {
        expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0)).to.deep.equal("Ivan, George");
    });
    it("valid input2", () => {
        expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2)).to.deep.equal("Petar, Ivan");
    });
});