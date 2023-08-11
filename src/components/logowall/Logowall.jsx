import "../logowall/logowall.css";
import { axon, Alitalia, Expedia, Jetstar, Qantas } from "../../assets";

const Logowall = () => {
  return (
    <section className="section__padding flex__center">
      <div className="logowall__content flex__center">
        <a href="#">
          <img src={axon} alt="axon" />
        </a>
        <a href="#">
          <img src={Alitalia} alt="Alitalia" />
        </a>
        <a href="#">
          <img src={Expedia} alt="Expedia" />
        </a>
        <a href="#">
          <img src={Qantas} alt="Qantas" />
        </a>
        <a href="#">
          <img src={Jetstar} alt="Jestar" />
        </a>
      </div>
    </section>
  );
};

export default Logowall;
