import "../footer/footer.css";
import { Logo, google, apple } from "../../assets/index";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer flex__center section__padding">
      <div className="footer__content flex__center">
        <div className="footer__links">
          <div className="logoInfo">
            <img src={Logo} alt="Logo" />
            <p>START YOUR JOURNEY OF ENCHANTMENT AND EXPLORATION.</p>
          </div>

          <div className="company">
            <h3>Company</h3>
            <span className="flex__center">
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Mobile</a>
            </span>
          </div>

          <div className="contact">
            <h3>Contact</h3>
            <span className="flex__center">
              <a href="#">Help/FAQ</a>
              <a href="#">Press</a>
              <a href="#">Affilates</a>
            </span>
          </div>

          <div className="more">
            <h3>More</h3>
            <span className="flex__center">
              <a href="#">Blog</a>
              <a href="#">Resources</a>
              <a href="#">Apps</a>
            </span>
          </div>

          <div className="socials">
            <div className="socials__link flex__center">
              <a href="#">
                <BsFacebook className="facebook" />
              </a>
              <a href="#">
                <AiFillInstagram className="insta" />
              </a>
              <a href="#">
                <BsTwitter className="twitter" />
              </a>
            </div>
            <p>Discover our app</p>

            <div className="store flex__center">
              <a href="#">
                <img src={google} alt="google" />
              </a>
              <a href="#">
                <img src={apple} alt="apple" />
              </a>
            </div>
          </div>
        </div>

        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
