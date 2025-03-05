import { useEffect, useState } from "react";
import useStore from "../components/store";
import Bounties from "../components/Bounties";
import HandleChange from "../components/handleChange";

export default function Home() {
  //   const [characters, setCharacter] = useState([]);
  const { characters, setCharacter, pageNumber, setPageNumber } = useStore();

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${pageNumber}`
        );
        const data = await response.json();
        // console.log(data.results);

        setCharacter(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacters();
  }, [pageNumber]);
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
        <HandleChange setPageNumber={setPageNumber} pageNumber={pageNumber} />
      </section>
    </div>
  );
}
