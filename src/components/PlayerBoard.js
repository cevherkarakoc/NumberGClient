import React, { useState } from "react";

function PlayerBoard({ player, self, end }) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="column mb-0 ">
      <h4 className="has-text-centered has-text-weight-bold">
        {player.user.name} : {player.win}
      </h4>
      <div
        onMouseDown={() => setHidden(false)}
        onMouseUp={() => setHidden(true)}
        onTouchStart={() => setHidden(false)}
        onTouchEnd={() => setHidden(true)}
      >
        {self || end ? (
          hidden ? (
            <h4 className="has-text-centered">?</h4>
          ) : (
            <h4 className="has-text-centered">{player.number.join("")}</h4>
          )
        ) : (
          <h4 className="has-text-centered">?</h4>
        )}
      </div>

      <hr className="my-2" />
      <ul className="is-family-monospace">
        {player.guesses
          .slice()
          .reverse()
          .map((guess, index) => (
            <li className="mb-2" key={guess.number.join("") + index}>
              <div className="box p-2">
                <p className="has-text-weight-semibold	has-text-centered">
                  {guess.number.join("")}
                </p>
                <p className="has-text-weight-semibold	has-text-centered">
                  <span className="has-text-success is-family-monospace">
                    +{guess.placed}
                  </span>
                  <span className="has-text-danger is-family-monospace">
                    -{guess.square}
                  </span>
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PlayerBoard;
