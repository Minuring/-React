import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

function InfoArticle(props) {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const blockStyle = {
        width : "70%",
        height : "10em",
        backgroundColor : theme.textBG,
        marginTop : "10%",
        marginLeft : "10%",
        marginRight : "10%",
        borderRadius : "20px 20px 20px 20px",
        padding : "5% 5% 5% 5%"
    }
    const fontStyle = {
        textAlign : "center",
        fontSize : "1.2em",
        fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
    }
    return (
        <div style={blockStyle}>
            <p style={fontStyle}>{props.content}</p>
        </div>
    );
}

export default InfoArticle;