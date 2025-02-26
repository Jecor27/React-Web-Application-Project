import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character?page=3"
        );
        const data = await response.json();
        console.log(data.results);

        setCharacter(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacters()
  }, []);

  return (
    <div>
      <h1>Rick and morty bounty hunter list</h1>
      <div>
        {character.map}
      </div>
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

