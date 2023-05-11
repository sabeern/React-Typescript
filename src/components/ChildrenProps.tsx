import React from "react";
type propsType = { children: string };
function ChildrenProps(props: propsType) {
  return <div>{props.children}</div>;
}

export default ChildrenProps;
