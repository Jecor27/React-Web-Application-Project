import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character?page=39"
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
      <section className="title">
        <h1>Rick and Morties bounties</h1>
      </section>
      <section>
        <div className="container">
          {characters.map((character) => {
            return (
              <div className="box" key={character.id}>
                <article>
                  <div>
                    <img src={character.image} alt={character.name} />
                  </div>
                  <div className="box-content">
                    <h2> {character.name} </h2>
                    <h3>{character.gender}</h3>
                    <p>
                      <span
                        style={{
                          color: character.status === "Dead" ? "red" : "green",
                        }}
                      >
                        {character.status === "Dead" ? "🔴" : "🟢"}
                      </span>{" "}
                      {character.status} - {character.species}
                    </p>
                  </div>
                  <div className="known-loc">
                    <span>
                      🌍 Last Known Location: <p>{character.location.name}</p>
                    </span>
                  </div>
                  <div className="place-org">
                    <span>
                      Place of origin:<p>{character.origin.name}</p>
                    </span>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </section>
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
