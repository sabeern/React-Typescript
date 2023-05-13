import React, { useState } from "react";

function Page4() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };
  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h4>You are {loggedIn ? "loged in" : "loged out"}</h4>
    </>
  );
}

export default Page4;
