import { BsSun, BsMoon } from "react-icons/bs";
import { useState } from "react";

const Mode = () => {
  const [toggleDark, setToggleDark] = useState(false);
  const tg = () => {
    setToggleDark((prevState) => !prevState);
    document.documentElement.classList.toggle("dark-mode");
  };
  return (
    <div className="modebtn flex__center">
      {toggleDark ? (
        <BsMoon onClick={() => setToggleDark(false)} />
      ) : (
        <BsSun onClick={tg} />
      )}
    </div>
  );
};

export default Mode;
