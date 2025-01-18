import React from "react";
import { createRoot } from "react-dom/client";
import "./scss/index.scss";
// import i18n from "./locales/i18next.js";
import "./locales/i18next.js"
import App from "./App.jsx";
import { I18nextProvider } from "react-i18next";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <I18nextProvider i18n={i18n}> */}
      <App />
    {/* </I18nextProvider> */}
  </React.StrictMode>
);
