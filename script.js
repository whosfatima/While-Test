const num1El = document.getElementById("number1");
const num2El = document.getElementById("number2");
const button = document.getElementById("calculate");
const para = document.getElementById("para");

function toggleButtonState() {
  button.disabled = !(num1El.value && num2El.value);
}

num1El.addEventListener("input", toggleButtonState);
num2El.addEventListener("input", toggleButtonState);

button.onclick = () => {
  num1El.classList.remove("error");
  num2El.classList.remove("error");
  para.innerText = "";

  if (num1El.value === "" || num2El.value === "") {
    if (num1El.value === "") num1El.classList.add("error");
    if (num2El.value === "") num2El.classList.add("error");
    para.innerText = "هر دو عدد باید وارد شوند!";
    return;
  }

  let num1 = Number(num1El.value);
  let num2 = Number(num2El.value);
  let total = 0;

  if (num1 >= num2) {
    para.innerText = "عدد اول باید کوچکتر از عدد دوم باشد!";
    num1El.classList.add("error");
    num2El.classList.add("error");
    return;
  }

  while (num1 <= num2) {
    total += num1;
    num1++;
  }

  para.innerHTML = `مجموع: <strong>${total.toLocaleString()}</strong>`;
};