import { render, screen } from "@testing-library/react";
import CardList from ".";

const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

describe("CardList test", () => {
  it("CarList render", () => {
    const { container } = render(<CardList pokemonList={[]}/>);

    const cardListNode = container.getElementsByClassName('cardList');

    expect(cardListNode.length).toBe(1);
  });
  it("CardList render Multiple cards", () => {
    const pokemonList = [
      {
        id: '1',
        name: 'Pokemon 1',
        img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
      },
      {
        id: '2',
        name: 'Pokemon 2',
        img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
      },
      {
        id: '3',
        name: 'Pokemon 3',
        img: 'http://www.serebii.net/pokemongo/pokemon/003.png',
      },
    ];

    const { container } = render(<CardList pokemonList={pokemonList}/>);
    
    const cardsNode = container.getElementsByClassName('Card');

    expect(cardsNode.length).toBe(pokemonList.length);
  });
});