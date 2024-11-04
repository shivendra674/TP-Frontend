import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef("");
  const [name, setName] = useState("");

  function clickHandler() {
    setName(playerName.current.value);
  }

  return (
    <section id="player">
      {/* {JSON.stringify(name)} */}
      Welcome {name ?? "unknown entity"}
      <p>
        <input type="text" ref={playerName} />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
