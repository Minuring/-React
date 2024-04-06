import React from "react";
import Info from "./InfoMsg";
import InfoImg from "./InfoImg";
import InfoArticle from "./InfoArticle";

function Main() {
    const articleStyle = {
        width : "100%",
        height : "80%",
        paddingTop : "5%",
        paddingBottom: "5%",
        backgroundColor: "aliceblue",
        borderRadius : "20px 20px 20px 20px"
    };
    const imgBlockStyle = {
        height : "100%",
        display: "inline-block",
        marginLeft : "10%",
        marginRight : "5%",
        width: "30%"
    }
    const infoBlockStyle = {
        height : "100%",
        position : "absolute",
        display: "inline-block",
        width : "50%"
    }
    const textBlockStyle = {
        width : "70%",
        height : "10em",
        backgroundColor : "skyblue",
        marginTop : "3%",
        marginLeft : "10%",
        marginRight : "10%",
        borderRadius : "20px 20px 20px 20px",
        padding : "5% 5% 5% 5%"
    }
    const texts = "유능한 개발자가 되고싶은 사람입니다 !";
    return (
        <article style={articleStyle}>
            <div style={imgBlockStyle}>
                <InfoImg src="me.jpeg" />
            </div>
            <div className="infos" style={infoBlockStyle}>
                <Info name="이름" content="이민우"></Info>
                <Info name="학과" content="소프트웨어학과"></Info>
                <Info name="학번" content="2020875038"></Info>
                <Info name="나이" content="24세"></Info>
                <Info name="생일" content="2001년 11월 22일"></Info>
                <Info name="취미" content="운동, PC게임"></Info>
            </div>
            <div className="infoText" style={textBlockStyle}>
                <InfoArticle content={texts}/>
            </div>
        </article>
    )
}

export default Main;