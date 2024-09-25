import styles from "./footer.module.scss";
import Logo from "../../../assets/footer/logo.png";
import F from "../../../assets/footer/f.png";
import I from "../../../assets/footer/in.png";
import instagram from "../../../assets/footer/instagram.png";
import Tw from "../../../assets/footer/tw.png";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.board}>
          <div className={styles.right}>
            <div className={styles.logo}>
              <h1 className={styles.h1}>LOGO</h1>
              <img className={styles.img1} src={Logo} alt="Logo" />
            </div>
            <div className={styles.paraph}>
              <div className={styles.up}>
                <h2 className={styles.h2}>تماس با ما</h2>
                <div className={styles.p}>
                  <p>آموزش مجازی با کیفیت برای همه؛ بدون مرز، همیشه، همه‌جا</p>
                  <p className={styles.p2}>شماره تماس: 09123456789</p>
                  <p>Email: example@mail.com</p>
                </div>
              </div>
              <div className={styles.link}>
                <a className={styles.a}>
                  <img className={styles.img2} src={F} alt="" srcset="" />
                </a>
                <a className={styles.a}>
                  <img className={styles.img2} src={I} alt="" srcset="" />
                </a>
                <a className={styles.a}>
                  <img className={styles.img2} src={instagram} alt="" srcset="" />
                </a>
                <a className={styles.a}>
                  <img className={styles.img2} src={Tw} alt="" srcset="" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.center}>
            <div>
              <h1 className={styles.h3}>لینک‌ها</h1>
              <p className={styles.p3}>خانه</p>
              <p className={styles.margin}>دوره های آنلاین</p>
              <p className={styles.margin}>آزمون های آنلاین</p>
              <p className={styles.margin}>درباره ما</p>
              <p className={styles.margin}>ارتباط با ما</p>
            </div>
            <div>
              <h1 className={styles.h3}>دسته‌بندی</h1>
              <p className={styles.p3}>خانه</p>
              <p className={styles.margin}>برنامه نویسی</p>
              <p className={styles.margin}>طراحی</p>
              <p className={styles.margin}>کسب و کار</p>
              <p className={styles.margin}>سبک زندگی</p>
              <p className={styles.margin}>عکاسی</p>
              <p className={styles.margin}>موسیقی</p>
            </div>
          </div>
          <div className={styles.shear}>
            <h1 className={styles.h4}>مشترک شدن</h1>
            <p className={styles.p4}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.{" "}
            </p>
            <form className={styles.form} action="">
              <input className={styles.input} type="email" placeholder="ایمیل را وارد کنید" />
              <input className={styles.button} type="submit" value="مشترک شدن" />
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}
