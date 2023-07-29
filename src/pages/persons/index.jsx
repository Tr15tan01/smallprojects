import { useState } from "react";
import { persons } from "./data";

export const Persons = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = persons[index];
  console.log(name);
  return <h2>Persons Component</h2>;
};
