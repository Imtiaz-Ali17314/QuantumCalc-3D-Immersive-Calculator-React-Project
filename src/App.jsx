import "./App.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");
  let handleEvent = (buttonName) => {
    if (buttonName === "C") {
      setCalVal("");
    } else if (buttonName === "=") {
      const newCalVal = eval(calVal);
      setCalVal(newCalVal);
    } else {
      const newCalVal = calVal + buttonName;
      setCalVal(newCalVal);
    }
  };

  return (
    <div className="calculator">
      <Display displayVal={calVal}></Display>
      <ButtonsContainer handlOnClickEvent={handleEvent}></ButtonsContainer>
    </div>
  );
}

export default App;
