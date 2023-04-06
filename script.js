const calculatorScreen = document.querySelector(`.calculator-screen`);
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const operators = document.querySelectorAll(".operator");

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

// ->->->->->->->->->->->->-> tombol = (mendefisikan hasil angka ) ->->->->->->->->->->->->->->->->->->->->->->->->->->

const calculator = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = prevNumber - currentNumber;
      break;
    case "*":
      result = prevNumber * currentNumber;
      break;
    case "/":
      result = prevNumber / currentNumber;
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};

const equalSign = document.querySelector(`.equal-sign`);

equalSign.addEventListener("click", () => {
  calculator();
  updateScreen(currentNumber);
});

// ->->->->->->->->->->->->-> tombol AC ( menghapus ) ->->->->->->->->->->->->->->->->->->->->->->->->->->

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

const clearBtn = document.querySelector(`.all-clear`);

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

// ->->->->->->->->->->->->-> Decimal(titik) ->->->->->->->->->->->->->->->->->->->->->->->->->->

const inputdecimal = (titik) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += titik;
};

const decimal = document.querySelector(`.decimal`);

decimal.addEventListener("click", (event) => {
  inputdecimal(event.target.value);
  updateScreen(currentNumber);
});

// ->->->->->->->->->->->->-> %(persen) ->->->->->->->->->->->->->->->->->->->->->->->->->->

const percentage = document.querySelector(`.percentage`);

percentage.addEventListener("click", () => {
  if (prevNumber) {
    currentNumber = `${(currentNumber / 100) * prevNumber}`;
  } else {
    currentNumber = `${currentNumber / 100}`;
  }

  updateScreen(currentNumber);
});

// ->->->->->->->->->->->->-> Cahaya gelap dan Terang ->->->->->->->->->->->->->->->->->->->->->->->->->->
const darkBtn = document.querySelector(`.dark`);
const lightBtn = document.querySelector(`.light`);
darkBtn.style = "opacity: 0.1";

darkBtn.addEventListener(`click`, () => {
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add("drak");
  darkBtn.style = "opacity: 0.1";
  lightBtn.style = "opacity: 1";
});

lightBtn.addEventListener(`click`, () => {
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");
  darkBtn.style = "opacity: 1";
  lightBtn.style = "opacity: 0.1";
});
