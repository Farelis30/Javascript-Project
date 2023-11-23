const button = document.getElementById("button");
const input = document.getElementById("input");

const angka = Array.from({ length: 10 }, (_, i) => i);
const hurufKecil = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);
const hurufBesar = hurufKecil.map((huruf) => huruf.toUpperCase());

const allCharacter = angka.concat(hurufKecil, hurufBesar);

const generatePassword = () => {
  let password = "";
  for (let i = 0; i < 15; i++) {
    password += allCharacter[Math.floor(Math.random() * allCharacter.length)];
  }
  return password;
};

button.addEventListener("click", (e) => {
  e.preventDefault();

  input.value = generatePassword();
});
