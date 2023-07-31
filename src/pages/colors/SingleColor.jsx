import { useState, useEffect } from "react";
// import rgbToHex from "./utils";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  // eslint-disable-next-line react/prop-types
  const bcg = rgb.join(",");
  // const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        if (navigator.clipboard) {
          navigator.clipboard.writeText(hexValue);
          toast.success("Text copied to Clipboard");
        } else {
          toast.warn("NO clipboard there...");
        }
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
    </article>
  );
};

export default SingleColor;
