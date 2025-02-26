import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character?page=29"
        );
        const data = await response.json();
        console.log(data.results);

        setCharacter(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacters();
  }, []);

  return (
    <div>
      <h1>Rick and Morties bounties</h1>
      <ol>
        {characters.map((character) => {
          return (
            <div key={character.id}>
              <article>
                <div>
                  <img src= {character.image} />
                </div>
                <div>
                  <h2> {character.name} </h2>
                  <h3>{character.gender}</h3>
                  <span>
                    {character.status} - {character.species}
                  </span>
                </div>
                <div>
                  <span>
                    Last Known Location: <br></br>
                    {character.location.name}
                  </span>
                </div>
                <div>
                  <span>
                    Place of origin: <br></br> {character.origin.name}
                  </span>
                </div>
              </article>
            </div>
          );
        })}
      </ol>
    </div>
  );
}

export default App;

// const output = ships.map((ship) => {
//   return <Box data={ship} key={ship.model} />;
// });

// return <div className={"container"}>{output}</div>;
// }

// export default App;

// function Box({ data }) {
// return (
//   <>
//     <div className={"box"}>{data.name}</div>
//   </>
// );
// }
