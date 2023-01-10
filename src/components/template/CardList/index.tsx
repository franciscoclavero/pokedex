import { useState } from "react";
import Card from "../Card";
import InfinityScroll from "../../InfinityScroll";

import styled from "./index.module.css";

export type TypePokemon = {
  id: string,
  name: string,
  img: string,
};

interface InterfaceCardList {
  pokemonList: TypePokemon[];
}

const CardList = ( { pokemonList }: InterfaceCardList) => {
  const [ renderAmount, setRenderAmount ] = useState<number>(14);

  return (
    <div className={styled.cardList}>
      <InfinityScroll
          endOfListCallback={() => {
            setRenderAmount((prevValue) => prevValue + 15);
          }}
          hasMoreData={pokemonList.length > renderAmount}
        >
          {pokemonList.map((pokemon, index) => index <= renderAmount && (
            <Card key={pokemon.id} pokemonData={pokemon}/>
          ))}
      </InfinityScroll>
    </div>
  );
};

export default CardList;