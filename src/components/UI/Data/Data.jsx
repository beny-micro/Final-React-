import styles from "./Data.module.scss";
import word from "../../../assets/data/word.png";
import pen from "../../../assets/data/pen.png";
import bord from "../../../assets/data/bord.png";
import backgrand from "../../../assets/data/backgrand.png"
import hat from "../../../assets/data/hat.png"
import avatar from "../../../assets/data/avatar-2.png"
import video from "../../../assets/data/video.png"
import p3 from "../../../assets/data/p3.png"

export default function Data() {
  return (
    <>
      <div className={styles.bac}>
        <div className={styles.news}>
          <dic className={styles.news1}>
            <img className={styles.word} src={word} alt="word" />
            <div className={styles.nw}>
              <h1 className={styles.nh}>جدیدترین مهارت ها را بیاموزید</h1>
              <p className={styles.np}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </dic>
          <dic className={styles.news2}>
            <img className={styles.word} src={pen} alt="word" />
            <div className={styles.nw}>
              <h1 className={styles.nh}>برای یک شغل آماده شوید</h1>
              <p className={styles.np}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </dic>
          <dic className={styles.news2}>
            <img className={styles.word} src={bord} alt="word" />
            <div className={styles.nw}>
              <h1 className={styles.nh}>گواهینامه کسب کنید</h1>
              <p className={styles.np}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </dic>
        </div>
        <img className={styles.background} src={backgrand} alt="" />
        <div className={styles.names}>
            
                <img className={styles.hat} src={hat} alt="" />
           
        
                <img className={styles.avatar} src={avatar} alt="" />
       
            
                <img className={styles.video} src={video} alt="" />
           
            
                <img className={styles.p3} src={p3} alt="p3" />
            
        </div>
      </div>
    </>
  );
}
