
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")
const avatar = document.querySelector("[data-avatar]")
const gender = document.querySelector("[data-gender]")
const submit = document.getElementById('submit');
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
//const fileInput = document.querySelector('fileInput');
fetch("userinfo.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const idnum = card.querySelector("[data-idnum]")
      const avatar = card.querySelector("[data-avatar]")
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      const gender = card.querySelector("[data-gender]")

      idnum.textContent = user.id
      avatar.src=user.avatar
      header.textContent = user.first_name
      body.textContent = user.email
      gender.textContent=user.gender
      userCardContainer.append(card)
      return {id:user.id,avature: user.img, name: user.first_name, email: user.email, gender: user.gender, element: card }
    })
  })