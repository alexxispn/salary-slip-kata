import { describe, it, expect } from "vitest";

interface Employee {
  nationalID: string;
  name: string;
  annualGrossSalary: number;
}

class SalarySlip {
  hasName(name: string) {
    throw new Error("not implemented");
  }

  hasNationalID(nationalId: number) {
    throw new Error("not implemented");
  }

  hasMonthlyGrossSalary(monthlyGrossSalary: number) {
    throw new Error("not implemented");
  }
}

class SalarySlipGenerator {

  generateFor(employee: Employee): SalarySlip {
    throw new Error("not implemented");
  }
}

describe("SalarySlipGenerator", () => {
  it("generates a salary for an employee", () => {
    const salarySlipGenerator = new SalarySlipGenerator();
    const employee = {
      name: "John J Doe",
      nationalID: "12345",
      annualGrossSalary: 5000_00
    };

    const salarySlip = salarySlipGenerator.generateFor(employee);

    expect(salarySlip.hasName("John J Doe")).toBe(true);
    expect(salarySlip.hasNationalID(123)).toBe(true);
    expect(salarySlip.hasMonthlyGrossSalary(416_67)).toBe(true);
  });
});
