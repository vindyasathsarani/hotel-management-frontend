import "./login.css";

export default function LoginPage() {
  return (
    <div className="w-full h-[100vh] bg-blue-600 pic-bg flex justify-center items-center">
      <div className="w-[400px] h-[400px] backdrop-blur-md rounded-lg flex flex-col items-center">
        <h1 className="text-3xl p-[15px] text-center text-white">Login</h1>
        <input placeholder="Enter your email address" className="w-[80%] bg-[#00000000] border=[2px] text-white placeholder:text-white h-[50px] px-[5px]" />
      </div>
    </div>
  );
}
