import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "@/router";
import { LiveChatWidget } from "@/views/shared/LiveChatWidget/LiveChatWidget";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ToastProvider } from "@/contexts/ToastContext";
import ToastContainer from "@/components/Toast/ToastContainer";


function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <BrowserRouter basename={__BASE_PATH__}>
          <AppRoutes />
          <LiveChatWidget />
          <ToastContainer />
        </BrowserRouter>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
