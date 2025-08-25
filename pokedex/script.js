function fetchPokemon() {
    const query = document.getElementById('search').value.toLowerCase()
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('pokemon-image').src = data.sprites.front_default
            document.getElementById('pokemon-name').innerText = data.name.toUpperCase()
            document.getElementById('pokemon-type').innerText = "Type: " + data.types.map(t => t.type.name).join(", ")
        })
        .catch(() => alert("Pokémon not found!"))
}
