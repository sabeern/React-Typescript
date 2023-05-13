import React from "react";
type propsType<T> = {
  list: T[];
  click: (val: T) => void;
};
function ListComponent<T extends string | number>({
  list,
  click,
}: propsType<T>) {
  return (
    <div>
      {list.map((val, index) => {
        return (
          <button key={index} onClick={() => click(val)}>
            Click me
          </button>
        );
      })}
    </div>
  );
}

export default ListComponent;
