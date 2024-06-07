import { SalarySlip } from "./SalarySlip.js";
import { Employee } from "./Employee.js";

export class SalarySlipGenerator {

  generateFor(employee: Employee): SalarySlip {
    return new SalarySlip()
  }
}
