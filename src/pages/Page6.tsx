import React, { useReducer } from "react";
type stateType = {
  count: number;
};
type IncDecType = {
  type: "increment" | "decrement";
  value: number;
};
type resetType = {
  type: "reset";
};
type actionType = IncDecType | resetType;
function reducer(state: stateType, action: actionType) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.value };
    case "decrement":
      if (state.count != 0) {
        return { count: state.count - action.value };
      } else return { count: 0 };
    default:
      return { count: 0 };
  }
}
function Page6() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const increment = () => {
    dispatch({ type: "increment", value: 2 });
  };
  const decrement = () => {
    dispatch({ type: "decrement", value: 2 });
  };
  const reset = () => {
    dispatch({ type: "reset" });
  };
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>{state.count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Page6;
