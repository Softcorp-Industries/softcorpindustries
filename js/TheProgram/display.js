export class Display {
  
  static buildFullTechTable(tech) {
    const fullTechList = document.querySelector("#fullTechTable-body");
    const techTableRow = document.createElement("tr");

    techTableRow.innerHTML = `
    <td><a href="#">+</a></td>
    <td>${tech.employeeId}</td>
    <td>${tech.firstName} ${tech.lastName}</td>
    <td>${tech.position}</td>
    `;
    fullTechList.appendChild(techTableRow);
  }
  static buildAvailableTechList() {

  }

  static buildOfficeStaffTable(staff) {
    const fullOfficeTable = document.querySelector("#fullOfficeTable-body");
    const officeTableRow = document.createElement("tr");
    officeTableRow.innerHTML = `
    <td>${staff.employeeId}</td>
    <td>${staff.firstName} ${staff.lastName}</td>
    <td>${staff.position}</td>
    <td><a href="#employees" class="dangerBtn delete">X</a></td>
    `;
    fullOfficeTable.appendChild(officeTableRow);
  }

  static buildFullToolTable(newTool) {
    const toolTable = document.querySelector("#toolTableBody");
    const toolTableRow = document.createElement("tr");
    toolTableRow.innerHTML = `
    <td>${newTool.toolId}</td>
    <td>${newTool.toolMake} - ${newTool.toolType}</td>
    <td><a href="#tools" class="dangerBtn delete">X</a></td>
    `;
    toolTable.appendChild(toolTableRow);
  }

  static buildFullVehicleTable(newVehicle) {
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
}