import React from "react";
import InputForm from "../components/InputForm";

function Page3() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("button clicked" + e);
  };
  const value: string | number = "";
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //value = e.value;
    console.log(e);
  };
  return (
    <div>
      <h1>Onclick and Ochange events</h1>
      <InputForm
        handleClick={handleClick}
        handleChange={{ handleChange, value }}
        style={{ color: "white", background: "red" }}
      />
    </div>
  );
}

export default Page3;
