import Carousel from './Carousel';
import './App.css';

function App() {
  const pokemon = [
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
  ]
  return (
    <div>
      <div className="title d-flex justify-content-center py-3">
        <img className="pokeball mx-3" src='https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png' alt='pokeball' />
        <h1 className=" text-light">Pokemon Carousel</h1>
        <img className="pokeball mx-3" src='https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png' alt='pokeball' />
      </div>

     <Carousel images={pokemon} />
    </div>
  );
}

export default App;
