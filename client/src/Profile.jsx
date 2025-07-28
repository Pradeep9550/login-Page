import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const Profile = () => {

    const [user ,setUser] = useState(null)
    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token) return navigate("/login");

        axios.get('http://localhost:3001/profile', {headers: {Authorization: `${token}`}})
        .then(res => {
            // console.log(res)
            if(res.data.success) setUser(res.data.user)
            else throw new Error();
        })
        .catch(()=>{
            localStorage.removeItem("token");
            navigate("/login")
        })

    },[]);

    const logOut = ()=>{
        localStorage.removeItem("token")
        navigate("/login")
    }

    if (!user) {
    return <p>Loading...</p>;
  }
  return (
    <div>

      <h2>Welcome {user.name}</h2>
      <p>Email : {user.email}</p>

      <button onClick={logOut} className="w-1/5 py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
        Log Out
      </button>
    </div>
  )
}

export default Profile
















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Profile() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(function () {
//     // Token localStorage से निकालना
//     const token = localStorage.getItem("token");

//     // अगर token नहीं है, तो user को signin पेज पर भेज दो
//     if (!token) {
//       navigate("/signin");
//       return;
//     }

//     // Server से user की जानकारी मांगना
//     axios
//       .get("/profile", {
//         headers: {
//           Authorization: token  // सिर्फ raw token भेज रहे हैं, बिना Bearer के
//         }
//       })
//       .then(function (response) {
//         if (response.data.success) {
//           setUser(response.data.user);  // user की जानकारी सेट करना
//         } else {
//           throw new Error("Failed to fetch user");
//         }
//       })
//       .catch(function (error) {
//         // अगर कुछ गलत हो जाए तो token हटाओ और signin पर redirect करो
//         localStorage.removeItem("token");
//         navigate("/signin");
//       });
//   }, []);

//   // Logout बटन पर क्लिक करने पर token हटाना और redirect करना
//   function logout() {
//     localStorage.removeItem("token");
//     navigate("/signin");
//   }

//   // जब तक user की जानकारी नहीं आती, "Loading..." दिखाना
//   if (user === null) {
//     return <p>Loading...</p>;
//   }

//   // user की जानकारी दिखाना
//   return (
//     <div>
//       <h2>Welcome, {user.name}</h2>
//       <p>Email: {user.email}</p>
//       <button onClick={logout}>Log Out</button>
//     </div>
//   );
// }

// export default Profile;
