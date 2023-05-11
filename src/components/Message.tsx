import React from "react";
type propsType = { text: string; count: number; isLogged: boolean };
function Message(props: propsType) {
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

export default Message;
