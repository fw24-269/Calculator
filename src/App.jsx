import styles from "./App.module.css";
import Display from "./components/Display";
import BtnContainer from "./components/BtnContainer";
import { useState } from "react";

function App() {
  const btnNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  const [calVal, setCalVal] = useState("");

  const toShow = (btnText) => {
    if (btnText === "C") {
      setCalVal("");
    } else if (btnText === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newDisplayValue = calVal + btnText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <Display DisplayValue={calVal} />
        <BtnContainer handleBtnClick={toShow} btnNames={btnNames} />
      </div>
    </>
  );
}

export default App;
