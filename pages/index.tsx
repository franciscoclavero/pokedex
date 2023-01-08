import Card from "src/components/Card";

import styled from "@/pages/index.module.css";
import { consumeApi } from "hooks/consumeAPi";

export type TypePokemon = {
  id: string,
  name: string,
  img: string,
};

const Home = () => {
  const { data: pokemonList } = consumeApi<TypePokemon[]>('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
  
  return (
    <div className={styled.background}>
      <main className={styled.body}>
        {
          pokemonList?.map((pokemon)=>{
            return <Card key={pokemon.id} pokemonData={pokemon}/>
          })
        }
      </main>
    </div>
  )
}

export default Home;