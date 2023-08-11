import "../navbar/navbar.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Logo } from "../../assets";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setToggleMenu((prevState) => !prevState);
  };

  return (
    // <nav  style={{ backgroundColor: scrolling ? "#FFF" : "transparent"}{}}>
    <nav
      style={{
        background: scrolling ? "#fff" : "transparent",
        boxShadow: scrolling ? "0px 5px 40px 0px #00000015" : "none",
      }}
    >
      <div className="container nav__container flex__center">
        <div className="nav__container-logo">
          <img src={Logo} alt="" />
        </div>

        <div className="nav__container-links">
          <ul className="flex__center">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#category">Category</a>
            </li>
            <li>
              <a href="#destination">Destination</a>
            </li>
            <li>
              <a href="#booking">Bookings</a>
            </li>
            <li>
              <a href="#testimonials">Testimonial</a>
            </li>
          </ul>
        </div>

        <div className="nav__container-sm">
          {toggleMenu ? (
            <RxCross1
              className="close"
              color="#f1a501;"
              fontSize={27}
              onClick={handleMenuToggle}
            />
          ) : (
            <RxHamburgerMenu
              className="open"
              color="#f1a501;"
              fontSize={27}
              onClick={handleMenuToggle}
            />
          )}
          {toggleMenu && (
            <div className="nav__container-menu ">
              <ul className="flex__center slide-bottom">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#category">Category</a>
                </li>
                <li>
                  <a href="#destination">Destination</a>
                </li>
                <li>
                  <a href="#booking">Bookings</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonial</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
