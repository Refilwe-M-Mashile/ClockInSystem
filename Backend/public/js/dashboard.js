const data = {
  rate: 30,
  currency: "ZAR",
  employer: "Josh",
  employee: "Merriam",
};

document.getElementById("rate").innerHTML = `R ${data.rate}`;
document.getElementById("employer").innerHTML = data.employer;
document.getElementById("user-greeting").innerHTML = `Hi ${data.employee}`;
