import { GlobalContext } from "./context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export const ThemeToggle = () => {
  const { greeting, isDarkTheme, toggleDarkTheme } = GlobalContext();

  console.log(greeting, isDarkTheme);
  return (
    <section className="unsplash-toggle-container">
      <button
        className="unsplash-dark-toggle"
        onClick={toggleDarkTheme}
        title="Switch Theme"
      >
        {isDarkTheme ? (
          <BsFillSunFill className="unsplash-toggle-icon" />
        ) : (
          <BsFillMoonFill className="unsplash-toggle-icon" />
        )}
      </button>
    </section>
  );
};
