export const EMPLOYEE_ARR = [
  {
    employeeId: "101",
    firstName: "Christopher",
    lastName: "Guy",
    position: "Tech",
    contactNumber: 4035556666,
    email: "softcorpindustries@gmail.com"
  },
  {
    employeeId: "102",
    firstName: "Shane",
    lastName: "Doolie",
    position: "Office Manager",
    contactNumber: 4035556667,
    email: "guycorpindustries@outlook.com"
  },
  {
    employeeId: "103",
    firstName: "David",
    lastName: "Clark",
    position: "Administrative Assistant",
    contactNumber: 4035556668,
    email: "softcorp@gmail.com"
  },
  {
    employeeId: "104",
    firstName: "Alice",
    lastName: "Holliday",
    position: "Tech",
    contactNumber: 4035556669,
    email: "myemail@gmail.com"
  },
  {
    employeeId: "105",
    firstName: "Sheldon",
    lastName: "Riess",
    position: "Service Manager",
    contactNumber: 4035546666,
    email: "guycorp@outlook.com"
  },
  {
    employeeId: "106",
    firstName: "Darlene",
    lastName: "Pendergast",
    position: "Tech",
    contactNumber: 4035456666,
    email: "darlenep@gmail.com"
  },
  {
    employeeId: "200",
    firstName: "Courtney",
    lastName: "Flavour",
    position: "Office",
    contactNumber: 4035556669,
    email: "reallyoldemail@hotmail.com"
  },
  {
    employeeId: "210",
    firstName: "Greg",
    lastName: "Janzen",
    position: "Tech",
    contactNumber: 4035546666,
    email: "hellobaby@outlook.com"
  },
  {
    employeeId: "230",
    firstName: "Charles",
    lastName: "Maddux",
    position: "Tech",
    contactNumber: 4033396666,
    email: "hellonwheels@gmail.com"
  },
  {
    employeeId: "300",
    firstName: "Shiela",
    lastName: "Mckay",
    position: "Office",
    contactNumber: 4033396666,
    email: "hellonwheels@gmail.com"
  }
]

export class Employee {
  constructor(employeeId, firstName, lastName, position, contactNumber, email) {
    this.employeeId = employeeId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.contactNumber = contactNumber;
    this.email = email;
  }
}



//console.log(JSON.stringify(EMPLOYEE_ARR, null, " "));
//console.dir(EMPLOYEE_ARR[0]);

