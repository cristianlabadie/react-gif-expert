import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "My hero academia";

  test("debe de mostrar el loading inicialmente y el nombre de la categoría", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);

    expect(screen.getByText("Loading...")).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
    // screen.debug();
  });

  test("debe de mostrar items cuando se  cargan las imágenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/cualquier/cosa.jpg",
        title: "Cualquier cosa",
      },
      {
        id: "123",
        url: "https://localhost/cualquier/cosa.jpg",
        title: "Cualquier cosa",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    // screen.debug();

    expect(screen.getAllByRole("img").length).toBe(gifs.length);
  });
});
