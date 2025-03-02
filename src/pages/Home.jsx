import { useEffect, useState } from "react";
import Bounties from "../components/Bounties";

export default function Home() {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character?page=14"
        );
        const data = await response.json();
        // console.log(data.results);

        setCharacter(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacters();
  }, []);
  //console.log(characters);
  return (
    <div>
      <section className="title">
        <h1>Rick and Morties bounties</h1>
      </section>
      <section>
        <div className="container">
          {characters.map((c) => (
            <Bounties character={c} />
          ))}
        </div>
      </section>
    </div>
  );
}
