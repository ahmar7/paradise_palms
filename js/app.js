let toggleProb = () => {
  let prob = document.getElementById("prob");
  let plus = document.getElementById("plus");
  prob.classList.toggle("show-prob");
  if (plus.innerHTML == "-") {
    plus.innerHTML = "+";
  } else {
    plus.innerHTML = "-";
  }
  prob.classList.toggle("hidden");
};
let toggleProb1 = () => {
  let prob = document.getElementById("prob1");
  let plus = document.getElementById("plus1");
  prob.classList.toggle("show-prob");
  if (plus.innerHTML == "-") {
    plus.innerHTML = "+";
  } else {
    plus.innerHTML = "-";
  }
  prob.classList.toggle("hidden");
};
let toggleProb2 = () => {
  let prob = document.getElementById("prob2");
  let plus = document.getElementById("plus2");
  prob.classList.toggle("show-prob");
  if (plus.innerHTML == "-") {
    plus.innerHTML = "+";
  } else {
    plus.innerHTML = "-";
  }
  prob.classList.toggle("hidden");
};
