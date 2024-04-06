# 📖 컴포넌트 활용
> 웹사이트를 5개 이상의 컴포넌트로 구성하기<br>
> 2개 이상의 props를 전달하는 컴포넌트를 하나 이상 포함하기

<hr> 

- [**링크** (Github Pages)](https://minuring.github.io/React/0405/build)
<br>

- ## 컴포넌트

  ### App.js <br>
  [`Header`](#headerjs) 컴포넌트와 [`Main`](#mainjs) 컴포넌트로 구성

  ### Header.js <br>
  페이지 상단 헤더부분 컴포넌트<br>
  [`dpTime`](#dptimejs) 컴포넌트 포함

  ### dpTime.js <br>
  접속 시간을 반환하는 컴포넌트

  ### Main.js <br>
  큰 `article` 태그 안에 이미지, 내용, 소개말 div 블럭을 배치하고 각각 스타일 적용<br>
  소개의 한 단위로, 컴포넌트 각각을 조합(배치, 위치, 스타일 등 선정하여 하나의 소개 컴포넌트 단위로)하는 컴포넌트로 이용<br>
  - `InfoImg` 컴포넌트(props : src) ex) 프로필 사진
  - `InfoMsg` 컴포넌트(props : name, content) ex) 이름 : 이민우
  - `InfoArticle` 컴포넌트(props : text) ex) 자기소개 텍스트입니다!


- ## 정리

<pre>
리액트는 입력(<b>props</b>)를 받아 출력(<b>Element</b>)하는 리액트 컴포넌트 기반 구조로 되어있다.
모든 페이지가 이러한 컴포넌트로 구성되고, 컴포넌트들을 조립하여 UI를 완성한다. 

React Component는 Class Component, Function Component로 나뉜다.

Component는 항상 대문자로 시작(소문자는 DOM태그로 인식)

<b>Props</b> : 상위 컴포넌트가 하위 컴포넌트에게 값 전달, 읽기전용
React의 propTypes, defaultProps로 타입정의, 기본값 설정 가능
</pre>