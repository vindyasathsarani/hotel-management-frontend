import { Link, Route, Routes } from "react-router-dom";
import { LuCalendarCheck } from "react-icons/lu"; // Line icon for Bookings
import { LuLayoutGrid } from "react-icons/lu"; // Line icon for Categories
import { LuBed } from "react-icons/lu"; // Line icon for Rooms
import { LuUsers } from "react-icons/lu"; // Line icon for Users
import { LuMessageSquare } from "react-icons/lu"; // Line icon for Feedbacks
import { LuImage } from "react-icons/lu"; // Line icon for GalleryItems
import AdminBooking from "../admin/Bookings/adminBooking";
import AdminCategories from "../admin/categories/adminCategories";
import AdminFeedback from "../admin/feedbacks/feedback";
import AdminGalleryItems from "../admin/galleryItems/galleryItems";
import AdminRooms from "../admin/rooms/rooms";
import AdminUsers from "../admin/users/users";
import AddCategoryForm from "../admin/AddCategoryForm/addcategoryForm";
import UpdateCategoryForm from "../admin/updateCategoryForm/updateCategoryForm";
import AddGalleryItemForm from "../admin/AddGalleryForm/addGalleyForm";

export default function AdminPage() {
  return (
    <div className="w-full max-h-[100vh] flex">
      {/* Sidebar */}
      <div className="w-[20%] bg-blue-400 h-[100vh] flex flex-col">
        {/* Bookings */}
        <div className="text-white text-[30px] hover:font-bold flex items-center px-4">
          <Link to="/admin/bookings" className="flex items-center gap-2">
            <LuCalendarCheck />
            Bookings
          </Link>
        </div>
        {/* Categories */}
        <div className="text-white text-[30px] hover:font-bold flex items-center px-4">
          <Link to="/admin/categories" className="flex items-center gap-2">
            <LuLayoutGrid />
            Categories
          </Link>
        </div>
        {/* Rooms */}
        <div className="text-white text-[30px] hover:font-bold flex items-center px-4">
          <Link to="/admin/rooms" className="flex items-center gap-2">
            <LuBed />
            Rooms
          </Link>
        </div>
        {/* Users */}
        <div className="text-white text-[30px] hover:font-bold flex items-center px-4">
          <Link to="/admin/users" className="flex items-center gap-2">
            <LuUsers />
            Users
          </Link>
        </div>
        {/* Feedbacks */}
        <div className="text-white text-[30px] hover:font-bold flex items-center px-4">
          <Link to="/admin/feedbacks" className="flex items-center gap-2">
            <LuMessageSquare />
            Feedbacks
          </Link>
        </div>
        {/* GalleryItems */}
        <div className="text-white text-[30px] hover:font-bold flex items-center px-4">
          <Link to="/admin/gallery" className="flex items-center gap-2">
            <LuImage />
            GalleryItems
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[80%] max-h-[100vh] overflow-y-scroll bg-blue-900">
        <Routes path="/*">
          <Route path="/bookings" element={<AdminBooking />} />
          <Route path="/categories" element={<AdminCategories />} />
          <Route path="/add-category" element={<AddCategoryForm/>}/>
          <Route path="/update-category" element={<UpdateCategoryForm/>}/>
          <Route path="/rooms" element={<AdminRooms />} />
          <Route path="/users" element={<AdminUsers />} />
          <Route path="/feedbacks" element={<AdminFeedback />} />
          <Route path="/gallery" element={<AdminGalleryItems />} />
          <Route path="/add-gallery-item" element={<AddGalleryItemForm/>}/>
        </Routes>
      </div>
    </div>
  );
}
