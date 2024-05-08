import React from "react";
import InfoBlock from "./InfoBlock";
import InfoArticle from "./InfoArticle";
import useTheme from "../useTheme";
import ThemeContext from "../ThemeContext";
import { useContext } from "react";

function Main() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const sectionStyle = {
        width : "100%",
        height : "80%",
        paddingTop : "5%",
        paddingBottom: "5%",
        backgroundColor: theme.blockBG,
        borderRadius : "20px 20px 20px 20px"
    };
    const texts = "유능한 개발자가 되고싶은 사람입니다 !";
    
    return (
        <section style={sectionStyle}>
            <InfoBlock />
            <InfoArticle content={texts}/>
        </section>
    )
}

export default Main;