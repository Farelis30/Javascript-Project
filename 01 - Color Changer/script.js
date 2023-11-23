const colors = ["aquamarine", "orangered", "rgba(133,122,200)", "#B9D9EB"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumbers();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

const getRandomNumbers = () => {
  return Math.floor(Math.random() * colors.length);
};
