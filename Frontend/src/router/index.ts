import { useNavigate, type NavigateFunction, useLocation } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { useEffect } from "react";
import routes from "@/router/config";

let navigateResolver: (navigate: ReturnType<typeof useNavigate>) => void;

declare global {
  interface Window {
    REACT_APP_NAVIGATE: ReturnType<typeof useNavigate>;
  }
}

export const navigatePromise = new Promise<NavigateFunction>((resolve) => {
  navigateResolver = resolve;
});

export function AppRoutes() {
  const element = useRoutes(routes);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    window.REACT_APP_NAVIGATE = navigate;
    if (navigateResolver) {
      navigateResolver(window.REACT_APP_NAVIGATE);
    }
    
    return () => {
      // Cleanup: remove navigate from window on unmount
      if (window.REACT_APP_NAVIGATE) {
        delete window.REACT_APP_NAVIGATE;
      }
    };
  }, [navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return element;
}
