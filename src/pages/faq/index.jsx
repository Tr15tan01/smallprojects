import { data } from "./data";
import "./style.css";
import { Question } from "./question";

export const Faq = () => {
  // const [questions, setQuestions] = useState(data);
  return (
    <main>
      <h3>this is a faq page</h3>
      {data.map((question) => {
        return <Question key={question.id} {...question} />;
      })}
    </main>
  );
};
