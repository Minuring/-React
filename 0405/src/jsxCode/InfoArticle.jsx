import React from 'react';


function InfoArticle(props) {
    const style = {
        textAlign : "center",
        fontSize : "1.2em",
        fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
    }
    return (
        <div style={style}>
            <p>{props.content}</p>
        </div>
    );
}

export default InfoArticle;