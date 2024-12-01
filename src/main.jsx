import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Navigation } from "./context/Navigation.jsx";
import Scroll from "./components/Scroll.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Scroll>
        <Navigation>
            <App />
        </Navigation>
    </Scroll>
  </StrictMode>
);
