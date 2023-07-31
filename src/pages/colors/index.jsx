import "./styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

export const Colors = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#c6108c").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      toast.error(error.message);
    }
  };

  return (
    <>
      <section className="color-container">
        <h3>color generator</h3>
        <div className="color-form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="#f15025"
              className={`${error ? "error" : null}`}
            />
            <button className="color-btn" type="submit">
              submit
            </button>
          </form>
        </div>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
        <ToastContainer position="top-center" />
      </section>
    </>
  );
};
