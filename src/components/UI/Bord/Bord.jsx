import Button from "../Button/Button";
import styles from "./Bord.module.scss";
import CartItem2 from "../CartItem 2/CartItem2";
export default function Bord({ api }) {
  return (
    <>
      <div className={styles.body}>
        <h1 className={styles.h1}>جدیدترین دوره‌های آنلاین</h1>
        <div className={styles.board}>
          <div className={styles.upCart}>
            <CartItem2 key={1} api={api}/>
            <CartItem2 key={1} api={api}/>
          </div>

          <div className={styles.otherCarts}>
            <CartItem2 key={1} api={api}/>
            <CartItem2 key={1} api={api}/>
          </div>

          <div className={styles.otherCarts}>
            <CartItem2 key={1} api={api}/>
            <CartItem2 key={1} api={api}/>
          </div>
        </div>
        <Button className={styles.button}>بیشتر</Button>
      </div>
    </>
  );
}
