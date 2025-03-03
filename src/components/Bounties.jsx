export default function Bounties({ character }) {
  const bountyAmount = Math.floor(Math.random() * 10000000) + 1; // Generate a random bounty amount between 1 and 10,000

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
              style={{ color: character.status === "Dead" ? "red" : "green" }}
            >
              {character.status === "Dead" ? "🔴" : "🟢"}
            </span>
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
        <div className="bounty">
          <span>
            Bounty:
            <p>
              $$
              {character.status === "Dead"
                ? " Enemy Killed "
                : ` ${bountyAmount.toLocaleString()} `}
              $$
            </p>
          </span>
        </div>
      </article>
    </div>
  );
}
