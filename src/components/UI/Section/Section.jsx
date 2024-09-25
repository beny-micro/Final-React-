import "../Article/Article.scss";
import Button from "../Button/Button";
import Right from "../../../assets/YourText/Right.png";
import Left from "../../../assets/YourText/Left.png";
import CartItem from "../CartItem/CartItem";
import sec from "../../../assets/YourText/sec.png";

function Section({api}) {
  

  return (
    <>
      <div className="YourText">
        <div className="baner">
          <h1>محبوب‌ترین‌ها</h1>
          <div className="bord">
            <Button className="right">
              <img src={Right} alt="Right" />
            </Button>
            {/* {api.length && api.map((api) => <CartItem key={api.id}></CartItem>)} */}
            <CartItem key={1} api={api} />
            <CartItem key={2} api={api} />
            <CartItem key={3} api={api} />

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
export default Section;
