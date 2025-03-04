import axios from "axios";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [categoriesIsLoaded, setcategoriesIsLoaded] = useState(false)

  useEffect(() => {
    if(!categoriesIsLoaded){
      axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/category")
      .then((res) => {
        setCategories(res.data.categories);
        setcategoriesIsLoaded(true)
      });
    }

  }, [categoriesIsLoaded]);
  function deleteItem(name) {
    alert("Deleting category with name: " + name);
    axios
      .delete(import.meta.env.VITE_BACKEND_URL + "/api/category/" + name)
      .then((res) => {
        setcategoriesIsLoaded(false)
      });
  }

  return (
    <div className="w-full min-h-screen bg-[#F6F0F0] py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center text-[#5C534B] mb-6">
          Categories
        </h1>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-[#D5C7A3] text-white">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-left">Features</th>
                <th className="px-6 py-3 text-left">Description</th>
                <th className="px-6 py-3 text-left">Image</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.length > 0 ? (
                categories.map((category) => (
                  <tr key={category._id} className="border-b">
                    <td className="px-6 py-4">{category.name}</td>
                    <td className="px-6 py-4">${category.price}</td>
                    <td className="px-6 py-4">
                      <ul>
                        {category.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4">{category.description}</td>
                    <td className="px-6 py-4">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </td>
                    <td className="px-6 py-4">
                      {/* Added delete button */}
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                        onClick={() => {
                          deleteItem(category.name);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-[#5C534B]">
                    No categories available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
