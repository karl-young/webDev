let pets = [
  { name: 'Garfield', type: 'cat', age: 3, adopted: false },
  { name: 'Bella', type: 'dog', age: 5, adopted: true },
  { name: 'Whiskers', type: 'cat', age: 2, adopted: true },
  { name: 'Chirpy', type: 'bird', age: 1, adopted: false },
  { name: 'Nibbles', type: 'rabbit', age: 4, adopted: true },
]

function displayPet(pet) {
  let cssClass = pet.adopted ? 'pet adopted' : 'pet available'
  let html = `<div class="${cssClass}">
             <h2>Pet name is ${pet.name}</h2>
             <p>Type of pet: ${pet.type}</p>
             <p>Pets age: ${pet.age}</p>
             <p>Adopted status: ${pet.adopted}</p>
             </div>`
  return html
}

function showAllPets() {
  let html = ''
  let container = document.getElementById("pet-list")
  for (let i = 0; i < pets.length; i++) {
    html += displayPet(pets[i])
  }
  container.innerHTML = html
}

function adoptPet(pet) {
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].name === pet) {
      pets[i].adopted = true
    }
  }
  showAllPets()
}

showAllPets()
adoptPet('Garfield')
