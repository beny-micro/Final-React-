import Vector from "../../../assets/header/Vector.png";
import Logo from "../../../assets/header/Logo.png";
import Menu from "../../../assets/header/menu-01.png";
import Pic from "../../../assets/header/Pic.png";
import Serch from "../../../assets/header/serch.png";
import Group from "../../../assets/header/Group.png";
import IPhone from "../../../assets/header/iPhone.png";
import styles from "./header.module.scss";
import Button from "../Button/Button";

function Header() {
  return (
    <header className={styles.header}>
      <di className={styles.up}>
        <div className={styles.right}>
          <img className={styles.vector} src={Vector} alt="Vector" />
          <img className={styles.logo} src={Logo} alt="Logo" />
        </div>
        <Button className={styles.menubg}>
          <img className={styles.menu} src={Menu} alt="Menu" />
        </Button>
      </di>
      <div className={styles.p}>
        <h3 className={styles.h}>یادگیری آنلاین</h3>
        <p className={styles.p1}>
          دسترسی به بیش از 5000 دوره آموزشی از 300 مدرس و موسسه
        </p>
      </div>
      <div className={styles.img}>
        <img className={styles.left} src={Group} alt="vector" />
        <img className={styles.in} src={Pic} alt="pic" />
      </div>
      <form className={styles.input}>
        <div>
        <input className={styles.input1} type="text" />
        <img className={styles.serch} src={Serch} alt="serch" />
        </div>
        <a className={styles.iphone}>
        <img className={styles.img1} src={IPhone} alt="iPhone" />
      </a>
      </form>
    </header>
  );
}

export default Header;
