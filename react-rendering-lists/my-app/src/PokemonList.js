export default function PokemonList({ pokedex }) {
  const listItems = pokedex.map(({ name }) => (
    <li key={name}>
      {name}
    </li>
  ));
  return (
    <div className="pokedex">
      <div className="pokedex-header">
        <h2>Pokedex</h2>
      </div>
      <div className="pokedex-list">
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}
