import React, { useContext } from "react";
import { UserContext } from "../store/UserContext";

function Page8() {
  const user = useContext(UserContext);
  const handleLogin = () => {
    user.setUser({ userName: "sabeer", userEmail: "sabeer@gmail.com" });
  };
  const handleLogout = () => {
    user.setUser({ userName: "", userEmail: "" });
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>Your user name is {user.user.userName}</p>
      <p>Your email is {user.user.userEmail}</p>
    </div>
  );
}

export default Page8;
