import { useState } from "react";
import uploadMedia from "../../../utils/cloudinaryUpload"; // Import Cloudinary upload function
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddGalleryItemForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

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

    if (!image) {
      alert("Please select an image.");
      return;
    }

    const imageUrl = await uploadMedia(image); // Upload to Cloudinary
    if (imageUrl) {
      console.log("Image URL:", imageUrl);

      // Prepare gallery item data
      const galleryItemInfo = {
        name: name,
        description: description,
        image: imageUrl,
      };

      // Send gallery item info to the backend
      axios
        .post(
          import.meta.env.VITE_BACKEND_URL + "/api/gallery",
          galleryItemInfo,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          navigate("/admin/gallery")
          
        })
        .catch((err) => {
          console.error("Error creating gallery item:", err);
          setIsLoading(false);
        });
    } else {
      console.error("Image upload failed.");
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4">Add New Gallery Item</h2>

        <label className="block mb-2">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          required
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
            <span>Add Gallery Item</span>
          )}
        </button>
      </form>
    </div>
  );
}
