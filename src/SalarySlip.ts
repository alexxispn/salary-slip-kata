import { Employee } from "./Employee.js";

export class SalarySlip {
  private name: string;
  private nationalId: string;
  private annualGrossSalary: number;

  constructor(employee: Employee) {
    this.name = employee.name;
    this.nationalId = employee.nationalId;
    this.annualGrossSalary = employee.annualGrossSalary;
  }

  hasName(name: string): boolean {
    return this.name === name;
  }

  hasNationalID(nationalId: string) {
    return this.nationalId === nationalId;
  }

  hasMonthlyGrossSalary(monthlyGrossSalary: number) {
    const calculatedMonthlyGrossSalary = Math.round(this.annualGrossSalary / 12)
    return monthlyGrossSalary === calculatedMonthlyGrossSalary;
  }
}
