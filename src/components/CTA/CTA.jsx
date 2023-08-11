import "../CTA/cta.css";
import { sendd } from "../../assets";

const CTA = () => {
  return (
    <section className="section__padding flex__center">
      <div className="cta__content flex__center">
        <img className="fly" src={sendd} alt="" />
        <div className="cta flex__center">
          <h3>
            Unlock Enchantment: Embrace Adventure with Jadoo&apos;s Captivating
            Travel Experience. Your Journey Awaits.
          </h3>

          <form action="#" className="flex__center">
            <input type="email" placeholder="Your email" id="" />
            <button type="submit" className="flex__center">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
