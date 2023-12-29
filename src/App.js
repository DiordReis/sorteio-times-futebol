import React, { useState } from "react";
import "./App.css";
import "./index.css";

const App = () => {
  const [jogadores, setJogadores] = useState("");
  const [times, settimes] = useState([]);

  const handleJogadoresChange = (event) => {
    setJogadores(event.target.value);
  };

  const geradorDeTimes = () => {
    const playerList = jogadores.split("\n").map((player) => player.trim());
    const shuffledjogadores = [...playerList].sort(() => Math.random() - 0.5);

    const numDeTimes = Math.ceil(shuffledjogadores.length / 5);
    const newtimes = Array.from({ length: numDeTimes }, (_, index) => {
      const startIndex = index * 6;
      const endIndex = startIndex + 6;
      return shuffledjogadores.slice(startIndex, endIndex);
    });

    settimes(newtimes);
  };

  return (
    <div className="body1">
      <h1 className="parag1">Sorteio dos Times </h1>
      <div>
        <label className="label">
          <textarea
            className="areaDeTexto"
            placeholder="Insira os Nomes (um por linha)"
            rows="10"
            cols="30"
            value={jogadores}
            onChange={handleJogadoresChange}
          />
        </label>
      </div>
      <button className="btn-submit" onClick={geradorDeTimes}>
        Sortear
      </button>
      <div>
        {times.map((team, index) => (
          <div className="times" key={index}>
            <h2>Time {index + 1}</h2>
            <ul>
              {team.map((player, playerIndex) => (
                <li key={playerIndex}>{player}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
