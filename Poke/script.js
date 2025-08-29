// i need to fetch 10 or so random pokemon and display them in the "list" class.

async function fetchPokemon() {
  let rand = Math.floor(Math.random() * 50)

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?&limit=10&offset=${rand}`
  )
  const pokeData = await response.json()

  pokemonLoop(pokeData)
}

function pokemonLoop(pokeData) {
  for (pokemon of pokeData.results) {
    const poke = document.createElement('li')

    poke.className = 'btn'
    poke.innerHTML = capitalize(pokemon.name)
    poke.url = pokemon.url
    document.querySelector('.list').appendChild(poke)

    poke.addEventListener('click', showPokemonDetails)
  }
}
async function showPokemonDetails(event) {
  const response = await fetch(event.target.url)
  const pokeData = await response.json()
  const panel = document.querySelector('.panel')

  panel.innerHTML = `<h2>${capitalize(pokeData.name)}</h2>
  <img src="${pokeData.sprites.other['official-artwork'].front_default}" alt="${
    pokeData.name
  }">
  <h3>Abilities</h3>
  <ul>${pokeData.abilities
    .map((abilityObj) => `<li>${capitalize(abilityObj.ability.name)}</li>`)
    .join('')}</ul>
  <h3>Stats</h3>
  <ul>${pokeData.stats
    .map(
      (statObj) =>
        `<li>${capitalize(statObj.stat.name)}: ${statObj.base_stat}</li>`
    )
    .join('')}</ul>
  `
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
fetchPokemon()
