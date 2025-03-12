import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./pages/admin-page/admin";
import HomePage from "./pages/client-page/homePage";
import LoginPage from "./pages/login/login";
import CategoryPage from "./pages/client-page/categories";
import TestComponent from "./components/test/test";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-right"
  reverseOrder={false}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/category" element={<CategoryPage/>}/>
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/test" element={<TestComponent/>}/>
    
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
