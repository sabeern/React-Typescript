import React from "react";
import Message from "../components/Message";
import Person from "../components/Person";
import PersonList from "../components/PersonList";

function Page1() {
  const personDetails = { firstName: "Sabeer", lastName: "Neyyan" };
  const personList = [
    { firstName: "anees", lastName: "t" },
    { firstName: "sabeer", lastName: "n" },
    { firstName: "sawaf", lastName: "p" },
  ];
  return (
    <>
      <Message text="messages" count={10} isLogged={false} />
      <Person personDetails={personDetails} />
      <PersonList person={personList} />
    </>
  );
}

export default Page1;
