import React from "react";
import { useState,useEffect } from "react";

const RegisterPage = () => {

  const [userType,setUserType] = useState('Driver');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [contact,setContact] = useState('');
  const [gender,setGender] = useState('male');

  return (
    <div className="p-5">
      <div className="p-5 w-full md:w-150 m-auto shadow rounded-lg">
        <h1 className="text-center uppercase text-2xl mb-12 mt-5 font-semibold">
          Register User
        </h1>
        <form action="">
          <div className="flex flex-col mb-5">
            <label htmlFor="userType">User-Type: </label>
            <select
              name="userType"
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
              className="p-2 border border-teal-500 rounded-lg"
            >
              <option value="driver">Driver</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="enter username..."
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 border border-teal-500 rounded-lg"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="Password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-teal-500 rounded-lg"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="contact">Contact: </label>
            <input
              type="text"
              name="contact"
              id="contact"
              placeholder="enter contacts..."
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="p-2 border border-teal-500 rounded-lg"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="gender">Gender: </label>
            <select
              name="gender"
              id="gender"
              className="p-2 border border-teal-500 rounded-lg"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex flex-col mt-9 mb-4">
            <button
              type="submit"
              className="p-2 bg-teal-500 text-white hover:cursor-pointer hover:bg-teal-700"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
