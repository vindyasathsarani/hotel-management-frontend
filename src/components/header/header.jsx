import UserTag from "../userData/userdata.jsx";

function Header() {
  return (
    <header className="w-full bg-blue-500 flex h-[100px] relative items-center p-[10px]">
      <h1 className="text-white text-[30px]">Vinara Villa</h1>
      <UserTag
        imageLink="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
        name="Vindya Sathsarani"
      />
    </header>
  );
}

export default Header;
