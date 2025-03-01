import { useState } from "react";
import "./login.css";

export default function LoginPage() {
    const [email, setEmail] = useState()
    const [ password, setPassword] = useState()

    function handleLogin (){
        console.log(email,password)
    }
  return (
    <div className="w-full h-[100vh] bg-blue-600 pic-bg flex justify-center items-center">
      <div className="w-[400px] h-[450px] backdrop-blur-md bg-white/10 rounded-lg flex flex-col items-center shadow-lg p-6">
        <h1 className="text-3xl p-3 text-center text-white font-semibold">Login</h1>

        <input
          type="text"
          placeholder="Enter your email address"
          className="w-[80%] bg-transparent border-2 border-white text-white placeholder-white h-[50px] px-4 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        defaultValue={email} onChange={
            (e)=>{
                setEmail(e.target.value)
            }
        }/>

        <input
          type="password"
          placeholder="Enter your password"
          className="w-[80%] bg-transparent border-2 border-white text-white placeholder-white h-[50px] px-4 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        defaultValue={password} onChange={
            (e)=>{
                setPassword(e.target.value)
            }
        }/>

        <button className="w-[80%] bg-red-500 hover:bg-red-700 text-white h-[50px] rounded-lg font-semibold transition duration-300" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
