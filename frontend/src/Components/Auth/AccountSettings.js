import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../index";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AccountSettings() {
  const { user } = useContext(Context);
  const [userData, setUserData] = useState(null);
  const { isAuthorized, setIsAuthorized } = useContext(Context);
  const navigateTo = useNavigate();
  
  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) 
    {
      toast.error(error.response.data.message)
      setIsAuthorized(true);
    }
  };
  useEffect(() => {
    if (user) {
      // Fetch user details from the backend using user ID or any other identifier
      axios.get(`http://localhost:4000/api/v1/user/myaccount`)
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [user]);
  return (
      <section className="jobDetail page">
    <div className="container">  
      <h2>Account Settings</h2>
      <div className="banner">

      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
      <p>Phone: {user.phone}</p>
      <p>id:{user._id}</p>
      <p>Created At: {new Date(user.createdAt).toLocaleString()}</p>
      <button onClick={handleLogout} style={{width:"100px",height:"50px",backgroundColor:"green",cursor:"pointer"}}>LOGOUT</button>:""
      </div>
    </div>
   
      </section>
  );
}
export default AccountSettings;
