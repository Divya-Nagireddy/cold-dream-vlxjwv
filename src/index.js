import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// fake 3rd party
setTimeout(() => {
  const tp = document.createElement("div");
  tp.id = "third-party";
  tp.style = "font-size: 0.75rem;";
  tp.innerText = "## replace me with product count ##";
  document.querySelector(".AppFooter")?.appendChild(tp);
}, 1000);
