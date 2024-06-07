import { describe, expect, it } from "vitest";
import { SalarySlipGenerator } from "./SalarySlipGenerator.js";

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
