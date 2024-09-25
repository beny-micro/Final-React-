import style from "./YourText.module.scss";
import Button from "../Button/Button";
import Right from "../../../assets/YourText/Right.png";
import Left from "../../../assets/YourText/Left.png";
import Avatar from "../../../assets/YourText/Avatar.png";
import Img from "../../../assets/YourText/Img.png";
import sec from "../../../assets/YourText/sec.png";
export default function YourText() {
  return (
    <>
      <div className={style.YourText}>
        <div className={style.baner}>
          <h1 className={style.h1}>از زبان شما</h1>
          <div className={style.bord}>
            <Button className={style.right}>
              <img className={style.img} src={Right} alt="Right" />
            </Button>
            <div className={style.Tv}>
              <div className={style.pic}>
                <img className={style.imgz} src={Avatar} alt="Avatar" />
                <div className={style.d}>
                  <h3 className={style.h3}>جنی ویلسون</h3>
                  <p className={style.pp}>UI/UX طراح</p>
                </div>
                <img className={style.imgb} src={Img} alt="Img" />
              </div>
              <p className={style.p}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.{" "}
              </p>
            </div>
            <Button className={style.left}>
              <img className={style.imga} src={Left} alt="Left" />
            </Button>
          </div>
        </div>
        <img className={style.sec} src={sec} alt="sec" />
      </div>
    </>
  );
}
