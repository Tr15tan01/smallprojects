import { useState } from "react";
import axios from "axios";

export const Jokes = () => {
  const url = "https://icanhazdadjoke.com/";
  const [joke, setJoke] = useState("Press the button to see new Joke )))");
  const fetchJoke = async () => {
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      setJoke(data.joke);
      console.log(data.joke);
    } catch (err) {
      console.log(err);
      setJoke("There No Joke Here Yet )))");
    }
  };
  return (
    <div
      className="container text-center"
      style={{ display: "flex", flexDirection: "column", minHeight: "400px" }}
    >
      <h2>Jokes Page</h2>
      <button className="btn brn-primary" onClick={fetchJoke}>
        New Joke
      </button>
      <p className="p-3">{joke}</p>
    </div>
  );
};
