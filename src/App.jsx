import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./pages/admin-page/admin";
import HomePage from "./pages/client-page/homePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route
          path="/*"
          element={<div className="w-full h-[100vh] bg-green-400">404</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
