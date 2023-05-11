import React from "react";
type propsType = { personDetails: { firstName: string; lastName: string } };
function Person(props: propsType) {
  return (
    <div>
      {props.personDetails.firstName} {props.personDetails.lastName}
    </div>
  );
}

export default Person;
