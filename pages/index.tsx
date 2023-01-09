import Card from "src/components/Card";

import styled from "@/pages/index.module.css";
import { consumeApi } from "hooks/consumeAPi";
import Filter from "src/components/FilterInput";
import { useState } from "react";

export type TypePokemon = {
  id: string,
  name: string,
  img: string,
};

const Home = () => {
  const { data: pokemonList, isFetching } = consumeApi<TypePokemon[]>('master/pokedex.json');
  const [ filtered, setFiltered ] = useState('');

  const pokemonListFiltered = pokemonList?.filter((pokemon) => {
    return pokemon.name.toLowerCase().indexOf(filtered.toLowerCase()) > -1;
  });

  return (
    <div className={styled.background}>
      <main className={styled.body}>
        <Filter value={filtered} onChange={(e) => setFiltered(e.target.value)}/>
        <div className={styled.cardList}>
          {isFetching && <p>Carregando...</p> }
          {
            pokemonListFiltered?.map((pokemon)=>{
              return <Card key={pokemon.id} pokemonData={pokemon}/>
            })
          }
        </div>
      </main>
    </div>
  )
}

export default Home;