import { Provider } from "@/components/ui/provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/style/style.css";
import App from "./App.tsx";

// REDUX
import { Provider as ProviderRedux } from "react-redux";
import store from "./store/store.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderRedux store={store}>
      <Provider>
        <App />
      </Provider>
    </ProviderRedux>
  </StrictMode>
);
