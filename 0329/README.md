# 📖 간단한 자기소개 웹 페이지 만들기
- [**링크**](https://minuring.github.io/React/0329/intro_normal/index.html) : JSX, 리액트를 사용하지 않고 만든 자기소개 페이지

<br><br>



# 📖 JSX로 웹 페이지 만들기
- [**링크** (Github Pages)](https://minuring.github.io/React/0329/build)
<br>

- **컴포넌트 vs 엘리먼트**<br>
  `App.js`와 같은 **컴포넌트**는 `props`라고 하는 임의의 입력을 받아 **React Element**를 리턴한다.
  <br>


- **JSX로 작성한 React 컴포넌트**<br>

  ✏️ Header<br>
  header 태그를 리턴하며, header태그 안에는 `<h1>자기소개</h1>`, `{dpTime()}` 가 포함되어 있습니다.<br>
  `dpTime` 함수를 import하여 호출

  ✏️ dpTime<br>
  접속 당시의 시간을 Javascript로 계산해 반환
  ```
  return (
    <h2>
      접속한 시간 : {ampm} {hours} : {minutes} : {seconds}
    </h2>
  )
  ```

  ✏️ Info<br>
  소개 항목의 이름과 내용을 받아 한 줄의 `p태그`로된 Element 리턴<br>
  강의시간에 했던 `Book`과 같은 역할
  ```
  function Info(props) {
    return (
      <p>
        {props.name} : {props.content}
      </p>
    )
  }
  ```

  ✏️ InfoContents<br>
  소개 내용들로 이루어진 문단으로, `article`태그로된 Element 반환<br>
  강의시간에 했던 `BookLibrary`과 같은 역할
  ```
  <Info name="이름" content="이민우"></Info>
  ...
  ```

- **Index.js**<br>
  ```
  ...

  root.render(
  <React.StrictMode>
    <Header />
    <main>
      <InfoContents />
      <article>
          <p>
              유능한 개발자가 되고싶은 사람입니다 !
          </p>
      </article>
    </main>
  </React.StrictMode>
  );
  
  ...
  ```
  📁 jsxCode 에 작성한 컴포넌트들을 HTML 구조의 순서대로 호출<br>
  

<hr>