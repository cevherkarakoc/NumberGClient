import React from "react";

function EndGame({game, playerTag, newGame}) {
  return (
    <div className="column is-flex is-flex-direction-column is-align-items-center">
      <p className="is-size-4 has-text-centered has-text-success has-text-weight-semibold">
        {game.winnerName} kazandı.
      </p>
      {playerTag === "alpha" && (
        <button className="button is-primary is-fullwidth mt-4" onClick={() => newGame()}>
          Yeni Oyun
        </button>
      )}
    </div>
  );
}

export default EndGame;
