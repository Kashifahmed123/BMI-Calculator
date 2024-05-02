// BMI Calculator

import inquirer from "inquirer";

let BMI_Input: any = await inquirer.prompt([
  {
    name: "weight",
    message: "Please Enter Your Weight in Kg:",
    type: "number",
  },
  {
    name: "Height",
    message: "Please Enter Your Height in ft:",
    type: "number",
  },
]);
let input_weight = BMI_Input.weight;
let input_height = BMI_Input.Height / 3.28;
let BMI = input_weight / (input_height * input_height);
console.log(BMI);
let output_BMI = BMI;
{
  if (output_BMI < 18.5) {
    console.log("you are under weight");
  } else if (output_BMI > 18.5 && output_BMI < 24.9) {
    console.log("Congratulations! you're in the healthy weight range");
  } else if (output_BMI > 25 && output_BMI < 29.9) {
    console.log("you're in the overweight range");
  } else if (output_BMI > 30 && output_BMI < 39.9) {
    console.log("you're in the obese range");
  } else {
    console.log("you're in the severely obese range");
  }
}
