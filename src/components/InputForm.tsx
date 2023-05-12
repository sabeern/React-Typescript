import React from "react";
import { buttonProps } from "./form.type";
function InputForm({ handleClick, handleChange, style }: buttonProps) {
  return (
    <div>
      <input type="text" onChange={handleChange.handleChange} />
      <button onClick={(e) => handleClick(e)} style={style}>
        Click me
      </button>
    </div>
  );
}

export default InputForm;
