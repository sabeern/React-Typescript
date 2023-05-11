import Message from "./components/Message";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
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

export default App;
