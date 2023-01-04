import { TypePokemon } from "@/pages/index";
import { render, screen } from "@testing-library/react";
import Card from ".";

const pokemonList: TypePokemon[] = [
  {
    id: '002',
    name: 'Ivysaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
  },
];   

describe("Card Component", () => {
  it('render card component', () => {
    // ARRANGE
    const { container } = render(<Card pokemonData={pokemonList[0]}/>);
    
    // ACT
    const cardNodes = container.getElementsByClassName('Card');

    // ASSERT
    expect(cardNodes.length).toBe(1);
  });

  it('Check render name in screen', () => {
    // ARRANGE
    const { container } = render(<Card pokemonData={pokemonList[0]} />);

    const cardNotes = container.getElementsByClassName('Card');
    const ivisaurNote = screen.getByText('IVYSAUR');

    expect(cardNotes.length).toBe(1);
    expect(ivisaurNote).toBeInTheDocument();
  });

  it('Check render id in screen', () => {
    const { container } = render(<Card pokemonData={pokemonList[0]} />);

    const idNotes = container.getElementsByClassName('titleId');

    expect(idNotes.length).toBe(1);
    expect(idNotes[0].textContent).toBe('002');
  });

  it("Check render image", () => {
    const { container } = render(<Card pokemonData={pokemonList[0]} />);

    const idNotes = container.getElementsByClassName('img');

    expect(idNotes[0].getAttribute('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png');
  });
});
