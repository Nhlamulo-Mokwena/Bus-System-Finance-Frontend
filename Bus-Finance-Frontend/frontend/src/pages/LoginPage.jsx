import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeColor, setActiveColor] = useState("bg-teal-900");
  const [inActiveColor, setInActiveColor] = useState("bg-teal-500");
  const [user, setUser] = useState("driver");
  const [fetchUser, setFetchUser] = useState({});

  const navigate = useNavigate();

  const changeUserState = () => {
    setIsAdmin(!isAdmin);

    if (isAdmin === true) {
      setInActiveColor("bg-teal-900");
      setActiveColor("bg-teal-500");
      setUser("admin");
    } else {
      setActiveColor("bg-teal-900");
      setInActiveColor("bg-teal-500");
      setUser("driver");
    }
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.get(
        `http://localhost:8080/security/user/${username}`,
      );

      if (response.status === 200) {
        setFetchUser(response.data);

        if (user === response.data.userType) {
          try {
            const res = await axios.post(
              "http://localhost:8080/security/login",
              data,
            );
            const token = res.data;
            localStorage.setItem("JwtToken", token);

            toast.success("Login Successful!");
            setUsername("");
            setPassword("");

            if (response.data.userType === "driver") {
              navigate("/driver");
            } else {
              navigate("/admin");
            }
          } catch (error) {
            console.log(error, "invalid login credentials");
            setUsername("");
            setPassword("");
            toast.error("invalid credentials!");
          }
        } else {
          toast.error(`${user} Account not found!`);
          console.log(`${user} Account not found!`);
        }
      } else {
        toast.error("User Account Not Found!");
        console.log("user account not found!");
      }
    } catch (error) {
      console.log("Account not found!");
      toast.error("Account not found!");
    }
  };

  return (
    <div className="p-5 flex justify-center items-center">
      <div className="w-full m-auto p-5 shadow rounded-lg md:w-150">
        <h1 className="text-center uppercase font-semibold text-2xl mb-9 mt-4">
          Login Form
        </h1>
        <div className="grid grid-cols-2 mb-5">
          <button
            type="button"
            onClick={changeUserState}
            className={`${activeColor} text-white p-2`}
          >
            Driver
          </button>
          <button
            type="button"
            className={`${inActiveColor} text-white p-2`}
            onClick={changeUserState}
          >
            Admin
          </button>
        </div>
        <form onSubmit={submitForm}>
          <div className="flex flex-col mb-5">
            <label htmlFor="username">{user} Username: </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="enter username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 border-2 rounded-lg border-teal-500"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="username">{user} Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border-2 rounded-lg border-teal-500"
            />
          </div>
          <div className="flex flex-col mt-7">
            <button
              type="submit"
              className="p-2 text-center bg-teal-500 text-white rounded-lg shadow"
            >
              Login {user}
            </button>
          </div>
          <div className="flex items-center justify-center flex-row mt-6 space-x-2">
            <span className="uppercase">No Account?</span>
            <Link
              className="uppercase text-teal-500 hover:text-teal-900"
              to={"/register"}
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
