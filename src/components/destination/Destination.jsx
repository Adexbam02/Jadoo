import "../destination/destination.css";
import Heading from "../../constant/Heading";
import { Rome, London, Europe, navigation } from "../../assets";

const Destination = () => {
  return (
    <section className="section__padding flex__center" id="destination">
      <div className="destination__content flex__center">
        <Heading subHead="Top Selling" Heading="Top Destination" />

        <div className="cards flex__center">
          <div className="card">
            <img src={Rome} alt="Rome" />
            <div className="flex__center">
              <h5>Rome, Italy</h5>
              <h5>$5.42k</h5>
            </div>
            <span className="flex__center">
              <img src={navigation} alt="navigation" />
              <h4>10 Days Trip</h4>
            </span>
          </div>

          <div className="card">
            <img src={London} alt="London" />
            <div className="flex__center">
              <h5>London, UK</h5>
              <h5>$4.2k</h5>
            </div>
            <span className="flex__center">
              <img src={navigation} alt="navigation" />
              <h4>12 Days Trip</h4>
            </span>
          </div>

          <div className="card">
            <img src={Europe} alt="Europe" />
            <div className="flex__center">
              <h5>Full Europe</h5>
              <h5>$15k</h5>
            </div>
            <span className="flex__center">
              <img src={navigation} alt="navigation" />
              <h4>28 Days Trip</h4>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
