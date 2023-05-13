import React, { useState } from "react";

function Page5() {
  type authUser = {
    userName: string;
    userEmail: string;
  };
  //const [user, setUser] = useState<authUser>({} as authUser);
  const [user, setUser] = useState<authUser | null>(null);
  const loginHandler = () => {
    setUser({
      userName: "sabeer",
      userEmail: "sabeer@gmail.com",
    });
  };
  const logoutHandler = () => {
    setUser(null);
  };
  return (
    <>
      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
      <h1>Hello welcome {user?.userName}</h1>
    </>
  );
}

export default Page5;
