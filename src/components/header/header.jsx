import UserTag from "../userData/userdata.jsx";

function Header() {
  return (
    <header className="w-full bg-[#BDB395] flex justify-between items-center h-[100px] px-6 shadow-md">
      <h1 className="text-[#5C534B] text-[30px] font-bold">Lush Oasis Hotel</h1>
      <UserTag
        imageLink="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
        name="Vindya Sathsarani"
      />
    </header>
  );
}

export default Header;
