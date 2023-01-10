import { useEffect, useState } from "react";
import CardList, { TypePokemon } from "src/components/template/CardList";
import FilterInput from "src/components/FilterInput";

import { consumeApi } from "hooks/consumeAPi";
import getFilterArray from "../src/components/functions/filterArray";

import styled from "@/pages/index.module.css";

const Home = () => {
  const { data, isFetching } = consumeApi<TypePokemon[]>('master/pokedex.json');

  const [ filtered, setFiltered ] = useState<string>('');
  const [ pokemonList, setPokemonList ] = useState<TypePokemon[]>([]);

  useEffect(() => {
    setPokemonList(data);
  }, [data]);

  return (
    <div className={styled.background}>
      <main className={styled.body}>
        <FilterInput value={filtered} onChange={(e) => setFiltered(e.target.value)}/>
        <CardList pokemonList={getFilterArray(pokemonList, filtered)} />
      </main>
    </div>
  )
};

export default Home;