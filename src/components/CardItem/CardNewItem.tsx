import styles from "@/styles/CardNewItem.module.css";

const CardNewItem = ({ character, movePrev, moveNext }) => {
  return (
    <div className={styles.cardNewItem}>
      <button className={styles.cardNewItemBtn} onClick={movePrev}>
        Previous
      </button>
      <div className={styles.cardNewItemImgContainer}>
        <img className={styles.cardNewItemImg} src={character.image} alt="" />
        <p className={styles.cardNewItemImgName}>{character.name}</p>
      </div>
      <button className={styles.cardNewItemBtn} onClick={moveNext}>
        Next
      </button>
    </div>
  );
};

export default CardNewItem;
