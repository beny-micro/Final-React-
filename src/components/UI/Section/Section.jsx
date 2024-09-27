import styles from "../Article/Article.module.scss";
import Button from "../Button/Button";
import Right from "../../../assets/YourText/Right.png";
import Left from "../../../assets/YourText/Left.png";
import CartItem from "../CartItem/CartItem";
import sec from "../../../assets/YourText/sec.png";

function Section({api}) {
  

  return (
    <>
      <div className={styles.YourText}>
        <div className={styles.baner}>
          <h1 className={styles.h1}>محبوب‌ترین‌ها</h1>
          <div className={styles.bord}>
            <Button className={styles.right}>
              <img className={styles.img1} src={Right} alt="Right" />
            </Button>
            {/* {api.length && api.map((api) => <CartItem key={api.id}></CartItem>)} */}
            <div className={styles.Tv}>
              <CartItem key={1} api={api} />
              <CartItem key={2} api={api} />
              <CartItem key={3} api={api} />
            </div>

            <Button className={styles.left}>
              <img className={styles.img2} src={Left} alt="Left" />
            </Button>
          </div>
        </div>
        <img className={styles.sec} src={sec} alt="sec" />
      </div>
    </>
  );
}
export default Section;
