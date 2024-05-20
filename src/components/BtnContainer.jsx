import styles from "./BtnContainer.module.css";

const BtnContainer = ({ handleBtnClick, btnNames }) => {
  return (
    <>
      <div className={styles.btnContainer}>
        {btnNames.map((key) => (
          <button className={styles.btn} onClick={() => handleBtnClick(key)}>
            {key}
          </button>
        ))}
      </div>
    </>
  );
};
export default BtnContainer;
