export const EMPLOYEE_ARR = [
  {
    employeeId: "101",
    employeeFirstName: "Christopher",
    employeeLastName: "Guy",
    employeePosition: "Programmer",
    employeeContactNumber: 4035556666,
    employeeEmail: "softcorpindustries@gmail.com"
  },
  {
    employeeId: "102",
    employeeFirstName: "Shane",
    employeeLastName: "Doolie",
    employeePosition: "Office Manager",
    employeeContactNumber: 4035556667,
    employeeEmail: "guycorpindustries@outlook.com"
  },
  {
    employeeId: "103",
    employeeFirstName: "David",
    employeeLastName: "Clark",
    employeePosition: "Administrative Assistant",
    employeeContactNumber: 4035556668,
    employeeEmail: "softcorp@gmail.com"
  },
  {
    employeeId: "104",
    employeeFirstName: "Alice",
    employeeLastName: "Holliday",
    employeePosition: "Programmer",
    employeeContactNumber: 4035556669,
    employeeEmail: "myemail@gmail.com"
  },
  {
    employeeId: "105",
    employeeFirstName: "Sheldon",
    employeeLastName: "Riess",
    employeePosition: "Master Electrician",
    employeeContactNumber: 4035546666,
    employeeEmail: "guycorp@outlook.com"
  },
  {
    employeeId: "106",
    employeeFirstName: "Darlene",
    employeeLastName: "Pendergast",
    employeePosition: "Programmer",
    employeeContactNumber: 4035456666,
    employeeEmail: "softcorpindustries@gmail.com"
  }
]

export class Employee {
  constructor(employeeId, employeeFirstName, employeeLastName, employeePosition, employeeContactNumber, employeeEmail) {
    this.employeeId = employeeId;
    this.employeeFirstName = employeeFirstName;
    this.employeeLastName = employeeLastName;
    this.employeePosition = employeePosition;
    this.employeeContactNumber = employeeContactNumber;
    this.employeeEmail = employeeEmail;
  }
}



//console.log(JSON.stringify(EMPLOYEE_ARR, null, " "));
//console.dir(EMPLOYEE_ARR[0]);

