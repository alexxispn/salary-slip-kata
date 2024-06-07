import { describe, expect, it } from "vitest";
import { SalarySlipGenerator } from "./SalarySlipGenerator.js";

describe("SalarySlipGenerator", () => {
  it("generates a salary for an employee", () => {
    const salarySlipGenerator = new SalarySlipGenerator();
    const employee = {
      name: "John J Doe",
      nationalId: "12345",
      annualGrossSalary: 5000_00
    };

    const salarySlip = salarySlipGenerator.generateFor(employee);

    expect(salarySlip.hasName("John J Doe")).toBe(true);
    expect(salarySlip.hasNationalID("12345")).toBe(true);
    expect(salarySlip.hasMonthlyGrossSalary(416_67)).toBe(true);
  });

  it("generates another salary for another employee", () => {
    const salarySlipGenerator = new SalarySlipGenerator();
    const lauraEscanes = {
      name: "Laura Escanes",
      nationalId: "90000",
      annualGrossSalary: 12000_00
    };

    const salarySlip = salarySlipGenerator.generateFor(lauraEscanes);

    expect(salarySlip.hasName("John J Doe")).toBe(false);
    expect(salarySlip.hasNationalID("12345")).toBe(false);
    expect(salarySlip.hasMonthlyGrossSalary(416_67)).toBe(false);
  });

  it('generates a salary that is subject to national insurance contributions', () =>{
    const salarySlipGenerator = new SalarySlipGenerator();
    const employee = {
      name: "John J Doe",
      nationalId: "12345",
      annualGrossSalary: 9060_00
    };

    const salarySlip = salarySlipGenerator.generateFor(employee);

    expect(salarySlip.hasNationalInsuranceContribution(10_00)).toBe(true);
  })
});
