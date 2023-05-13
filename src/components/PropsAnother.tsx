import React from "react";
import Message from "./Message";

function PropsAnother(props: React.ComponentProps<typeof Message>) {
  return (
    <div>
      {props.isLogged ? (
        <>{`You have ${props.count} unread ${props.text}`}</>
      ) : (
        "Login as guest"
      )}
    </div>
  );
}

export default PropsAnother;
