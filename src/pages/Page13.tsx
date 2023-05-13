import React from "react";
import Positions from "../components/Positions";
import PropsAnother from "../components/PropsAnother";

function Page13() {
  return (
    <div>
      <Positions position="top-center" />
      <PropsAnother isLogged count={15} text="unread"></PropsAnother>
    </div>
  );
}

export default Page13;
