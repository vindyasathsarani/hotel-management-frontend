import { useEffect, useState } from "react";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Sample Data (this would normally come from your backend)
    const sampleData = [
      {
        _id: "1",
        name: "Luxury Suite",
        price: 300,
        features: ["Ocean View", "King Size Bed", "Free Wi-Fi"],
        description: "A luxurious suite with breathtaking ocean views.",
        image: "https://example.com/images/luxury-suite.jpg",
      },
      {
        _id: "2",
        name: "Standard Room",
        price: 120,
        features: ["City View", "Queen Size Bed", "Free Wi-Fi"],
        description: "A comfortable room with a city view.",
        image: "https://example.com/images/standard-room.jpg",
      },
      {
        _id: "3",
        name: "Budget Room",
        price: 60,
        features: ["Street View", "Single Bed", "No Wi-Fi"],
        description: "An affordable room for budget-conscious travelers.",
        image: "https://example.com/images/budget-room.jpg",
      },
    ];

    // Setting sample data to categories state
    setCategories(sampleData);
  }, []);

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
