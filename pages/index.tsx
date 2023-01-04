import Card from "src/components/Card";

import styled from "@/pages/index.module.css";

export type TypePokemon = {
  id: string,
  name: string,
  image: string,
};

const pokemonList: TypePokemon[] = [
  {
    id: '001',
    name: 'bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  },
];

const Home = () => {
  return (
    <div className={styled.background}>
      <main className={styled.body}>
        {
          pokemonList.map((pokemon)=>{
            return <Card pokemonData={pokemon}/>
          })
        }
      </main>
    </div>
  )
}

export default Home;