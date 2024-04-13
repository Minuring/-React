import logo from './logo.svg';
import './App.css';
import Header from "./jsxCode/Header.jsx"
import Main from "./jsxCode/Main.jsx"
import { useState } from "react";
import ThemeBtn from './jsxCode/ThemeBtn.jsx';

function App() {

  const THEME = {
    BLUE : {
      id : 1,
      blockBG : "aliceblue",
      textBG: "skyblue"
    },
    GRAY : {
      id : 2,
      blockBG : "whitesmoke",
      textBG : "indianred"
    }
  }

  const [themeColor, setThemeColor] = useState(THEME.BLUE);

  const bodyStyle = {
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    fontSize: "large"
  };
  
  const changeTheme = () => {
    setThemeColor(themeColor.id == THEME.BLUE.id ? THEME.GRAY : THEME.BLUE);
    console.log(themeColor);
  };

  return (
    <div style={bodyStyle}>
      <Header color={themeColor}/>
      <ThemeBtn color={themeColor} func={changeTheme} />
      <Main color={themeColor} />
    </div>
  );
}

export default App;
