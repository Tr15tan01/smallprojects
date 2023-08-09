import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Gallery } from "./Gallery";
import { SearchForm } from "./SearchForm";
import { AppContextProvider } from "./context";
import "./style.css";
import { ThemeToggle } from "./themeToggle";

const queryClient = new QueryClient();

export const Unsplash = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <main className="unsplash-main">
          <ThemeToggle />
          <SearchForm />
          <Gallery />
        </main>
      </AppContextProvider>
    </QueryClientProvider>
  );
};
