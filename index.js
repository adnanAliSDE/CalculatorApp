const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll(".btn");
let screenValue = "";

// taking values
for (i of buttons) {
  i.addEventListener("click", (e) => {
    let btnValue = e.target.innerText;
    if (btnValue == "x") {
      btnValue = "*";
      screenValue += btnValue;
      screen.value = screenValue;
    } else if (btnValue == "÷") {
      btnValue = "/";
      screenValue += btnValue;
      screen.value = screenValue;
    } else if (btnValue == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (btnValue == "=") {
      screenValue = eval(screenValue);
      screen.value = eval(screenValue);
    } else if (btnValue == "←") {
      screenValue = screenValue.substring(0, screenValue.length - 1);
      screen.value = screenValue;
    } else {
      screenValue += btnValue;
      screen.value = screenValue;
    }
  });
}
