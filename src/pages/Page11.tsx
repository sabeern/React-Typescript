import React from "react";
import ListComponent from "../components/ListComponent";

function Page11() {
  return (
    <div>
      <ListComponent
        list={["apple", "orange", "mango"]}
        click={(item) => console.log(item)}
      ></ListComponent>
      <ListComponent
        list={[1, 2, 3, 4]}
        click={(item) => console.log(item)}
      ></ListComponent>
    </div>
  );
}

export default Page11;
