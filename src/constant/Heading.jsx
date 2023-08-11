// eslint-disable-next-line react/prop-types
const Heading = ({ subHead, Heading }) => {
  return (
    <div className="heading flex__center">
      <small>{subHead}</small>
      <h2>{Heading}</h2>
    </div>
  );
};

export default Heading;
