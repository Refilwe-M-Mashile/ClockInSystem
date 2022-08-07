const data = {
  rate: 30,
  currency: "ZAR",
  employer: "Josh",
  employee: "Merriam",
};

document.getElementById("rate").innerHTML = `R ${data.rate}`;
document.getElementById("employer").innerHTML = data.employer;
document.getElementById("user-greeting").innerHTML = `Hi ${data.employee}`;

const modal = document.getElementById("myModal");
document.getElementsByClassName("close")[0].addEventListener("click", () => {
  modal.style.display = "none";
});

document.getElementById("clock-in").addEventListener("click", () => {
  modal.style.display = "block";
  alert(document.getElementById("clock-in").innerHTML);
  document.getElementById("clock-in").innerHTML = "Check-out";
});

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById("btn-submit").addEventListener("click", async () => {
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  fetch("http://localhost:5000/checkin", () => {});
});
