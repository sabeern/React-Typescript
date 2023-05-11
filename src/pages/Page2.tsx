import React from "react";
import Status from "../components/Status";
import ChildrenProps from "../components/ChildrenProps";

function Page2() {
  return (
    <div>
      <Status status={{ data: "success" }} />
      <ChildrenProps>Hello I am a children props</ChildrenProps>
    </div>
  );
}

export default Page2;
