export const TOOL_ARR = [
  {
    toolId: "6788",
    toolMake: "RIGID",
    toolModel: "P 700",
    toolType: "Power Threader",
    toolSerialNumber:"DW990777"
  },
  {
    toolId: "D45456",
    toolMake: "DeWalt",
    toolModel: "DWCD-6500",
    toolType: "Cordless Drill",
    toolSerialNumber: "77774xc333"
  },
  {
    toolId: "4564",
    toolMake: "DeWalt",
    toolModel: "DWRS-5350",
    toolType: "Rotary Sander",
    toolSerialNumber: "DW998865"
  },
  {
    toolId: "D45457",
    toolMake: "DeWalt",
    toolModel: "DWCD-6500",
    toolType: "Cordless Drill",
    toolSerialNumber: "777427xc839"
  },
  {
    toolId: "D45458",
    toolMake: "DeWalt",
    toolModel: "DWCD-6500",
    toolType: "Cordless Drill",
    toolSerialNumber: "777218xc855"
  },
  {
    toolId: "M4242",
    toolMake: "Fluke",
    toolModel: "MM5500",
    toolType: "Multi-Meter",
    toolSerialNumber: "9494htt93333"
  }
]

export class Tool {
  constructor(toolId, toolMake, toolModel, toolType, toolSerialNumber) {
    this.toolId = toolId;
    this.toolMake = toolMake;
    this.toolModel= toolModel;
    this.toolType = toolType;
    this.toolSerialNumber = toolSerialNumber;
  }
}