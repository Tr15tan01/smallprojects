import { Gallery } from "./Gallery";
import { SearchForm } from "./SearchForm";
import { AppContextProvider } from "./context";
import "./style.css";
import { ThemeToggle } from "./themeToggle";

export const Unsplash = () => {
  return (
    <AppContextProvider>
      <main className="unsplash-main">
        <ThemeToggle />
        <SearchForm />
        <Gallery />
      </main>
    </AppContextProvider>
  );
};
