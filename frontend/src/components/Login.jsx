import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../Url";

function Login() {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Trim user input to avoid leading/trailing spaces
    const trimmedUser = user.trim();
    const trimmedRoom = room.trim();

    if (trimmedUser === "" || trimmedRoom === "") {
      alert("Please enter both username and room");
      return;
    }

    try {
      const res = await axios.post(`${baseUrl}/join`, {
        name: trimmedUser,
        room: trimmedRoom,
      });
      console.log(res.data);
      if (res.data === "success") {
        console.log("Navigating to chat");
        navigate(`/chat?name=${trimmedUser}&room=${trimmedRoom}`);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert(
        "An error occurred while trying to join the chat. Please try again."
      );
    }
  };

  return (
    <div className="login flex flex-col gap-5 w-full max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-white text-center">
        Hey, Welcome to <span className="text-[#35FFEB]">GroupConnect</span>
      </h1>
      <p className="text-md text-gray-200 text-center">
        Enter your credentials to access your{" "}
        <span className="text-[#35FFEB] border-b">Chat Group</span>
      </p>

      <input
        placeholder="Enter the username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="border border-[#35FFEB] p-3 rounded-md bg-transparent placeholder:text-gray-200 outline-none text-white"
      />

      <input
        placeholder="Enter the group name"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        className="border border-[#35FFEB] p-3 rounded-md bg-transparent placeholder:text-gray-200 outline-none text-white"
      />

      <button
        onClick={handleRegister}
        className="bg-[#35FFEB] font-semibold text-lg capitalize p-2 rounded-md w-full hover:bg-[#2dd4c7] transition-colors"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
