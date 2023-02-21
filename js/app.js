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
let toggleSol = () => {
  let sol = document.getElementById("sol");
  sol.classList.toggle("show-prob");
  sol.classList.toggle("hidden");
  let plus2 = document.getElementById("plus2");

  if (plus2.innerHTML == "-") {
    plus2.innerHTML = "+";
  } else {
    plus2.innerHTML = "-";
  }
};
