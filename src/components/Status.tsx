import React from "react";
type propsType = { status: { data: "success" | "loading" | "error" } };
function Status(props: propsType) {
  let msg: string;
  if (props.status.data === "success") {
    msg = "Data successfully loaded";
  } else if (props.status.data === "loading") {
    msg = "Loading...";
  } else {
    msg = "Error on loading data";
  }
  return <div>{msg}</div>;
}

export default Status;
