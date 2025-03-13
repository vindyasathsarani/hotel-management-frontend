import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import {useNavigate} from "react-router-dom"

export default function AdminCategories() {

  const token = localStorage.getItem("token");

    if(token == null){
      window.location.href = "/login"
    }
 

  const [categories, setCategories] = useState([]);
  const [categoriesIsLoaded, setCategoriesLoaded] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    if (!categoriesIsLoaded) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/category")
        .then((res) => {
          console.log("Fetched categories:", res.data);
          if (res.data && res.data.categories) {
            setCategories(res.data.categories);
          } else {
            setCategories([]);
          }
          setCategoriesLoaded(true);
        })
        .catch((err) => {
          console.error("Error fetching categories:", err);
          setCategoriesLoaded(true);
        });
    }
  }, [categoriesIsLoaded]);

  const handleDelete = (name) => {
    axios.delete(import.meta.env.VITE_BACKEND_URL+"/api/category/" +name,{
      headers:{
        Authorization:"Bearer" + token
      }
    }).then((res)=>{
      setCategoriesLoaded(false)
      toast.success("Category deleted successfully!")
    }).catch((err)=>{
      toast.error("Error deleting category!")
      
    })
    console.log("Delete category:", name);
    
  };

  const handleEdit = (name) => {
    console.log("Edit category:", name);
 
  };

  function handlePlusClick(){
    navigate("/admin/add-category")
    
  }

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <button className="bg-red-900 w-[60px] h-[60px] rounded-full text-2xl text-center flex justify-center items-center fixed bottom-5 right-5" onClick={()=>{
        handlePlusClick()
      }}>
        <FaPlus color="white"/></button>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">#</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Features</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <tr key={category._id || index} className="border">
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2">{category.name}</td>
                <td className="border p-2 text-center">${category.price}</td>
                <td className="border p-2">{category.features?.join(", ") || "N/A"}</td>
                <td className="border p-2">{category.description}</td>
                <td className="border p-2 text-center">
                  {category.image ? (
                    <img src={category.image} alt={category.name} className="w-16 h-16 object-cover" />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => handleEdit(category.name)}
                    className="text-blue-500 hover:text-blue-700 mx-2"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(category.name)}
                    className="text-red-500 hover:text-red-700 mx-2"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="border p-2 text-center">No categories found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
