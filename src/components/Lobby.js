import React, { useState } from "react";

function Lobby({ createGame, joinGame }) {
  const [gameName, setGameName] = useState("");

  return (
    <div className="is-flex is-flex-direction-column is-align-items-center">
      <button className="button is-primary is-fullwidth" onClick={() => createGame()}>Yeni Oyun Oluştur</button>

      <h4 className="is-size-4 mt-6">veya</h4>
      <h4 className="is-size-4">Bir Oyuna Bağlan :</h4>
      <input
        className="input mt-2"
        type="text"
        placeholder="Oyun adı..."
        value={gameName}
        onChange={(e) => setGameName(e.target.value)}
      />
      <button className="button is-info is-fullwidth mt-4" onClick={() => joinGame(gameName)}>Bağlan</button>
    </div>
  );
}

export default Lobby;
