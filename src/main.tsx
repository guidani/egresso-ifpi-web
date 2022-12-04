import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./features/auth/context/AuthProvider";
import { Router } from "./router";
import "./styles/globalStyles.css";
import '@fontsource/roboto'

const theme = extendTheme({
  fonts: {
    body: `'Roboto','sans-serif'`,
  }
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AuthProvider>
          <ChakraProvider theme={theme}>
            <Router />
          </ChakraProvider>
        </AuthProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
