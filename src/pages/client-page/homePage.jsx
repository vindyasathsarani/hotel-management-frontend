import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import { FaWifi, FaSwimmingPool, FaUtensils, FaSpa, FaCocktail, FaCar } from "react-icons/fa";

export default function HomePage() {
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [testimonials] = useState([
    {
      id: 1,
      name: "John Smith",
      comment: "The most luxurious stay I've ever experienced. The staff was incredibly attentive and the amenities were top-notch.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      comment: "Beautiful rooms with stunning views. The restaurant served delicious food and the spa treatments were amazing.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Michael Chen",
      comment: "Perfect location for both business and leisure. The conference facilities were excellent and the pool area was relaxing.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/68.jpg"
    }
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoryResponse = await axios.get(
          import.meta.env.VITE_BACKEND_URL + "/api/category"
        );
        
        if (categoryResponse.data && categoryResponse.data.categories) {
          setCategories(categoryResponse.data.categories);
        }
        
        // Fetch rooms (you might want to limit this to featured rooms only)
        const roomsResponse = await axios.get(
          import.meta.env.VITE_BACKEND_URL + "/api/rooms?featured=true"
        );
        
        if (roomsResponse.data && roomsResponse.data.rooms) {
          setFeaturedRooms(roomsResponse.data.rooms.slice(0, 3)); // Get first 3 rooms
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Welcome to Lush Oasis Hotel</h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">Experience luxury and comfort in the heart of paradise</p>
          <div className="flex gap-4">
            <Link to="/category" className="bg-[#BDB395] hover:bg-[#a59e83] text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Book Your Stay
            </Link>
            <Link to="/about" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#5C534B] text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#5C534B]">About Lush Oasis Hotel</h2>
            <p className="text-gray-600 mb-6">
              Nestled in the heart of paradise, Lush Oasis Hotel offers an unparalleled luxury experience. Our hotel combines elegant design, exceptional service, and world-class amenities to create unforgettable stays for our guests.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you're traveling for business or pleasure, our dedicated staff is committed to ensuring your comfort and satisfaction throughout your stay.
            </p>
            <Link to="/about" className="text-[#BDB395] hover:text-[#a59e83] font-semibold flex items-center">
              Learn more about us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Hotel Exterior" className="rounded-lg h-48 object-cover w-full" />
            <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Hotel Lobby" className="rounded-lg h-48 object-cover w-full" />
            <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Hotel Restaurant" className="rounded-lg h-48 object-cover w-full" />
            <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="Hotel Pool" className="rounded-lg h-48 object-cover w-full" />
          </div>
        </div>
      </section>
      
      {/* Amenities Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#5C534B]">Our Amenities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <FaWifi className="text-5xl text-[#BDB395] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free High-Speed WiFi</h3>
              <p className="text-gray-600">Stay connected with complimentary high-speed internet access throughout the hotel.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <FaSwimmingPool className="text-5xl text-[#BDB395] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Luxury Swimming Pool</h3>
              <p className="text-gray-600">Relax and unwind in our stunning infinity pool with panoramic views.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <FaUtensils className="text-5xl text-[#BDB395] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gourmet Restaurant</h3>
              <p className="text-gray-600">Enjoy exquisite dining experiences with our world-class chefs and premium ingredients.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <FaSpa className="text-5xl text-[#BDB395] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Luxury Spa</h3>
              <p className="text-gray-600">Indulge in rejuvenating treatments and massages at our premium spa facility.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <FaCocktail className="text-5xl text-[#BDB395] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rooftop Bar</h3>
              <p className="text-gray-600">Sip on handcrafted cocktails while enjoying breathtaking views from our rooftop bar.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <FaCar className="text-5xl text-[#BDB395] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Valet Parking</h3>
              <p className="text-gray-600">Enjoy the convenience of our professional valet parking service during your stay.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Rooms Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#5C534B]">Featured Rooms</h2>
        
        {isLoading ? (
          <div className="flex justify-center">
            <p>Loading featured rooms...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.length > 0 ? (
              featuredRooms.map((room) => (
                <div key={room._id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <img 
                    src={room.image || "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} 
                    alt={room.name} 
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                    <p className="text-gray-600 mb-4">{room.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-[#5C534B]">${room.price} / night</span>
                      <Link to={`/room/${room._id}`} className="bg-[#BDB395] hover:bg-[#a59e83] text-white py-2 px-4 rounded">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow">
                <p className="text-gray-500 mb-4">No featured rooms available at the moment.</p>
                <Link to="/category" className="bg-[#BDB395] hover:bg-[#a59e83] text-white py-2 px-4 rounded">
                  Browse All Rooms
                </Link>
              </div>
            )}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Link to="/category" className="bg-[#5C534B] hover:bg-[#4a4339] text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            View All Rooms
          </Link>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-[#f8f5f0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#5C534B]">What Our Guests Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-[#5C534B] rounded-lg p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-8 max-w-2xl mx-auto">Stay updated with our latest offers, promotions, and news. Subscribe to our newsletter for exclusive deals.</p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none text-gray-800"
              required
            />
            <button 
              type="submit" 
              className="bg-[#BDB395] hover:bg-[#a59e83] text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#5C534B] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Lush Oasis Hotel</h3>
            <p className="mb-4">Experience luxury and comfort in the heart of paradise.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#BDB395]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#BDB395]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#BDB395]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[#BDB395]">Home</Link></li>
              <li><Link to="/category" className="hover:text-[#BDB395]">Rooms</Link></li>
              <li><Link to="/about" className="hover:text-[#BDB395]">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#BDB395]">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">123 Paradise Street</p>
              <p className="mb-2">Tropical City, TC 12345</p>
              <p className="mb-2">Phone: (123) 456-7890</p>
              <p>Email: info@lushoasishotel.com</p>
            </address>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li>Check-in: 2:00 PM</li>
              <li>Check-out: 11:00 AM</li>
              <li>Front Desk: 24/7</li>
              <li>Restaurant: 6:30 AM - 10:30 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Lush Oasis Hotel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
