async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response) {
      throw new Error(`error: ${response.status} Failed to fetch data from API.`);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
fetchUsers();

async function fetchPokemonData(pokemonId) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  try {
    const response = await fetch(apiUrl);
    if (!response) {
      throw new Error(`error: ${response.status} Failed to fetch data from API.`);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }

}
fetchPokemonData(94);
