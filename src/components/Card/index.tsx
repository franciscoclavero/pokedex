import { TypePokemon } from "@/pages/index";

import styled from "./index.module.css";

interface InterfacePokemon {
  pokemonData: TypePokemon;
}

const Card = ({ pokemonData }: InterfacePokemon) => {
  const { id, name, img } = pokemonData;
  return (
    <div className={styled.Card}>
      <picture>
        <img className={styled.img} src={img} />
      </picture>
      <p className={styled.titleName} >{name.toUpperCase()}</p>
      <p className={styled.titleId} >{id}</p>
    </div>
  );
};

export default Card;