import React, { useState } from "react";
import Button from "../components/Button";
import "./Joke.css";

const Joke = () => {
  const [Joke, setJoke] = useState("");

  const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((res) => setJoke(res.joke));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="joke">
        <p>{Joke}</p>
        <Button callApi={fetchApi} />
      </div>
    </div>
  );
};

export default Joke;
