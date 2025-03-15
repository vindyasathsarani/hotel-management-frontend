import { useState } from "react";
import uploadMedia from "../../../utils/cloudinaryUpload"; // Import Cloudinary upload function
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function UpdateCategoryForm() {
  const location = useLocation();
  const navigate = useNavigate()
  if (location.state === null) {
    window.location.href = "/admin/categories";
  }
  const [name, setName] = useState(location.state.name);
  const [price, setPrice] = useState(location.state.price);
  const [features, setFeatures] = useState(location.state.features.join(","));
  const [description, setDescription] = useState(location.state.description);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const featuresArray = features.split(",");
    console.log(featuresArray);

    const categoryInfo = {
      price: price,
      description: description,
      features: featuresArray,
      image: location.state.image,
    };

    axios
        .put(
          import.meta.env.VITE_BACKEND_URL + "/api/category/"+name,
          categoryInfo,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          toast.success("Category Updated Successfully!")
          navigate("/admin/categories")
        });
    if (!image) {
      alert("Please select an image.");
      return;
    }

    const imageUrl = await uploadMedia(image); // Upload to Cloudinary
    if (imageUrl) {
      console.log("Image URL:", imageUrl);
      // Here, you can send the imageUrl and form data to your backend
      const categoryInfo = {
        price: price,
        description: description,
        features: featuresArray,
        image: imageUrl,
      };
      axios
        .put(
          import.meta.env.VITE_BACKEND_URL + "/api/category/"+name,
          categoryInfo,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          toast.success("Category Updated Successfully!")
          navigate("/admin/categories")
        });
    } else {
      console.error("Image upload failed.");
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4">Add New Category</h2>

        <label className="block mb-2">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          required
          disabled
        />

        <label className="block mb-2">Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full border p-2 rounded mb-4"
          required
        />

        <label className="block mb-2">Features (comma-separated):</label>
        <input
          type="text"
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          required
        />

        <label className="block mb-2">Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border p-2 rounded mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 flex justify-center"
        >
          {isLoading ? (
            <div className="border-t-2 border-t-white w-[20px] min-h-[20px] rounded-full animate-spin"></div>
          ) : (
            <span>Update Category</span>
          )}
        </button>
      </form>
    </div>
  );
}
