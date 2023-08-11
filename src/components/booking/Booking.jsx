import "../booking/booking.css";
import Heading from "../../constant/Heading";
import { bookings } from "../../data";
import {
  lady,
  leaf,
  map,
  send,
  building,
  heart,
  forty,
  Rome2,
} from "../../assets";

const Booking = () => {
  return (
    <section className="section__padding">
      <div className="booking__content">
        <Heading
          subHead="Easy and Fast"
          Heading="Book your next trip in 3 easy steps"
        />

        <div className="booking__content-bottom flex__centesr">
          <div className="booking__left">
            <div className="booking__left-card flex__center">
              {bookings.map(({ id, img, title, text }) => (
                <div key={id} className="flex__center">
                  <img src={img} alt="" />
                  <span>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="booking__right">
            <div className="booking__right-card1 flex__center">
              <img src={lady} alt="lady" />
              <div className="flex__center">
                <p>Trip To Greece</p>
                <p>14-29 June | by Robbin joseph</p>
                <span className="booking__right-card1__links flex__center">
                  <a href="#" className="flex__center">
                    <img src={leaf} alt="leaf" />
                  </a>
                  <a href="#" className="flex__center">
                    <img src={map} alt="map" />
                  </a>
                  <a href="#" className="flex__center">
                    <img src={send} alt="send" />
                  </a>
                </span>
                <div className="building flex__center">
                  <span className="flex__center">
                    <img src={building} alt="building" />
                    <p>30 people going</p>
                  </span>
                  <img src={heart} alt="heart" />
                </div>
              </div>
            </div>

            <div className="booking__right-card2 flex__center">
              <div className="romecircle flex__center">
                <img src={Rome2} alt="Rome" />
              </div>

              <div className="ongoing">
                <p>Ongoing</p>
                <h3>Trip to rome</h3>

                <div>
                  <p>
                    <span>40%</span>Completed
                  </p>
                  <img src={forty} alt="forty" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
