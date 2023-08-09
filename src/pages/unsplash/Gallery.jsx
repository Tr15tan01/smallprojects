import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GlobalContext } from "./context";

export const Gallery = () => {
  const { searchTerm } = GlobalContext();
  console.log(searchTerm);
  const url =
    "https://api.unsplash.com/search/photos/?client_id=" +
    import.meta.env.VITE_API_KEY;
  console.log(import.meta.env.VITE_API_KEY);
  const query = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${searchTerm}`);
      return response.data.results;
    },
  });
  if (query.isLoading) {
    return (
      <section className="image-container">
        <h3>Loading...</h3>
      </section>
    );
  }
  if (query.isError) {
    return (
      <section className="image-container">
        <h3>Error loading...</h3>
      </section>
    );
  }
  const results = query.data;
  console.log(results);
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h3>Error loading...</h3>
      </section>
    );
  }
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            className="unsplash-img"
            key={item.id}
            src={url}
            alt={item.alt_description}
          />
        );
      })}
    </section>
  );
};
