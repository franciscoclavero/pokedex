import { useState } from "react";
import Card from "src/components/Card";
import FilterInput from "src/components/FilterInput";
import InfinityScroll from "src/components/InfinityScroll";

import { consumeApi } from "hooks/consumeAPi";
import getFilterArray from "../src/components/functions/filterArray";

import styled from "@/pages/index.module.css";

export type TypePokemon = {
  id: string,
  name: string,
  img: string,
};

const Home = () => {
  const { data: pokemonList, isFetching } = consumeApi<TypePokemon[]>('master/pokedex.json');
  const [ filtered, setFiltered ] = useState('');
  const [renderAmount, setRenderAmount] = useState(14);

  const pokemonListFiltered = getFilterArray(pokemonList, filtered);

  return (
    <div className={styled.background}>
      <main className={styled.body}>
        <FilterInput value={filtered} onChange={(e) => setFiltered(e.target.value)}/>
        <div className={styled.cardList}>
        <InfinityScroll
            endOfListCallback={() => {
              setRenderAmount((prevValue) => prevValue + 14);
            }}
            hasMoreData={pokemonListFiltered.length > renderAmount}
          >
            {isFetching && <p>Carregando...</p> }
            {pokemonListFiltered.map((pokemon, index) => index <= renderAmount && (
              <Card key={pokemon.id} pokemonData={pokemon}/>
            ))}
        </InfinityScroll>
        </div>
      </main>
    </div>
  )
}

export default Home;