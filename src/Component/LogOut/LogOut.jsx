import React from "react";
import { useAuthContext } from "../../context/AuthContext";

export default function LogOut() {
  const { setUser, setToken } = useAuthContext();

  const signOut = () => {
    setUser(null);
    setToken(null);
  };
  return (
    <>
      <button onClick={signOut} className="bg-gray-200 px-4 py-2 hover:bg-gray-100">
        Logout
      </button>
    </>
  );
}
