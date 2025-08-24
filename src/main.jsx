import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProviderContext } from "./contexts/ThemeContext";
import AppRoutes from "./routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProviderContext>
      <AppRoutes />
    </ThemeProviderContext>
  </StrictMode>
);
