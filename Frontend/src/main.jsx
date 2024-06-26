import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import { LanguageContextProvider } from "./context/langageContext.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <LanguageContextProvider>
          <App />
        </LanguageContextProvider>
      ),
      children: [{ path: "/", element: <Home /> }],
    },
  ],
  {
    basename: "/",
  }
);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
