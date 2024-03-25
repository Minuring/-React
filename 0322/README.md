# 📖 리액트 시작하기
<br>

- **CRA**<br>

  ✏️ Create React App<br>
  `npx create-react-app '이름'`<br>
  리액트 프로젝트 폴더와 빌드 도구 등을 설치해주는 명령어

  ✏️ 실행<br>
  `npm start`<br>

  ✏️ 빌드<br>
  `npm run build`<br>
  build 폴더가 생성되며, 배포할 때 build폴더만 배포

- **폴더 구조**<br>

  - 📁 node_modules<br>

    ✏️ 라이브러리, 외부 패키지 등등
    
  - 📁 public<br>

    ✏️ 컴파일이 필요 없는 <b>정적 파일들</b>

  - 📁 src<br>

    ✏️ 대부분의 파일 작성, Javascript로 컴파일

      - **index.js**<br>
      메인 프로그램이라 할 수 있음.<br>
      HTML 템플릿, JavaScript 컴포넌트를 조합해 index.html에 렌더링<br>
      index.html의 <b>id가 root인 div태그</b>에 App.js에 정의된 컴포넌트들을 렌더링한다.

      - **App.js**<br>
      컴포넌트를 정의<br>
      실제로 화면에 표시되는 내용들을 정의

      - assets<br>
      이미지 혹은 폰트와 같은 파일들

      - components<br>
      재사용 가능한 컴포넌트들

      - config<br>
      여러 개의 config 파일들

      - constants<br>
      공통적으로 사용되는 상수들을 정의한 파일들

      - hooks (= hoc)<br>
      커스텀 훅

      - pages<br>
      react router등을 이용하여 라우팅을 적용할 때 페이지 컴포넌트

      - services (= api)<br>
      보통 api관련 로직의 모듈 파일<br>
      auth와 같이 인증과 관련된 파일이 포함

      - styles<br>
      css 파일들

      - utils<br>
      정규표현식 패턴이나 공통함수 등 공통으로 사용하는 유틸 파일들

      - contexts<br>
      contextAPI를 사용할 때 관련 파일들<br> 상태 관리를 위해
      contextAPI 대신 redux를 사용 할 경우 폴더 이름을 store로 사용
  
  - package.json<br>

    ✏️ 프로젝트의 내용과 사용하는 라이브러리 목록 나열<br>
    ✏️ 주로 깃에 node_modules 대신 업로드

<hr>