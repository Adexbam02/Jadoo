import "../header/header.css";
import { AiFillPlayCircle } from "react-icons/ai";

const Header = () => {
  return (
    <header id="home">
      <div className="header__content flex__center">
        <div className="header__content-left flex__center">
          <p className="best">
            Start your journey of enchantment and exploration.
          </p>

          <h1>Travel, enjoy and live a new and full life</h1>
          <p className="header__p">
            Enter Jadoo: Your gateway to enchanted travel. Explore breathtaking
            destinations, create vibrant memories, and let every journey be a
            stroke of fascination. Discover the artistry of travel with us.
          </p>
          <div className="header__content-left__btns flex__center">
            <button>Find out more</button>
            <span className="flex__center">
              <AiFillPlayCircle color="#DF6951" fontSize={40} />{" "}
              <p>Play Demo</p>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
