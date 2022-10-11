import { EMPLOYEE_ARR } from './js/TheProgram/employee.js';
import { Employee } from './js/TheProgram/employee.js';

import { TOOL_ARR } from './js/TheProgram/tool.js';
import { Tool } from './js/TheProgram/tool.js';

import { VEHICLE_ARR } from './js/TheProgram/vehicle.js';
import { Vehicle } from './js/TheProgram/vehicle.js';

import { formModal } from './js/TheProgram/form-modal.js';

formModal();


let ARRS_ACTIVE = localStorage.getItem('ARRS_ACTIVE');


class UI {
  static initTables() {
    initBtn.innerHTML = "Reset Tables";
    initBtn.style.backgroundColor = "red";
    this.initEmployee_Arr();
    this.initTool_Arr();
    this.initVehicle_Arr();
    Store.saveTables();
  }
  static initEmployee_Arr() {
    const Employee_Arr = EMPLOYEE_ARR;
    Employee_Arr.forEach((employee) => UI.getEmployee(employee));
  }
  static initTool_Arr() {
    const Tool_Arr = TOOL_ARR;
    Tool_Arr.forEach((tool) => UI.getTool(tool));
  }
  static initVehicle_Arr() {
    const Vehicle_Arr = VEHICLE_ARR;
    Vehicle_Arr.forEach((vehicle) => UI.getVehicle(vehicle));
  }

  static savedEmployeeTable() {
    const savedEmployeeTable = JSON.parse(localStorage.getItem("employeeStorage"));
    savedEmployeeTable.forEach((employee) => UI.getEmployee(employee));
  }
  static savedToolTable() {
    const savedToolTable = JSON.parse(localStorage.getItem("toolStorage"));
    savedToolTable.forEach((tool) => UI.getTool(tool));
  }
  static savedVehicleTable() {
    const savedVehicleTable = JSON.parse(localStorage.getItem("vehicleStorage"));
    savedVehicleTable.forEach((vehicle) => UI.getVehicle(vehicle));
  }

  static getEmployee(newEmployee) {
    const employeeTable = document.querySelector("#employeeTableBody");
    const employeeTableRow = document.createElement("tr");
    employeeTableRow.innerHTML = `
    <td>${newEmployee.employeeId}</td>
    <td>${newEmployee.firstName} ${newEmployee.lastName}</td>
    <td>${newEmployee.position}</td>
    <td><a href="#employees" class="dangerBtn delete">X</a></td>
    `;
    employeeTable.appendChild(employeeTableRow);
  }
  static getTechList() {
    const filteredTechList = JSON.parse(localStorage.getItem("employeeStorage"));
    const techs = filteredTechList.filter(tech => tech.position === "Tech");
    //  console.log(techs);
    techs.forEach((tech) => UI.buildTechItem(tech))
  }
  static buildTechItem(tech) {
    const techList = document.querySelector("#techList");
    const techListItem = document.createElement("li");
    techListItem.setAttribute("class", "inputAvatar__box")

    techListItem.innerHTML = `
    <button class="profileBtn">+</button>
    <input type="text" value="${tech.firstName} ${tech.lastName} is a ${tech.position}"/>
    <button class="removeItem">X</button>
    `;
    techList.appendChild(techListItem);
  }
  static buildAvailableTechList() {

  }
  static getTool(newTool) {
    const toolTable = document.querySelector("#toolTableBody");
    const toolTableRow = document.createElement("tr");
    toolTableRow.innerHTML = `
    <td>${newTool.toolId}</td>
    <td>${newTool.toolMake} - ${newTool.toolType}</td>
    <td><a href="#tools" class="dangerBtn delete">X</a></td>
    `;
    toolTable.appendChild(toolTableRow);
  }
  static getVehicle(newVehicle) {
    const vehicleTable = document.querySelector("#vehicleTableBody");
    const vehicleTableRow = document.createElement("tr");
    vehicleTableRow.innerHTML = `
    <td>${newVehicle.vehicleId}</td>
    <td>${newVehicle.vehicleYear}</td>
    <td>${newVehicle.vehicleMake} - ${newVehicle.vehicleModel}</td>
    <td><a href="#vehicles" class="dangerBtn delete">X</a></td>
    `;
    vehicleTable.appendChild(vehicleTableRow);
  }

  static deleteEmployee(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearTable() {
    const table = document.querySelectorAll(".tableBody")
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }
    console.log("clearTable")
  }
  static clearEmployeeFields() {
    document.querySelector("#employeeId").value = "";
    document.querySelector("#employeeFirstName").value = "";
    document.querySelector("#employeeLastName").value = "";
    document.querySelector("#employeePosition").value = "";
    document.querySelector("#employeeContactNumber").value = "";
    document.querySelector("#employeeEmail").value = "";
  }
  static clearToolFields() {
    document.querySelector("#toolId").value = "";
    document.querySelector("#toolMake").value = "";
    document.querySelector("#toolModel").value = "";
    document.querySelector("#toolType").value = "";
    document.querySelector("#toolSerialNumber").value = "";
  }
  static clearVehicleFields() {
    document.querySelector("#vehicleId").value = "";
    document.querySelector("#vehicleVINNumber").value = "";
    document.querySelector("#vehicleMake").value = "";
    document.querySelector("#vehicleModel").value = "";
    document.querySelector("#vehicleYear").value = "";
    document.querySelector("#vehicleColor").value = "";
    document.querySelector("#vehicleFuelType").value = "";
  }
}

//UI.getTechList();


class Store {
  static saveTables() {
    localStorage.setItem('employeeStorage', JSON.stringify(EMPLOYEE_ARR));
    localStorage.setItem('toolStorage', JSON.stringify(TOOL_ARR));
    localStorage.setItem('vehicleStorage', JSON.stringify(VEHICLE_ARR));
    localStorage.setItem('ARRS_ACTIVE', 'initialized')
  }

  static addEmployee(employee) {
    const employees = JSON.parse(localStorage.getItem("employeeStorage"));
    employees.push(employee);
    localStorage.setItem('employeeStorage', JSON.stringify(employees));
  }
  static addTool(tool) {
    const tools = JSON.parse(localStorage.getItem("toolStorage"));
    tools.push(tool);
    localStorage.setItem('toolStorage', JSON.stringify(tools));
  }
  static addVehicle(vehicle) {
    const vehicles = JSON.parse(localStorage.getItem("vehicleStorage"));
    vehicles.push(vehicle);
    localStorage.setItem('vehicleStorage', JSON.stringify(vehicles));
  }

  static removeEmployee(employeeId) {
    const employees = JSON.parse(localStorage.getItem("employeeStorage"));
    employees.forEach((employee, index) => {
      if (employee.employeeId === employeeId) {
        employees.splice(index, 1);
      }
    });
    localStorage.setItem('employeeStorage', JSON.stringify(employees));
  }
  static removeTool(toolId) {
    const tools = JSON.parse(localStorage.getItem("employeeStorage"));
    tools.forEach((tool, index) => {
      if (tool.toolId === toolId) {
        tools.splice(index, 1);
      }
    });
    localStorage.setItem('toolStorage', JSON.stringify(tools));
  }
  static removeVehicle(vehicleId) {
    const vehicles = JSON.parse(localStorage.getItem("vehicleStorage"));
    vehicles.forEach((vehicle, index) => {
      if (vehicle.vehicleId === vehicleId) {
        vehicles.splice(index, 1);
      }
    });
    localStorage.setItem('vehicleStorage', JSON.stringify(vehicles));
  }
}

// Initialize and Reset Table
let initBtnActive = false;
const initBtn = document.getElementById("initBtn");
initBtn.addEventListener("click", () => {
  if (!initBtnActive) {
    UI.clearTable();
    UI.initTables();
    initBtn.innerHTML = "Reset All Tables"
    initBtnActive = true;
  } else {
    initBtn.innerHTML = "Reset All Tables"
    initBtnActive = false;
  }
})

// Load Saved Tables
document.addEventListener("DOMContentLoaded", () => {
  UI.savedEmployeeTable();
  UI.savedToolTable();
  UI.savedVehicleTable();
});


//  Add a New Employee
document.querySelector("#newEmployee-form").addEventListener("click", (e) => {
  //alert("wtf")
  e.preventDefault();
  
  const employeeId = document.querySelector("#employeeId").value;
  const firstName = document.querySelector("#employeeFirstName").value;
  const lastName = document.querySelector("#employeeLastName").value;
  const position = document.querySelector("#employeePosition").value;
  const contactNumber = document.querySelector("#employeeContactNumber").value;
  const email = document.querySelector("#employeeEmail").value;


  if (employeeId === "" || firstName === "" || lastName === "" || position === "" || contactNumber === "" || email === "") {
    alert("Please fill in all fields with an  *");
  } else {

    const newEmployee = new Employee(employeeId, firstName, lastName, position, contactNumber, email);

    UI.getEmployee(newEmployee);

    Store.addEmployee(newEmployee);
    UI.clearEmployeeFields();
  }
  
})
//  Remove Employee
document.querySelector("#employeeTableBody").addEventListener("click", (e) => {
  //console.log(e.target)
  UI.deleteEmployee(e.target);
  Store.removeEmployee(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
})
// Show Full Tech List
document.querySelector(".dashboard .listBtn").addEventListener("click", () => {
  UI.getTechList();
})

//  Add New Tool
document.querySelector("#newTool-form").addEventListener("submit", (e) => {

  e.preventDefault();

  const toolId = document.querySelector("#toolId").value;
  const toolMake = document.querySelector("#toolMake").value;
  const toolModel = document.querySelector("#toolModel").value;
  const toolType = document.querySelector("#toolType").value;
  const toolSerialNumber = document.querySelector("#toolSerialNumber").value;

  if (toolId === "" || toolMake === "" || toolModel === "" || toolType === "" || toolSerialNumber === "") {
    alert("Please Fill In All Fields")
  } else {
    const newTool = new Tool(toolId, toolMake, toolModel, toolType, toolSerialNumber);

    UI.getTool(newTool);

    Store.addTool(newTool);

    UI.clearToolFields();
  }
})

//  Remove Tool
document.querySelector("#toolTableBody").addEventListener("click", (e) => {
  //console.log(e.target)
  UI.deleteEmployee(e.target);
  Store.removeTool(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
})

//  Add New Vehicle
document.querySelector("#newVehicle-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const vehicleId = document.querySelector("#vehicleId").value;
  const vehicleVINNumber = document.querySelector("#vehicleVINNumber").value;
  const vehicleMake = document.querySelector("#vehicleMake").value;
  const vehicleModel = document.querySelector("#vehicleModel").value;
  const vehicleYear = document.querySelector("#vehicleYear").value;
  const vehicleColor = document.querySelector("#vehicleColor").value;
  const vehicleFuelType = document.querySelector("#vehicleFuelType").value;

  if (vehicleId === "" || vehicleVINNumber === "" || vehicleMake === "" || vehicleModel === "" || vehicleYear === "" || vehicleColor === "" || vehicleFuelType === "") {
    alert("Please Fill In All Fields")
  } else {
    const newVehicle = new Vehicle(vehicleId, vehicleVINNumber, vehicleMake, vehicleModel, vehicleYear, vehicleColor, vehicleFuelType);

    UI.getVehicle(newVehicle);

    Store.addVehicle(newVehicle);

    UI.clearVehicleFields();
  }
})

//  Remove Vehicle
document.querySelector("#vehicleTableBody").addEventListener("click", (e) => {
  //console.log(e.target)
  UI.deleteEmployee(e.target);
  Store.removeVehicle(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
})

//  Changes Initialize Button to Reset Button
if (ARRS_ACTIVE === "initialized") {
  initBtn.innerHTML = "Reset All Tables";
  initBtn.style.backgroundColor = "red";
}


//console.log(JSON.stringify(EMPLOYEE_ARR, null, " "));
//console.table(EMPLOYEE_ARR);
//console.log(EMPLOYEE_ARR[0].firstName);