import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./pages/admin-page/admin";
import HomePage from "./pages/client-page/homePage";
import LoginPage from "./pages/client-page/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/admin/*" element={<AdminPage />} />
    
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
