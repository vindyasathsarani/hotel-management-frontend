import { Link, Route, Routes } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import { MdOutlineCategory } from "react-icons/md";
import { FaHotel } from "react-icons/fa"; // Icon for Rooms
import { FaUsers } from "react-icons/fa"; // Icon for Users
import { MdFeedback } from "react-icons/md"; // Icon for Feedbacks
import { IoMdImages } from "react-icons/io"; // Icon for GalleryItems
import AdminBooking from "../admin/Bookings/adminBooking";
import AdminCategories from "../admin/categories/adminCategories";
import AdminFeedback from "../admin/feedbacks/feedback";
import AdminGalleryItems from "../admin/galleryItems/galleryItems";
import AdminRooms from "../admin/rooms/rooms";
import AdminUsers from "../admin/users/users";

export default function AdminPage() {
  return (
    <div className="w-full max-h-[100vh] flex">
      {/* Sidebar */}
      <div className="w-[20%] bg-blue-400 h-[100vh] flex flex-col">
        {/* Bookings */}
        <div className="text-white text-[30px] hover:font-bold flex items-center px-4">
          <Link to="/admin/bookings" className="flex items-center gap-2">
            <CiBookmarkCheck />
            Bookings
          </Link>
        </div>
        {/* Categories */}
        <div className="text-white text-[30px] hover:font-bold flex items-center px-4">
          <Link to="/admin/categories" className="flex items-center gap-2">
            <MdOutlineCategory />
            Categories
          </Link>
        </div>
        {/* Rooms */}
        <div className="text-white text-[30px] hover:font-bold flex items-center px-4">
          <Link to="/admin/rooms" className="flex items-center gap-2">
            <FaHotel />
            Rooms
          </Link>
        </div>
        {/* Users */}
        <div className="text-white text-[30px] hover:font-bold flex items-center px-4">
          <Link to="/admin/users" className="flex items-center gap-2">
            <FaUsers />
            Users
          </Link>
        </div>
        {/* Feedbacks */}
        <div className="text-white text-[30px] hover:font-bold flex items-center px-4">
          <Link to="/admin/feedbacks" className="flex items-center gap-2">
            <MdFeedback />
            Feedbacks
          </Link>
        </div>
        {/* GalleryItems */}
        <div className="text-white text-[30px] hover:font-bold flex items-center px-4">
          <Link to="/admin/gallery" className="flex items-center gap-2">
            <IoMdImages />
            GalleryItems
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[80%] max-h-[100vh] overflow-y-scroll bg-blue-900">
        <Routes path="/*">
          <Route path="/bookings" element={<AdminBooking />} />
          <Route path="/categories" element={<AdminCategories />} />
          <Route path="/rooms" element={<AdminRooms />} />
          <Route path="/users" element={<AdminUsers />} />
          <Route path="/feedbacks" element={<AdminFeedback />} />
          <Route path="/gallery" element={<AdminGalleryItems />} />
        </Routes>
      </div>
    </div>
  );
}
