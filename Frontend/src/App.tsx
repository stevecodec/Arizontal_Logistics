import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "@/router";
import { LiveChatWidget } from "@/views/shared/LiveChatWidget/LiveChatWidget";


function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <AppRoutes />
      <LiveChatWidget />
    </BrowserRouter>
  );
}

export default App;
