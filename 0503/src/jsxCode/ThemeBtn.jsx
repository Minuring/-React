import React from 'react'
import ThemeContext from '../ThemeContext';
import { useContext } from 'react';

export default function ThemeBtn() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const btnStyle = {
        width: "50%",
        height : "3em",
        margin: "0% 25% 10% 25%",
        borderRadius: "20px 20px 20px 20px",
        backgroundColor: theme.textBG
    }

    return (
        <button onClick={toggleTheme} style={btnStyle}>
            테마 변경
        </button>
    )
}
