import React from "react";
export type nameType = {
  name: string;
};
function Dashboard({ name }: nameType) {
  return <div>Hello welcome {name}</div>;
}

export default Dashboard;
