import React, { useState } from "react";

function Entry({sendUsername}) {
  const [username, setUsername] = useState('');

  return (
    <div className="is-flex is-flex-direction-column is-align-items-center">
      <h2 className="subtitle is-4" >Hoşgeldiniz, adınız : </h2>
      <input
        className="input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="button is-primary is-fullwidth mt-4" onClick={() => sendUsername(username)}>Giriş</button>
    </div>
  );
}

export default Entry;
