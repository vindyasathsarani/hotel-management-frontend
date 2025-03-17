import Header from "../../components/header/header";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-[#D5C7A3] flex flex-col items-center px-4 py-6">
        
        {/* Title */}
        <h1 className="text-[#5C534B] text-3xl md:text-5xl font-bold mt-1 text-center">
          Welcome to Vinara Hotel & Resort
        </h1>

        {/* Search Bar Container */}
        <div className="bg-[#F6F0F0] border border-[#BDB395] shadow-lg w-full max-w-lg rounded-xl p-3 flex flex-col sm:flex-row sm:justify-between items-center space-y-2 sm:space-y-0 sm:space-x-2 mt-3">
          <input
            type="date"
            className="w-11/12 sm:w-auto p-2 border border-[#D5C7A3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F2E2B1]"
          />
          <input
            type="date"
            className="w-11/12 sm:w-auto p-2 border border-[#D5C7A3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F2E2B1]"
          />
          <select className="w-11/12 sm:w-auto p-2 border border-[#D5C7A3] bg-white text-[#5C534B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F2E2B1]">
            <option>Luxury</option>
            <option>Normal</option>
            <option>Low</option>
          </select>
          <button className="w-11/12 sm:w-auto px-4 py-2 bg-white text-[#5C534B] font-semibold rounded-lg border border-[#D5C7A3] hover:bg-[#D5C7A3] transition">
            Book Now
          </button>
        </div>

      </div>
    </>
  );
}
