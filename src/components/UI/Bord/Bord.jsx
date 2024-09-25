import Button from "../Button/Button";
import styles from "./Bord.module.scss";
import CartItem from "../CartItem/CartItem";
export default function Bord({ api }) {
  return (
    <>
      <div className={styles.body}>
        <h1 className={styles.h1}>جدیدترین دوره‌های آنلاین</h1>
        <div className={styles.board}>
          <div>
            <CartItem key={1} api={api}/>
            <CartItem key={1} api={api}/>
          </div>

          <div>
          <CartItem key={1} api={api}/>
          <CartItem key={1} api={api}/>
          </div>

          <div>
          <CartItem key={1} api={api}/>
          <CartItem key={1} api={api}/>
          </div>
        </div>
        <Button className={styles.button}>بیشتر</Button>
      </div>
    </>
  );
}
