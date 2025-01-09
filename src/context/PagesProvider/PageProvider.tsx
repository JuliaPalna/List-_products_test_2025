import { createContext, ReactElement, useState, useEffect } from "react";
import { IPage, IPageProvider, IPageProviderProps  } from "./interface";

export const PagesContext = createContext<IPageProvider | null>(null);

export const PagesProvider = ({ children }: IPageProviderProps): ReactElement => {
  const [page, setPage] = useState<IPage>({
    name: window.location.pathname,
    search: window.location.search,
  });

  const navigate = (name: string) => {
    window.history.pushState(null, "", name);
    setPage({ name, search: "" });
  };

  const setSearchParam = (key: string, value: string) => {
    const searchParams = new URLSearchParams();
    searchParams.set(key, value);

    const newPage: IPage = {
      name: page.name,
      search: searchParams.toString(),
    };

    window.history.replaceState(null, "", `${newPage.name}?${newPage.search}`);
    setPage(newPage)
  }

  useEffect(() => {
    const handelPopstate = () => {
      setPage({
        name: window.location.pathname,
        search: window.location.search,
      });
    };

    window.addEventListener("popstate", handelPopstate);

    return () => {
      window.removeEventListener("popstate", handelPopstate);
    }
  }, [])

  return (
    <PagesContext.Provider value={{ ...page, navigate, setSearchParam }}>
      {children}
    </PagesContext.Provider>
  );
};


