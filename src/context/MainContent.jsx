import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { Clock } from "components/soaple_lecture/clock/Clock";

function MainContent(props) {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return(
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "1.5rem",
        backgroundColor: theme==="light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <p>테마변경</p>
      <button onClick={toggleTheme}>테마 변경</button>
      <children>
        {/* <Clock></Clock> */}
      </children>
    </div>
  )
}

export default MainContent