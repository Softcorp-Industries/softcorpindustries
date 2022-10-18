import { Display } from './display.js';

export class Lists {
  static getFullTechList() {
    const fullEmployeeList = JSON.parse(localStorage.getItem("employeeStorage"));
    const techs = fullEmployeeList.filter(tech => tech.position === "Tech");
    //console.log(techs);
    techs.forEach((tech) => Display.buildFullTechTable(tech));
  }
  static getFullOfficeList() {
    const fullEmployeeList = JSON.parse(localStorage.getItem("employeeStorage"));
    const officeStaff = fullEmployeeList.filter(staff => staff.position === "Office");
    officeStaff.forEach((staff) => Display.buildOfficeStaffTable(staff));
    //console.log(officeStaff)
  }
  static getFullManagementList() {
    const fullEmployeeList = JSON.parse(localStorage.getItem("employeeStorage"));
    const management = fullEmployeeList.filter(manager => manager.position === "Manager");
    management.forEach((manager) => Display.buildFullManagementTable(manager));
  }
}


