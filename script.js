
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")
const submit = document.getElementById('submit');
const fileInput = document.querySelector("[fileinput]").value
let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.id.toString().toLowerCase().includes(value) ||
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})
submit.addEventListener("click", 
  fetch("fileInput")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const idnum = card.querySelector("[data-idnum]")
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      idnum.textContent = user.id
      header.textContent = user.name
      body.textContent = user.email
      userCardContainer.append(card)
      return {id:user.id, name: user.name, email: user.email, element: card }
    })
  }))


