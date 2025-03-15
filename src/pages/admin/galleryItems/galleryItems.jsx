import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function AdminGalleryItems() {
  const token = localStorage.getItem("token");

  if (token == null) {
    window.location.href = "/login";
  }

  const [galleryItems, setGalleryItems] = useState([]);
  const [galleryItemsIsLoaded, setGalleryItemsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!galleryItemsIsLoaded) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/gallery")
        .then((res) => {
          console.log("Fetched gallery items:", res.data);
          if (res.data && res.data.list) {
            setGalleryItems(res.data.list);
          } else {
            setGalleryItems([]);
          }
          setGalleryItemsLoaded(true);
        })
        .catch((err) => {
          console.error("Error fetching gallery items:", err);
          setGalleryItemsLoaded(true);
        });
    }
  }, [galleryItemsIsLoaded]);

  const handleDelete = (name) => {
    axios
      .delete(import.meta.env.VITE_BACKEND_URL + "/api/gallery/" + name, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setGalleryItemsLoaded(false);
        toast.success("Gallery item deleted successfully!");
      })
      .catch((err) => {
        toast.error("Error deleting gallery item!");
      });
    console.log("Delete gallery item:", name);
  };

  const handleEdit = (name) => {
    console.log("Edit gallery item:", name);
  };

  function handlePlusClick() {
    navigate("/admin/add-gallery-item");
  }

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold mb-4">Gallery Items</h2>
      <button
        className="bg-red-900 w-[60px] h-[60px] rounded-full text-2xl text-center flex justify-center items-center fixed bottom-5 right-5"
        onClick={() => {
          handlePlusClick();
        }}
      >
        <FaPlus color="white" />
      </button>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">#</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {galleryItems.length > 0 ? (
            galleryItems.map((item, index) => (
              <tr key={item._id || index} className="border">
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.description}</td>
                <td className="border p-2 text-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td className="border p-2 text-center">
                  <Link
                    className="text-blue-500 hover:text-blue-700 mx-2"
                    to={"/admin/add-gallery-item"}
                    state={item}
                  >
                    <FaEdit />
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-red-500 hover:text-red-700 mx-2"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="border p-2 text-center">
                No gallery items found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
