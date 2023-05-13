import React from "react";
import Login from "../components/Login";
import { nameType } from "../components/Dashboard";
type componentProps = {
  isLogged: boolean;
  component: React.ComponentType<nameType>;
};
function Page10({ isLogged, component: Component }: componentProps) {
  if (isLogged) return <Component name={"sabeer"} />;
  else return <Login />;
}

export default Page10;
