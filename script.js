let input = document.querySelector("input");
let a = "";
let b = "";
let res = "";
let sign = "";

function operator(param) {
  if (sign === "" && a !== "") {
    sign = param;
    input.value += sign;
  }
}

function inputNumber(num) {
  if (sign === "") {
    a += num;
    input.value = a;
  } else {
    b += num;
    input.value = a + sign + b;
  }
}

function calculate() {
  if (sign === "+") {
    res = numA + numB;
  } else if (sign === "-") {
    res = numA - numB;
  } else if (sign === "*") {
    res = numA * numB;
  } else if (sign === "/") {
  } else if (sign === "%") {
    res = numA % numB;
  }

  input.value = res;
  a = res.toString();
  b = "";
  sign = "";
}

function reset() {
  a = "";
  b = "";
  sign = "";
  input.value = "";
}
function del() {
  b
    ? ((b = b.slice(0, -1)), (input.value = a + sign + b))
    : sign
    ? ((sign = ""), (input.value = a))
    : ((a = a.slice(0, -1)), (input.value = a));
}
