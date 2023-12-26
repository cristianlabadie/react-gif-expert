export const getGifs = async (category) => {
  const api_key = import.meta.env.VITE_GIPHY_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=2&api_key=${api_key}`;
  const response = await fetch(url);
  const { data } = await response.json();
  // console.log(data);

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.fixed_width_small.url,
  }));
  return gifs;
};
