import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AuthContext from "../store/AuthContextProvider.tsx";
import ReactQueryProvider from "../lib/ReactQueryProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <AuthContext>
        <App />
      </AuthContext>
    </ReactQueryProvider>
  </StrictMode>,
);
