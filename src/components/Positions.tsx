import React from "react";
type HorizondalPosition = "top" | "center" | "bottom";
type VerticalPosition = "left" | "center" | "right";
type positionProp = {
  position:
    | Exclude<`${HorizondalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};
function Positions(props: positionProp) {
  return <div>You are selected position is {props.position}</div>;
}

export default Positions;
