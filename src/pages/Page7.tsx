import React, { useContext, useState } from "react";
import { ThemeContext } from "../store/ThemeContext";
type themeType = { color: string; background: string };
function Page7() {
  const theme = useContext(ThemeContext);
  const [dark, setDark] = useState<themeType>({} as themeType);
  const changeLight = () => {
    setDark({
      color: theme.primary.color,
      background: theme.primary.background,
    });
  };
  const changeDark = () => {
    setDark({
      color: theme.secondary.color,
      background: theme.secondary.background,
    });
  };
  return (
    <>
      <button onClick={changeLight}>Change Light</button>
      <button onClick={changeDark}>Change Dark</button>
      <div style={dark}>Page7</div>
    </>
  );
}

export default Page7;
