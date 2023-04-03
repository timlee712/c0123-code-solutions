async function fetchUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
      throw new Error(`error: ${res.status} Failed to fetch data from API.`);
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
fetchUsers();

async function fetchPokemonData(pokemonId) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`error: ${res.status} Failed to fetch data from API.`);
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }

}
fetchPokemonData(94);
