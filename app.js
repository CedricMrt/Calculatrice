const buttons = [...document.querySelectorAll(".button")];
const listKeycode = buttons.map((element) => element.dataset.key);
const screen = document.querySelector(".screen");

document.addEventListener("click", (e) => {
  const value = e.target.dataset.key;
  calcul(value);
});

document.addEventListener("keydown", (e) => {
  const value = e.code;
  calcul(value);
});

const calcul = (value) => {
  if (listKeycode.includes(value)) {
    switch (value) {
      case "Backspace":
        screen.textContent = "";
        screen.style.fontSize = "2rem";
        break;
      case "NumpadEnter":
        const calcul = eval(screen.textContent);
        screen.textContent = calcul;
        if (screen.textContent.length >= 13) {
          screen.textContent = calcul.toExponential();
        }
        break;
      default:
        const indexCode = listKeycode.indexOf(value);
        const button = buttons[indexCode];
        screen.textContent += button.innerHTML;
        if (screen.textContent.length >= 10) {
          screen.style.fontSize = "1.5rem";
        }
        if (screen.textContent.length >= 14) {
          screen.style.fontSize = "1rem";
        }
    }
  }
};
