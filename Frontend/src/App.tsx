import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "@/router";
// import { LiveChatWidget } from "@/views/shared/LiveChatWidget/LiveChatWidget"; // Replaced with Tawk.to
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ToastProvider } from "@/contexts/ToastContext";
import ToastContainer from "@/components/Toast/ToastContainer";


function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <BrowserRouter basename={__BASE_PATH__}>
          <AppRoutes />
          {/* Custom LiveChatWidget replaced with Tawk.to (loaded in index.html) */}
          {/* <LiveChatWidget /> */}
          <ToastContainer />
        </BrowserRouter>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
