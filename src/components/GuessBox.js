import React, { useState } from 'react'
import { checkNumber } from '../helper';

function GuessBox({player, sendGuess}) {
  const [guessNumber, setGuessNumber] = useState("");

  function onGuessNumberChange(guess) {
    const check = checkNumber(guess);
    if (check) {
      setGuessNumber(guess);
    }
  }

  function onSendGuessClick(value) {
    sendGuess(value);
    setGuessNumber("");
  }

  return (
    <div className="column mb-0 pb-2">
    {player.turn && (
      <p className="is-size-4 has-text-centered">
        Sıra{" "}
        <span className="has-text-success has-text-weight-semibold">
          sende
        </span>
      </p>
    )}
    {!player.turn && (
      <p className="is-size-4 has-text-centered">
        Sıra{" "}
        <span className="has-text-danger has-text-weight-semibold">
          rakibinde
        </span>
      </p>
    )}
    <input
      className="input"
      type="text"
      inputMode="numeric"
      value={guessNumber}
      maxLength={4}
      onChange={(e) => onGuessNumberChange(e.target.value)}
    />
    <button
      className="button is-primary is-fullwidth mt-4"
      onClick={() => onSendGuessClick(guessNumber)}
      disabled={!player.turn || guessNumber.length !== 4}
    >
      Gönder
    </button>
  </div>
  )
}

export default GuessBox