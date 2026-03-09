import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ handlOnClickEvent }) => {
  let buttonsNames = [
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
  return (
    <div className={styles.buttonsContainer}>
      {buttonsNames.map((buttonName) => (
        <button
          key={buttonName}
          className={styles.button}
          onClick={() => handlOnClickEvent(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
