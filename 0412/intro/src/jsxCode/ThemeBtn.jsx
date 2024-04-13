import React from 'react'

export default function ThemeBtn(props) {
    const btnStyle = {
        width: "50%",
        height : "3em",
        margin: "0% 25% 10% 25%",
        borderRadius: "20px 20px 20px 20px",
        backgroundColor: props.textBG
    }

    return (
        <button onClick={props.func} style={btnStyle}>
            테마 변경
        </button>
    )
}
