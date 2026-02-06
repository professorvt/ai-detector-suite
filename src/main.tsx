import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Ye line zaroori hai
import { HelmetProvider } from "react-helmet-async";
import App from "@/App.tsx";
import "@/index.css";
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga4";

ReactGA.initialize("G-0GMQ5XSKPG");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <Analytics />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
