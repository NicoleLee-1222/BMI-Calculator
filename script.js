const displayContainer = document.getElementById("display-container");

function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const bmi = (weight / (height * height) * 10000).toFixed(2);
if (bmi <= 18.5) {
   document.getElementById("result").innerHTML = `Your BMI is: ${bmi}. You are underweight.`;
} else if (bmi <= 24.9) {
  document.getElementById("result").innerHTML = `Your BMI is: ${bmi}. You are healthy.`;
} else if (bmi <= 29.9) {
  document.getElementById("result").innerHTML = `Your BMI is: ${bmi}. You are overweight.`;
} else if (bmi > 30) {
  document.getElementById("result").innerHTML = `Your BMI is: ${bmi}. You are obese.`;
} else {
  document.getElementById("result").innerHTML = `Please enter your height & weight.`;
}
  displayContainer.style.display = bmi ? "block" : "none";
}

