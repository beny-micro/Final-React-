import style from "../CartItem/CartItem.module.scss";

export default function CartItem({ api }) {
  return (
    <>
      <div className={style.CartItem}>
        <img className={style.picT} src={api.image} alt="" />
        <div className={style.text}>
          <h5 className={style.name}>{api.title}</h5>
          <h6 className={style.cours}>{api.description}</h6>
          <p className={style.p}>{api.duration}</p>
          <p className={style.p2}>Professor@Tracy D. Wright</p>
        </div>
      </div>
    </>
  );
}
