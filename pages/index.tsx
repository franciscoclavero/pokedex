import Card from "src/components/Card";

import styled from "@/pages/index.module.css";
import { consumeApi } from "hooks/consumeAPi";
import Filter from "src/components/FilterInput";
import { useState } from "react";
import InfinityScroll from "src/components/InfiniteScroll";

export type TypePokemon = {
  id: string,
  name: string,
  img: string,
};

const Home = () => {
  const { data: pokemonList, isFetching } = consumeApi<TypePokemon[]>('master/pokedex.json');
  const [ filtered, setFiltered ] = useState('');
  const [renderAmount, setRenderAmount] = useState(14);

  const pokemonListFiltered = pokemonList?.filter((pokemon) => {
    return pokemon.name.toLowerCase().indexOf(filtered.toLowerCase()) > -1;
  }) || [];

  return (
    <div className={styled.background}>
      <main className={styled.body}>
        <Filter value={filtered} onChange={(e) => setFiltered(e.target.value)}/>
        <div className={styled.cardList}>
        <InfinityScroll
            endOfListCallback={() => {
              setRenderAmount((prevValue) => prevValue + 14);
            }}
            hasMoreData={pokemonListFiltered?.length > renderAmount}
          >
            {isFetching && <p>Carregando...</p> }
            {pokemonListFiltered?.map((pokemon, index) => index <= renderAmount && (
              <Card key={pokemon.id} pokemonData={pokemon}/>
            ))}
        </InfinityScroll>
        </div>
      </main>
    </div>
  )
}

export default Home;