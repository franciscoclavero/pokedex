import Card from "src/components/Card";

import styled from "@/pages/index.module.css";
import { consumeApi } from "hooks/consumeAPi";
import Filter from "src/components/FilterInput";

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
        <Filter />
        <div className={styled.cardList}>
          {isFetching && <p>Carregando...</p> }
          {
            pokemonList?.map((pokemon)=>{
              return <Card key={pokemon.id} pokemonData={pokemon}/>
            })
          }
        </div>
      </main>
    </div>
  )
}

export default Home;