import { useState } from "react";
import { persons } from "./data";
import "./persons.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export const Persons = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = persons[index];
  const prevPerson = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex < 0) {
        return persons.length - 1;
      }
      return newIndex;
    });
  };
  //some different logic with modulus operator
  const nextPerson = () => {
    setIndex((prevIndex) => {
      return (prevIndex + 1) % persons.length;
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * persons.length);
    randomNumber === index
      ? (randomNumber = index + 1)
      : setIndex(randomNumber);
  };
  return (
    <>
      <main>
        <article className="review">
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="button-container">
            <button className="prev-btn" onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
          <button className="random-btn" onClick={randomPerson}>
            surprise me
          </button>
        </article>
      </main>
    </>
  );
};
