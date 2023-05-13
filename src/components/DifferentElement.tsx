import React from "react";
type propsType = {
  size: "sm" | "md" | "lg";
  color?: string;
  children: React.ReactNode;
  as?: React.ElementType;
};
function DifferentElement(props: propsType) {
  const Component = props.as ?? "div";
  return (
    <Component className={`class-${props.size}-${props.color}`}>
      {props.children}
    </Component>
  );
}

export default DifferentElement;
