import React from "react";
import Info from "./Info";

function InfoContents(props) {
    return (
        <article>
            <img className="profileImage" src="img/me.jpeg" alt="프로필 사진"></img>
            <Info name="이름" content="이민우"></Info>
            <Info name="학과" content="소프트웨어학과"></Info>
            <Info name="학번" content="2020875038"></Info>
            <Info name="나이" content="24세"></Info>
            <Info name="생일" content="2001년 11월 22일"></Info>
            <Info name="취미" content="운동, PC게임"></Info>
        </article>
    )
}

export default InfoContents;