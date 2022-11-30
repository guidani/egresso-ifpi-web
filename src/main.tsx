import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./features/auth/context/AuthProvider";
import { Router } from "./router";
import "./styles/globalStyles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AuthProvider>
          <ChakraProvider>
            <Router />
          </ChakraProvider>
        </AuthProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
