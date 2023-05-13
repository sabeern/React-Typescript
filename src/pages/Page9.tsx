import React, { useRef, useEffect } from "react";

function Page9() {
  const input = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    input.current.focus();
  }, []);
  return (
    <div>
      <input type="text" />
      <input type="text" ref={input} />
    </div>
  );
}

export default Page9;
