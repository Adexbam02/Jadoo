import Heading from "../../constant/Heading";
import "./category.css";
import { category } from "../../data";

const Category = () => {
  return (
    <section id="category" className="section__padding flex__center">
      <div className="category__content flex__center">
        <div className="flex__center">
          <Heading subHead="CATEGORY" Heading="We Offer Best Services" />
        </div>

        <div className="categories flex__center">
          {category.map(({ id, img, title, text }) => (
            <div key={id} className="flex__center">
              <img src={img} alt="category image" />
              <h4>{title}</h4>
              <small>{text}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
