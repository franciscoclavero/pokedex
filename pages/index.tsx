import Card from "src/components/Card";

import styled from "@/pages/index.module.css";
import { consumeApi } from "hooks/consumeAPi";

export type TypePokemon = {
  id: string,
  name: string,
  img: string,
};

const Home = () => {
  const { data: pokemonList, isFetching } = consumeApi<TypePokemon[]>('master/pokedex.json');
  
  return (
    <div className={styled.background}>
      <main className={styled.body}>
        {isFetching && <p>Carregando...</p> }
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