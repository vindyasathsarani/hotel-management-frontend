import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./pages/admin-page/admin";
import HomePage from "./pages/client-page/homePage";
import LoginPage from "./pages/login/login";
import CategoryPage from "./pages/client-page/categories";
import TestComponent from "./components/test/test";
import { Toaster } from "react-hot-toast";

// Cloudinary Imports
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

function App() {
  // Cloudinary setup
  const cld = new Cloudinary({ cloud: { cloudName: "di0itwkur" } });

  // Sample image from Cloudinary
  const img = cld
    .image("cld-sample-5")
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(500).height(500));

  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/test" element={<TestComponent />} />
      </Routes>

      {/* Display a Cloudinary image */}
      <div className="flex justify-center p-4">
        <h2 className="text-center">Cloudinary Image</h2>
        <AdvancedImage cldImg={img} />
      </div>
    </BrowserRouter>
  );
}

export default App;
