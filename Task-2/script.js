document.addEventListener("DOMContentLoaded", function () {
  const output = document.getElementById("output");
  const form = document.getElementById("calc_form");
  const buttons = document.querySelectorAll("button");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });

  let is_operator = false;
  let equation = [];

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.value;

      if (value === "clear") {
        output.value = "0";
        equation = [];
        is_operator = false;
      } else if (value === "invert") {
        output.value = parseFloat(output.value) * -1;
      } else if (value === "%") {
        output.value = parseFloat(output.value) / 100;
      } else if (value === "=") {
        equation.push(output.value);
        try {
          output.value = eval(equation.join(""));
        } catch (error) {
          output.value = "Error";
        }
        equation = [];
        is_operator = false;
      } else if (["+", "-", "*", "/"].includes(value)) {
        equation.push(output.value);
        equation.push(value);
        is_operator = true;
      } else {
        if (output.value === "0" || is_operator) {
          output.value = value;
          is_operator = false;
        } 
        else if (value === "." && output.value.includes(".")) {
        } 
        else {
          output.value += value;
        }
      }
    });
  });
});
