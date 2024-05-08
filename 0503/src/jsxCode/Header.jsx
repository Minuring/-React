import React from "react";
import Timer from "./Timer.jsx";
import useTheme from "../useTheme.jsx";
import { useContext } from "react";
import ThemeContext from "../ThemeContext.js";

function Header() {

    const { theme, toggleTheme } = useContext(ThemeContext)

    const style = {
            backgroundColor : theme.textBG,
            textAlign : "center",
            margin : "5% 5% 10% 5%",
            padding : "5px 5px 5px 5px",
            borderRadius : "20px 20px 20px 20px"
    };
    return (
        <div>
            <header style={style}>
                <h1>자기소개</h1>
                {/* <Timer color={props.color}/> */}
            </header>
        </div>
    )
}
export default Header;