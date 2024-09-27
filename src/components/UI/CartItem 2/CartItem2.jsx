import styles from "../CartItem 2/CartItem2.module.scss";

export default function CartItem({ api }) {
  return (
    <>
      <div className={styles.CartItem}>
        <img className={styles.picT} src={api.image} alt="" />
        <div className={styles.text}>
          <h5 className={styles.name}>{api.title}</h5>
          <h6 className={styles.cours}>{api.description}</h6>
          <p className={styles.p}>{api.duration}</p>
          <p className={styles.p2}>Professor@Tracy D. Wright</p>
        </div>
      </div>
    </>
  );
}
