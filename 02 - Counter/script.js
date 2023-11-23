const value = document.getElementById("value");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const increment = document.getElementById("increment");

let number = 0;

decrement.addEventListener("click", () => {
  number--;
  updateNumber();
});

reset.addEventListener("click", () => {
  number = 0;
  updateNumber();
});

increment.addEventListener("click", () => {
  number++;
  updateNumber();
});

const updateNumber = () => {
  value.textContent = number;

  if (number > 0) {
    value.style.color = "green";
  } else if (number < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "#222";
  }
};
