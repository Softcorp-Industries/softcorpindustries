export const VEHICLE_ARR = [
  {
    vehicleId: "765439",
    vehicleVINNumber: "751-286-556",
    vehicleMake: "Ford",
    vehicleModel: "F-150 4X4",
    vehicleYear: "2018",
    vehicleColor: "Light Brown",
    vehicleFuelType: "Diesel",
  },
  {
    vehicleId: "958834",
    vehicleVINNumber: "679-339-999",
    vehicleMake: "Chrysler",
    vehicleModel: "Lebaron",
    vehicleYear: "2011",
    vehicleColor: "Silver",
    vehicleFuelType: "Propane",
  },
  {
    vehicleId: "544458",
    vehicleVINNumber: "773-339-298",
    vehicleMake: "Tesla",
    vehicleModel: "The really cool One",
    vehicleYear: "2021",
    vehicleColor: "Purple",
    vehicleFuelType: "Electric",
  },
  {
    vehicleId: "SV-8802",
    vehicleVINNumber: "751-286-556",
    vehicleMake: "Ford",
    vehicleModel: "Econoline",
    vehicleYear: "2016",
    vehicleColor: "White",
    vehicleFuelType: "Gas",
  },
  {
    vehicleId: "SV-8803",
    vehicleVINNumber: "685-490-332",
    vehicleMake: "Ford",
    vehicleModel: "Econoline",
    vehicleYear: "2016",
    vehicleColor: "White",
    vehicleFuelType: "Gas",
  },
  {
    vehicleId: "SV-8001",
    vehicleVINNumber: "751-286-556",
    vehicleMake: "Ford",
    vehicleModel: "Econoline",
    vehicleYear: "1996",
    vehicleColor: "White",
    vehicleFuelType: "Natural Gas",
  },
]

export class Vehicle {
  constructor(vehicleId, vehicleVINNumber, vehicleMake, vehicleModel, vehicleYear, vehicleColor, vehicleFuelType) {
    this.vehicleId = vehicleId;
    this.vehicleVINNumber = vehicleVINNumber;
    this.vehicleMake = vehicleMake;
    this.vehicleModel = vehicleModel;
    this.vehicleYear = vehicleYear;
    this.vehicleColor = vehicleColor;
    this.vehicleFuelType = vehicleFuelType;
  }
}