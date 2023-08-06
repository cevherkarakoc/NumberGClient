import React, { useState } from "react";
import PlayerBoard from "./PlayerBoard";
import EndGame from "./EndGame";
import GuessBox from "./GuessBox";
import NumberChoose from "./NumberChoose";
import Wait from "./Wait";

function Game({ game, playerTag, sendNumber, sendGuess, newGame }) {
  const opponentTag = playerTag === "alpha" ? "delta" : "alpha";

  const { phase, name } = game;
  const player = game[playerTag];
  const opponent = game[opponentTag];

  if (phase === "wait-for-delta") {
    return <Wait gameName={name} />;
  }

  if (phase === "choose") {
    return <NumberChoose player={player} sendNumber={sendNumber} />;
  }

  if (!game.name) {
    return <div></div>;
  }

  return (
    <div>
      <div
        className="columns mb-0 has-background-white	"
        style={{ position: "sticky", top: 0 }}
      >
        {game.phase === "end" ? (
          <EndGame game={game} playerTag={playerTag} newGame={newGame} />
        ) : (
          <GuessBox player={player} sendGuess={sendGuess} />
        )}
      </div>
      <hr className="my-2" />
      <div className="columns mb-0 is-mobile">
        <PlayerBoard player={player} end={game.phase === "end"} self />
        <PlayerBoard player={opponent} end={game.phase === "end"} />
      </div>
    </div>
  );
}

export default Game;
