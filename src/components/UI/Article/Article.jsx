import "./Article.scss";
import Button from "../Button/Button";
import Right from "../../../assets/YourText/Right.png";
import Left from "../../../assets/YourText/Left.png";
import CartItem from "../CartItem/CartItem";
import sec from "../../../assets/YourText/sec.png";

export default function Article({ api }) {
  return (
    <>
      <div className="YourText">
        <div className="baner">
          <h1>مدرسین ما</h1>
          <div className="bord">
            <Button className="right">
              <img src={Right} alt="Right" />
            </Button>
             {/* {api.length && api.map((api) => <CartItem key={api.id}></CartItem>)} */}

            <CartItem key={4} api={api} />
            <CartItem key={5} api={api} />
            <CartItem key={6} api={api} />

            <Button className="left">
              <img src={Left} alt="Left" />
            </Button>
          </div>
        </div>
        <img className="sec" src={sec} alt="sec" />
      </div>
    </>
  );
}
