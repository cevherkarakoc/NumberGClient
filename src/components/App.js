import { useEffect, useState } from "react";
import Entry from "./Entry";
import { send } from "../helper";
import Lobby from "./Lobby";
import Game from "./Game";

export function App() {
  const [ws, setWs] = useState();
  const [id, setId] = useState("");
  const [screen, setScreen] = useState("entry");
  const [playerTag, setPlayerTag] = useState("");
  const [game, setGame] = useState({});

  useEffect(() => {
    const _ws = new WebSocket("wss://app.ceveka.com/numberg/");
    _ws.addEventListener("message", (event) => {
      const { type, payload } = JSON.parse(event.data);

      console.log(type, payload);

      switch (type) {
        case "id":
          setId(payload.id);

          break;
        case "game":
          setGame(payload);

          break;
        default:
          break;
      }
    });

    setWs(_ws);

    return () => {
      _ws.close();
    };
  }, []);

  function sendUsername(name) {
    send(ws, id, "set-user-name", { name });

    setScreen("lobby");
  }

  function createGame() {
    send(ws, id, "create-game");

    setPlayerTag("alpha");
    setScreen("game");
  }

  function joinGame(name) {
    send(ws, id, "join-game", { name : name.toLowerCase() });

    setPlayerTag("delta");
    setScreen("game");
  }

  function sendNumber(number) {
    send(ws, id, "set-number", { gameName: game.name, number });

    setScreen("game");
  }

  function sendGuess(number) {
    send(ws, id, "guess-number", { gameName: game.name, number });
  }

  function newGame() {
    send(ws, id, "new-game", { gameName: game.name });
  }

  

  return (
    <div>
      <h1 className="title mb-2" style={{textAlign: 'center'}}>NumberG</h1>
      <hr className="my-3" />
      {screen === "entry" && <Entry sendUsername={sendUsername} />}
      {screen === "lobby" && (
        <Lobby createGame={createGame} joinGame={joinGame} />
      )}
      {screen === "game" && (
        <Game game={game} playerTag={playerTag} sendNumber={sendNumber} sendGuess={sendGuess} newGame={newGame}/>
      )}
    </div>
  );
}
