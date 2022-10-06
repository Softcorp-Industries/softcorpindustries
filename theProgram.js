import { EMPLOYEE_ARR } from './js/TheProgram/employeeArr.js';

let employeeTableActive = localStorage.getItem('employeeTableActive');

class Employee {
  constructor(employeeId, employeeFirstName, employeeLastName, employeePosition, employeeContactNumber, employeeEmail) {
    this.employeeId = employeeId;
    this.employeeFirstName = employeeFirstName;
    this.employeeLastName = employeeLastName;
    this.employeePosition = employeePosition;
    this.employeeContactNumber = employeeContactNumber;
    this.employeeEmail = employeeEmail;
  }
}

class UI {
  static initEmployee_Arr() {
    const Employee_Arr = EMPLOYEE_ARR;
    Employee_Arr.forEach((employee) => UI.buildEmployeeTable(employee));
    initBtn.innerHTML = "Reset Employee Table";
    initBtn.style.backgroundColor = "red";
    Store.saveEmployee_Arr();
  }

  static savedEmployeeTable() {
    const savedEmployeeTable = JSON.parse(localStorage.getItem("employeeStorage"));
    savedEmployeeTable.forEach((employee) => UI.buildEmployeeTable(employee));
  }

  static buildEmployeeTable(newEmployee) {
    const employeeTable = document.querySelector("#employeeTableBody");
    const employeeTableRow = document.createElement("tr");
    employeeTableRow.innerHTML = `
    <td>${newEmployee.employeeId}</td>
    <td>${newEmployee.employeeFirstName} ${newEmployee.employeeLastName}</td>
    <td>${newEmployee.employeePosition}</td>
    <td><a href="#employeetableBody" class="dangerBtn delete">X</a></td>
    `;
    employeeTable.appendChild(employeeTableRow);
  }

  static deleteEmployee(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearTable() {
    const table = document.getElementById("employeeTableBody")
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }
    console.log("clearTable")
  }

  static clearFields() {
    document.querySelector("#employeeId").value = "";
    document.querySelector("#employeeFirstName").value = "";
    document.querySelector("#employeeLastName").value = "";
    document.querySelector("#employeePosition").value = "";
    document.querySelector("#employeeContactNumber").value = "";
    document.querySelector("#employeeEmail").value = "";
  }
}

class Store {
  static saveEmployee_Arr() {
    localStorage.setItem('employeeStorage', JSON.stringify(EMPLOYEE_ARR));
    localStorage.setItem('employeeTableActive', 'initialized')
  }

  static getEmployeeList() {
    let employeeStorage;
    if (localStorage.getItem("employeeStorage") === null) {
      employeeStorage = [];
    } else {
      employeeStorage = JSON.parse(localStorage.getItem("employeeStorage"));
    }
    return employeeStorage;
  }

  static addEmployee(employee) {
    const employees = JSON.parse(localStorage.getItem("employeeStorage"));
    employees.push(employee);
    localStorage.setItem('employeeStorage', JSON.stringify(employees));
  }

  static removeEmployee(employeeId) {
    const employees = JSON.parse(localStorage.getItem("employeeStorage"));
    employees.forEach((employee, index) => {
      if (employee.employeeId === employeeId) {
        employees.splice(index, 1);
      }
    });
    console.log(employees);

    localStorage.setItem('employeeStorage', JSON.stringify(employees));
  }
}

// Load Saved Employee Table
document.addEventListener("DOMContentLoaded", () => {
  UI.savedEmployeeTable();
});

// Initialize and Reset Table
let initBtnActive = false;
const initBtn = document.getElementById("initBtn");
initBtn.addEventListener("click", () => {
  if (!initBtnActive) {
    UI.clearTable();
    UI.initEmployee_Arr();
    initBtnActive = true;
  } else {
    initBtn.innerHTML = "Reset Employee Table"
    initBtnActive = false;
  }
})

//  Add a New Employee
document.querySelector("#newEmployee-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const employeeId = document.querySelector("#employeeId").value;
  const employeeFirstName = document.querySelector("#employeeFirstName").value;
  const employeeLastName = document.querySelector("#employeeLastName").value;
  const employeePosition = document.querySelector("#employeePosition").value;
  const employeeContactNumber = document.querySelector("#employeeContactNumber").value;
  const employeeEmail = document.querySelector("#employeeEmail").value;
  console.log(employeeId)
  console.log(employeeFirstName)
  console.log(employeeLastName)
  console.log(employeePosition)
  console.log(employeeContactNumber)
  console.log(employeeEmail)

  if (employeeId === "" || employeeFirstName === "" || employeeLastName === "" || employeePosition === "" || employeeContactNumber === "" || employeeEmail === "") {
    alert("Please fill in all fields");
  } else {

    const newEmployee = new Employee(employeeId, employeeFirstName, employeeLastName, employeePosition, employeeContactNumber, employeeEmail);

    UI.buildEmployeeTable(newEmployee);

    Store.addEmployee(newEmployee);
    UI.clearFields();
  }
})

//  Remove Employee
document.querySelector("#employeeTableBody").addEventListener("click", (e) => {
  //console.log(e.target)
  UI.deleteEmployee(e.target);
  Store.removeEmployee(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
})

if (employeeTableActive === "initialized") {
  initBtn.innerHTML = "Reset Employee Table";
  initBtn.style.backgroundColor = "red";
}


//console.log(JSON.stringify(EMPLOYEE_ARR, null, " "));
//console.table(EMPLOYEE_ARR);
//console.log(EMPLOYEE_ARR[0].firstName);