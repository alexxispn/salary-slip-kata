import { describe, expect, it } from "vitest";
import { SalarySlipGenerator } from "./SalarySlipGenerator.js";
import { Employee } from "./Employee.js";

describe("SalarySlipGenerator", () => {
  it("generates a salary with the employee info", () => {
    const salarySlipGenerator = new SalarySlipGenerator();
    const employee: Employee = {
      name: "John J Doe",
      nationalId: "12345",
      annualGrossSalary: 5000_00
    };

    const salarySlip = salarySlipGenerator.generateFor(employee);

    expect(salarySlip.hasName("John J Doe")).toBe(true);
    expect(salarySlip.hasNationalID("12345")).toBe(true);
  });

  it.each([
    [5000_00, 416_67],
    [12000_00, 1000_00]
  ])("calculates monthly gross salary from annual gross salary", (annualGrossSalary, monthlyGrossSalary) => {
    const salarySlipGenerator = new SalarySlipGenerator();
    const employee: Employee = {
      name: "John J Doe",
      nationalId: "12345",
      annualGrossSalary: annualGrossSalary
    };

    const salarySlip = salarySlipGenerator.generateFor(employee);

    expect(salarySlip.hasMonthlyGrossSalary(monthlyGrossSalary)).toBe(true);
  });

  it("generates a salary that is subject to national insurance contributions", () => {
    const salarySlipGenerator = new SalarySlipGenerator();
    const employee = {
      name: "John J Doe",
      nationalId: "12345",
      annualGrossSalary: 9060_00
    };

    const salarySlip = salarySlipGenerator.generateFor(employee);

    expect(salarySlip.hasNationalInsuranceContribution(10_00)).toBe(true);
  });
});
