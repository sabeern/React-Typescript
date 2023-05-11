import React from "react";
type propsType = { person: { firstName: string; lastName: string }[] };
function PersonList(props: propsType) {
  return (
    <div>
      {props.person.map((val) => {
        return (
          <p>
            {val.firstName} {val.lastName}
          </p>
        );
      })}
    </div>
  );
}

export default PersonList;
