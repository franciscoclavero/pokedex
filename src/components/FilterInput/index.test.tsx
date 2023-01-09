import { render, screen } from "@testing-library/react";
import Filter from './index';

describe("FilterInput test", () => {

  beforeEach(() => {
    render(<Filter value='test' onChange={() => {}} />);
  });

  it("Render Input", () => {
    const placeholderValue = screen.getByPlaceholderText('Filtro');

    // ASSERT
    expect(placeholderValue).toBeInTheDocument;
  });

  it("Check Input value", () => {
    const { container } = render(<Filter value='test' onChange={() => {}} />);

    const placeholderValue: HTMLInputElement[] = screen.getAllByPlaceholderText('Filtro');

    expect(placeholderValue[0].value).toBe('test');
  });
});
