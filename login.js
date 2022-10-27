const form = document.forms[0]
form.addEventListener("submit", sendingData)
const button = document.querySelector("input[type='submit']")
const title = document.querySelector(".title")
function sendingData(e) {
  e.preventDefault()
  button.classList.toggle("cursor-progress")
  const emailInput = document.querySelector(".email-input")
  const passInput = document.querySelector(".pass-input")
  const dataToSend = {
    email: emailInput.value,
    password: passInput.value,
  }
  fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error("The user does not exist")
    })
    .then((data) => {
      button.classList.toggle("cursor-progress")
      form.classList.toggle("hidden")
      title.textContent = "You are logged"
    })
    .catch((err) => (title.textContent = "Try again"))
}
