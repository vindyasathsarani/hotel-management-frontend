import axios from "axios";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function UserTag(props) {

  const [name, setName] = useState("")
  const [userFound, setUserFound] = useState(false)
  
  const token = localStorage.getItem("token")


  useEffect(()=>{
    if(token != null){

      axios.get(import.meta.env.VITE_BACKEND_URL+"/api/users/",{
        headers : {
          Authorization : "Bearer " + token,
          "Content-Type" : "application/json",
        },
      }).then((res)=>{
        console.log(res);
        
        setName(res.data.user.firstName + " " + res.data.user.lastName);
        setUserFound(true)
        
      })
      
    }else{
      setName("")
    }
  },[userFound]);

  return (
    <div className="absolute right-0 flex items-center cursor-pointer mr-2">
      <img className="rounded-full w-[50px] h-[50px]" src={props.imageLink} alt="User" />
      <span className="text-white ml-[5px] text-xl">{name}</span>
      <button onClick={()=>{
        localStorage.removeItem("token")
        setUserFound(false)
        
      }}>
      Logout
      </button>
    </div>
  );
}

UserTag.propTypes = {
  imageLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserTag;

