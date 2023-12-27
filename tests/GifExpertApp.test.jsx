import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  test("Debe de mostrar el componente correctamente", () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de poder escribir en el input y agregar una nueva categoría", () => {
    const category = "Deku";
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);
    expect(screen.getByText(category).innerHTML).toBeTruthy();
  });

  test("Debe de no agregar una categoría si ya existe", () => {
    const category = "Deku";

    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);
    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);
    expect(screen.getAllByText("Deku").length).toBe(1);
  });
});
