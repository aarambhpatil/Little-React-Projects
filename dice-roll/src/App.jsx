import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import RollDice from "./components/RollDice";
import { library } from "@fortawesome/fontawesome-svg-core"; "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
  return (
    <div>
      <RollDice />
    </div>
  );
}

export default App;
