import { useNavigate, type NavigateFunction, useLocation } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { useEffect } from "react";
import routes from "@/router/config";

// Secure navigation resolver using closure
let navigateResolver: ((navigate: ReturnType<typeof useNavigate>) => void) | null = null;

export const navigatePromise = new Promise<NavigateFunction>((resolve) => {
  navigateResolver = resolve;
});

// Export a secure navigation function that can be used programmatically
export let programmaticNavigate: NavigateFunction | null = null;

export function AppRoutes() {
  const element = useRoutes(routes);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Store navigate function in module scope 
    programmaticNavigate = navigate;
    
    if (navigateResolver) {
      navigateResolver(navigate);
      navigateResolver = null; 
    }
    
    return () => {
      // Cleanup
      programmaticNavigate = null;
    };
  }, [navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return element;
}
