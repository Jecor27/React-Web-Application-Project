import { useEffect, useState } from "react";
import Bounties from "../components/Bounties";

export default function Home() {
  const [characters, setCharacter] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

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

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePreviousPage = () => {
    setPageNumber(pageNumber - 1);
  };

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
        <button onClick={handlePreviousPage}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </section>
    </div>
  );
}
