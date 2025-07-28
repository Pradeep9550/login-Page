import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {

    const [form, setForm] = useState({email : "", password : ""})
    const navigate = useNavigate();

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit =async (e)=>{
        e.preventDefault();
        try {
            const {data} = await axios.post("http://localhost:3001/auth/login", form)
            if(data.success){
                console.log(data)
                localStorage.setItem("token", data.token);
                navigate("/profile")

            } else {
                console.log(data)
            }
        } catch (error) {
            console.log("sign in failed" , error)
        }
    }

    
  return (
    <div className="bg-gray-100">
  <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
    <div className="max-w-[480px] w-full ">
      
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
        <h1 className="text-slate-900 text-center text-3xl font-semibold">Sign in</h1>
        <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">Email</label>
            <div className="relative flex items-center">
              <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter user name" />
            </div>
          </div>
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
            <div className="relative flex items-center">
              <input name="password" type="password" value={form.password} onChange={handleChange} required className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter password" />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
           
            
          </div>
          <div className="!mt-12">
            <button type="submit" className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
              Sign in
            </button>
          </div>
          <p className="text-slate-900 text-sm !mt-6 text-center">Don't have an account? <a href="/signup" className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</a></p>
        </form>
      </div>
    </div>
  </div>
</div>



  )
}

export default Signin
