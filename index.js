const section = document.querySelector(".section")
fetch("https://reqres.in/api/users?page=2")
  .then((response) => {
    if (response.status !== 200) {
      throw new Error("Error")
    }
    return response.json()
  })
  .then((res) => createList(res.data))

function createList(data) {
  data.map((el) => createCard(el))
}
function createCard(el) {
  let card = document.createElement("div")
  card.classList.add(
    "grid",
    "mt-10",
    "mx-5",
    "card",
    "align-items-center",
    "justify-items-center",
    "p-2",
    "gap-4",
    "rounded-md",
    "w-80"
  )
  let firstP = document.createElement("p")
  firstP.classList.add("mb-5")
  firstP.textContent = el.email
  let fName = el.first_name
  let lName = el.last_name
  let secP = document.createElement("p")
  secP.textContent = `${fName} ${lName}`
  let imageAv = document.createElement("img")
  imageAv.src = el.avatar
  imageAv.classList.add("mt-5")
  card.appendChild(imageAv)
  card.appendChild(secP)
  card.appendChild(firstP)
  section.appendChild(card)
  if (window.screen.width >= 1024) {
    card.classList.remove("card")
    card.classList.add("card-lg")
  }
}
