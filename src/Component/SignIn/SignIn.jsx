import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center">
        <button onClick={() => navigate("/login")} className="bg-gray-200 px-4 py-2 hover:bg-gray-100">
          Login
        </button>
      </div>
    </>
  );
}
