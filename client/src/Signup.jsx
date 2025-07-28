import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const navigate = useNavigate();

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit =async(e)=>{
        e.preventDefault();
        try {
            const {data} = await axios.post("http://localhost:3001/auth/signup", form);
            if(data.success){
                console.log(data)
                localStorage.setItem("token", data.token);
                navigate("/profile")
            } else {
                console.log(data)
            }
        } catch (error) {
            console.log("Signup failed",error)
        }
    }


  return (
    <div className="flex flex-col justify-center sm:h-screen p-4 bg-gray-100">
  <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8 bg-white shadow-md">
    <div className="text-center mb-12 text-2xl font-bold">
      <h1>Register Page</h1>
    </div>
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div>
          <label className="text-slate-900 text-sm font-medium mb-2 block">Name</label>
          <input name="name" type="text" value={form.name} onChange={handleChange} className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" required/>
        </div>
        <div>
          <label className="text-slate-900 text-sm font-medium mb-2 block">Email Id</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" required/>
        </div>
        <div>
          <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
          <input name="password" type="password" value={form.password} onChange={handleChange} className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" required/>
        </div>
        <div>
          <label className="text-slate-900 text-sm font-medium mb-2 block">Confirm Password</label>
          <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter confirm password" required/>
        </div>
       
      </div>
      <div className="mt-12">
        <button type="submit" className="w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
          Create an account
        </button>
      </div>
      <p className="text-slate-600 text-sm mt-6 text-center">Already have an account? <a href="/login" className="text-blue-600 font-medium hover:underline ml-1">Login here</a></p>
    </form>
  </div>
</div>




   
  )
}

export default Signup
