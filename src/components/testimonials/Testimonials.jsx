import { useState } from "react";
import "../testimonials/testimonials.css";
import { testimonials } from "../../data";
import Heading from "../../constant/Heading";
// import { profile1 } from "../../assets";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { img, text, name, location } = testimonials[index];

  const prevTestimonialHandler = () => {
    setIndex((prev) => prev - 1);

    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };

  const nextTestimonialHandler = () => {
    setIndex((prev) => prev + 1);

    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };

  return (
    <section id="testimonials" className="section__padding">
      <div className="testimonial__content flex__center">
        <div className="testimonial__content-heading">
          <Heading
            subHead="TESTIMONIALS"
            Heading={
              <span>
                What people say{" "}
                <span style={{ color: "#f1a501" }}>about us.</span>
              </span>
            }
          />
        </div>

        <div className="testimonial__content-testimonial ">
          <div
            className={`testimonial__card ${
              testimonials[index] === 0 ||
              testimonials[index] === 1 ||
              testimonials[index] === 2
                ? "slide-fwd-center"
                : ""
            }`}
          >
            <img src={img} alt="profile1" />
            <p>{text}</p>

            <span>
              <h5>{name}</h5>
              <small>{location}</small>
            </span>
          </div>

          <div className="testimonial__button flex__center">
            <IoIosArrowDropup onClick={prevTestimonialHandler} />
            <IoIosArrowDropdown onClick={nextTestimonialHandler} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
