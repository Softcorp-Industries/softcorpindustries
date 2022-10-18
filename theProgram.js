import { EMPLOYEE_ARR } from './js/TheProgram/employee.js';
import { Employee } from './js/TheProgram/employee.js';

import { TOOL_ARR } from './js/TheProgram/tool.js';
import { Tool } from './js/TheProgram/tool.js';

import { VEHICLE_ARR } from './js/TheProgram/vehicle.js';
import { Vehicle } from './js/TheProgram/vehicle.js';

import { Lists } from './js/TheProgram/lists.js';
import { Display } from './js/TheProgram/display.js';
import { formModal } from './js/TheProgram/form-modal.js';

formModal();

const theProgram = document.querySelector("#theProgram");

//  The Program Button Variables
const resetTheProgramBtn = document.querySelector("#resetTheProgram-btn")
const reEnterProgramBtn = document.querySelector("#reEnterProgramBtn")
const endProgramBtn = document.querySelector("#endProgramBtn");

//  Dashboard Button Variables
const fullTechTableBtn = document.querySelector(".dashboard #fullTechTable-btn");
const fullOfficeTableBtn = document.querySelector(".dashboard #fullOfficeTable-btn");
const fullManagementTableBtn = document.querySelector(".dashboard #fullManagementTable-btn");

//  The Program Button Status
let programStarted = false;

//  Dashboard Button Status
let fullTechOpen = false;
let fullOfficeOpen = false;
let fullManagementOpen = false;


//  Local Storage Variables
let ARRS_ACTIVE = localStorage.getItem('ARRS_ACTIVE');
let THE_PROGRAM = localStorage.getItem("THE_PROGRAM");

class UI {
  static startProgram() {
    theProgram.classList.add("programStarted");
    theProgram.style.animation = "start-the-program 300ms forwards";
  }
  static closeProgram(e) {
    e.target.classList.remove("programStarted");
    e.target.removeEventListener("animationend", UI.closeProgram);
  }

  static deleteEmployee(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFullTechTable() {
    const table = document.querySelector("#fullTechTable-body");

    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }
  }
  static clearFullOfficeTable() {
    const toolTable = document.querySelector("#fullOfficeTable-body");
    while (toolTable.firstChild) {
      toolTable.removeChild(toolTable.firstChild);
    }
  }
  static clearFullVehicleTable() {
    const vehicleTable = document.querySelector("#vehicleTableBody");

    while (vehicleTable.firstChild) {
      vehicleTable.removeChild(vehicleTable.firstChild);
    }
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

class Store {
  static saveArrs() {
    localStorage.setItem('employeeStorage', JSON.stringify(EMPLOYEE_ARR));
    localStorage.setItem('toolStorage', JSON.stringify(TOOL_ARR));
    localStorage.setItem('vehicleStorage', JSON.stringify(VEHICLE_ARR));
    localStorage.setItem('ARRS_ACTIVE', 'initialized')
  }
  static programStarted() {
    localStorage.setItem("THE_PROGRAM", "STARTED")
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

//  Changes Initialize Button to Reset Button
if (ARRS_ACTIVE === "initialized") {
  reEnterProgramBtn.style.display = "block"
  document.querySelector("#resetTheProgram-btn").nextElementSibling.innerHTML = "Reset";
  //theProgramBtn.parentElement.style.margin = "0px";
  document.querySelector("#resetTheProgram-btn").parentElement.style.marginBottom = "1.5em";
  //reEnterProgramBtn.style.margin = "0px"
}
if (THE_PROGRAM === "STARTED") {
  UI.startProgram();
}


resetTheProgramBtn.addEventListener("click", () => {
  if (!resetTheProgramBtn) return
  UI.startProgram();
  Store.saveArrs();
  Store.programStarted();
  programStarted = true;
});
endProgramBtn.addEventListener("click", () => {
  if (!endProgramBtn) return
  theProgram.style.animation = "end-the-program 300ms forwards";
  theProgram.addEventListener("animationend", UI.closeProgram)
  programStarted = false;
});

// Show Full Tech List
fullTechTableBtn.addEventListener("click", (e) => {
  const fullTechList = document.querySelector("#fullTechTable");
  if (!fullTechOpen) {
    Lists.getFullTechList();
    fullTechList.style.display = "block";
    fullTechOpen = true;
    e.target.style.backgroundColor = "red";
  } else {
    UI.clearFullTechTable();
    fullTechList.style.display = "none";
    fullTechOpen = false;
    e.target.style.backgroundColor = "lightseagreen";
  }
});
//  Show Full Office List
fullOfficeTableBtn.addEventListener("click", (e) => {
  const fullOfficeTable = document.querySelector("#fullOfficeTable");
  if (!fullOfficeOpen) {
    Lists.getFullOfficeList();
    fullOfficeTable.style.display = "block"
    fullOfficeOpen = true;
    e.target.style.backgroundColor = "red";
  } else {
    UI.clearFullOfficeTable();
    fullOfficeTable.style.display = "none"
    fullOfficeOpen = false;
    e.target.style.backgroundColor = "lightseagreen";
  }
});
//  Show Full Management List
fullManagementTableBtn.addEventListener("click", (e) => {
  const fullManagementTable = document.querySelector("#fullManagementTable");
  if (!fullManagementOpen) {
    Lists.getFullManagementList();
    fullManagementTable.style.display = "block";
    fullManagementOpen = true;
    e.target.style.backgroundColor = "red";
  } else {
    //UI.clearFullManagementTable();
    fullManagementTable.style.display = "none";
    fullManagementOpen = false;
    e.target.style.backgroundColor = "lightseagreen";
  }
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

    Store.addEmployee(newEmployee);
    UI.clearEmployeeFields();
  }

});

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
});

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
});


/*
//  Remove Employee
document.querySelector("#employeeTableBody").addEventListener("click", (e) => {
  //console.log(e.target)
  UI.deleteEmployee(e.target);
  Store.removeEmployee(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
})

//  Remove Tool
document.querySelector("#toolTableBody").addEventListener("click", (e) => {
  //console.log(e.target)
  UI.deleteEmployee(e.target);
  Store.removeTool(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
})

document.querySelector("#vehicleTableBody").addEventListener("click", (e) => {
  //console.log(e.target)
  UI.deleteEmployee(e.target);
  Store.removeVehicle(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
})
*/

//console.log(JSON.stringify(EMPLOYEE_ARR, null, " "));
//console.table(EMPLOYEE_ARR);
//console.log(EMPLOYEE_ARR[0].firstName);