const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  if (height === "" || isNaN(height) || height < 0) {
    result.innerHTML = "ENTER A VALID HEIGHT";
  } else if (weight === "" || isNaN(weight) || weight < 0) {
    result.innerHTML = "ENTER A VALID WEIGHT";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `<span> ${bmi} </span> UNDERWIEGHT`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<span> ${bmi} </span> NORMAL`;
    } else if (bmi > 24.9) {
      result.innerHTML = `<span> ${bmi} </span> OVERWIEGHT`;
    }
  }
});
