import Header from "../../components/header/header";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="w-full h-screen bg-[#D5C7A3] flex flex-col items-center justify-center">
        <div className="bg-[#F6F0F0] border border-[#BDB395] shadow-lg h-[120px] w-[700px] rounded-xl flex justify-between items-center px-6">
          <input
            type="date"
            className="p-2 border border-[#D5C7A3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F2E2B1]"
          />
          <input
            type="date"
            className="p-2 border border-[#D5C7A3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F2E2B1]"
          />
          <select className="p-2 border border-[#D5C7A3] bg-white text-[#5C534B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F2E2B1]">
            <option>Luxury</option>
            <option>Normal</option>
            <option>Low</option>
          </select>
          <button className="px-4 py-2 bg-white text-[#5C534B] font-semibold rounded-lg border border-[#D5C7A3] hover:bg-[#D5C7A3] transition">
            Book Now
          </button>
        </div>
        <h1 className="text-[#5C534B] text-[50px] font-bold mt-6 text-center">
          Welcome to the Lush Oasis Hotel
        </h1>
      </div>
    </>
  );
}
