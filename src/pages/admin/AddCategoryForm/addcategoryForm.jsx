import { useState } from "react";
import uploadMedia from "../../../utils/cloudinaryUpload"; // Import Cloudinary upload function
import axios from "axios";

export default function AddCategoryForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [features, setFeatures] = useState("");
  const [description, setDescription] = useState("");
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
    isLoading(true)
    const featuresArray = features.split(",");
    console.log(featuresArray);

    if (!image) {
      alert("Please select an image.");
      return;
    }

    const imageUrl = await uploadMedia(image); // Upload to Cloudinary
    if (imageUrl) {
      console.log("Image URL:", imageUrl);
      // Here, you can send the imageUrl and form data to your backend
      const categoryInfo = {
        name: name,
        price: price,
        description: description,
        features: featuresArray,
        image: imageUrl,
      };
      axios
        .post(
          import.meta.env.VITE_BACKEND_URL + "/api/category",
          categoryInfo,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          console.log(res);
          setIsLoading(false)
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
            <span>Add Category</span>
          )}
        </button>
      </form>
    </div>
  );
}
