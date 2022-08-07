const btnRegister = document.querySelector("#btn-register");

btnRegister.addEventListener(async () => {
  const firstname = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("tel").value;

  const data = { name, surname, email, phone };
  console.log(data);
  const res = await fetch("http://localhost:5000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(data.message);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
