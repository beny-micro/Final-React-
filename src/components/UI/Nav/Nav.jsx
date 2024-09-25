import styles from "./Nav.module.scss";
import Button from "../Button/Button";
import Html from "../../../assets/Nav/FileHtml.png";
import Arrow from "../../../assets/Nav/Frame 34.png";
import Frame from "../../../assets/Nav/Frame.png";
import Pen from "../../../assets/nav/PenNib.png";
import Microphone from "../../../assets/nav/Microphone.png";
import SunHorizon from "../../../assets/nav/SunHorizon.png";
import Camera from "../../../assets/nav/Camera.png";
import MusicNote from "../../../assets/nav/MusicNote.png";
import Lightbulb from "../../../assets/Nav/Lightbulb.png";
import Heartbeat from "../../../assets/nav/Heartbeat.png";
import Graph from "../../../assets/nav/Graph.png";
import Briefcase from "../../../assets/nav/SunHorizon.png";
import Database from "../../../assets/nav/Database.png";
import Detective from "../../../assets/nav/Detective.png";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.h}>دسته‌بندی‌ها</h2>
      <div>
        <div className={styles.box}>
          <div className={styles.b1}>
            <Button className={styles.button1}>
              <img className={styles.img} src={Html} alt="Html" />
              <p className={styles.p}>برنامه نویسی</p>
              <img className={styles.arrow} src={Arrow} alt="Arrow" />
            </Button>
            <Button>
              <img src={Pen} alt="PenNib" />
              <p>طراحی</p>
              <img className="arrow" src={Frame} alt="Arrow" />
            </Button>
            <Button>
              <img src={Microphone} alt="Microphone" />
              <p> بازاریابی</p>
              <img className="arrow" src={Frame} alt="Arrow" />
            </Button>
          </div>
          <div>
            <Button>
              <img src={SunHorizon} alt="SunHorizon" />
              <p>سبک زندگی</p>
              <img className="arrow" src={Frame} alt="Arrow" />
            </Button>
            <Button>
              <img src={Camera} alt="Camera" />
              <p>عکاسی</p>
              <img className="arrow" src={Frame} alt="Arrow" />
            </Button>
            <Button>
              <img src={MusicNote} alt="MusicNote" />
              <p>موسیقی</p>
              <img className="arrow" src={Frame} alt="Arrow" />
            </Button>
          </div>
          <div>
            <Button>
              <img src={Heartbeat} alt="Heartbeat" />
              <p>توسعه شخصی</p>
              <img className="arrow" src={Frame} alt="Arrow" />
            </Button>
            <Button>
              <img src={Lightbulb} alt="Lightbulb" />
              <p>سلامت</p>
              <img className="arrow" src={Frame} alt="Arrow" />
            </Button>
            <Button>
              <img src={Graph} alt="Graph" />
              <p>سرمایه گذاری</p>
              <img className="arrow" src={Frame} alt="Arrow" />
            </Button>
          </div>
          <div>
            <Button>
              <img src={Briefcase} alt="Briefcase" />
              <p>کسب و کار</p>
              <img className="arrow" src={Frame} alt="Arrow" />
            </Button>
            <Button>
              <img src={Database} alt="Database" />
              <p>علم داده</p>
              <img className="arrow" src={Frame} alt="Arrow" />
            </Button>
            <Button>
              <img src={Detective} alt="Detective" />
              <p>درس دادن</p>
              <img className="arrow" src={Frame} alt="Arrow" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
