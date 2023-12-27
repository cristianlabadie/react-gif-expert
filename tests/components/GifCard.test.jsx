import { render, screen } from "@testing-library/react";
import { GifCard } from "../../src/components/GifCard";

describe("Pruebas en componente <GifCard />", () => {
  const title = "Un titulo";
  const url = "https://localhost/algo.jpg";

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<GifCard title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el url indicado y el alt", () => {
    render(<GifCard title={title} url={url} />);

    const img = screen.getByRole("img");
    expect(img).toHaveProperty("src", url);
    expect(img).toHaveProperty("alt", title);

    const { src, alt } = img;
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Debe de mostrar el titulo en el componente", () => {
    render(<GifCard title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
