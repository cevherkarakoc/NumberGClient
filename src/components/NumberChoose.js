import React, { useState } from 'react'
import { checkNumber } from '../helper';

function NumberChoose({player, sendNumber}) {
  const [number, setNumber] = useState("");

  function onNumberChange(newNumber) {
    const check = checkNumber(newNumber);
    if (check) {
      setNumber(newNumber);
    }
  }

  if (player.number && player.number.length > 0) {
    return (
      <div className="is-flex is-flex-direction-column is-align-items-center">
        <h4 className="is-size-4">Rakibin sayı seçmesi bekleniyor...</h4>
      </div>
    );
  }
  return (
    <div className="is-flex is-flex-direction-column is-align-items-center">
      <h4 className="is-size-4">Sayını Seç :</h4>
      <input
        className="input mt-2"
        type="text"
        inputMode="numeric"
        value={number}
        onChange={(e) => onNumberChange(e.target.value)}
        maxLength={4}
      />
      <button
        className="button is-primary is-fullwidth mt-4"
        onClick={() => sendNumber(number)}
        disabled={number.length !== 4}
      >
        Gönder
      </button>

      <div className="content">
        <ul>
          <li>4 Haneli olmalı.</li>
          <li>Her rakam sadece 1 kere kullanılmalı.</li>
          <li>0 ile başlamamalı.</li>
        </ul>
      </div>
    </div>
  );
}

export default NumberChoose