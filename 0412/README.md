# 📖 컴포넌트와 State 활용
> 1. 웹사이트를 5개 이상의 컴포넌트로 구성하기<br>
> 2. 2개 이상의 props를 전달하는 컴포넌트를 하나 이상 포함하기<br>
> 3. 2개 이상의 state를 가진 컴포넌트를 하나 이상 포함하기<br>
> 4. 1개 이상의 props와 1개 이상의 state를 가진 컴포넌트를 하나 이상 포함하기<br>
> 5. 회원가입 페이지 만들기<br>

<hr> 

- [**자기소개 페이지 링크** (Github Pages)](https://minuring.github.io/React/0422/intro/build) : 1~4번 요구사항 모두 포함

- [**회원가입 페이지 링크** (Github Pages)](https://minuring.github.io/React/0413/signup/build) : 5번 회원가입 페이지

<br>

- ## 요구사항을 적용한 컴포넌트

  ### Timer.js <br>

  - 클래스형 컴포넌트로 생성자에서 5개의 state, 1개의 props (상위에서 전달한 테마색상)로 구성<br>

    <pre>
    constructor(props) {
        super(props);
        this.state = {
              now: new Date(),
              ampm: null,
              hours: null,
              minutes: null,
              seconds: null
        };
        this.blockStyle = {
              ...
              backgroundColor : props.color.blockBG,
              ...
        };
    }
    </pre>

  - 함수들<br>

    `tick()` : `new Date()`로 현재시간을 받아와 ```this.setState({
    now: now, ... });``` 와 같이 state변경

    `componentDidMount()` 컴포넌트가 생성됐을 때 `tick()` 호출과 `tick()`함수를 `setInterval()` 함수로 설정, **콜백 함수**형태로 화살표함수이용 (익명함수형태로 setInterval 파라미터로 지정, 변수에저장)<br>

    `componentWillUnmount()` 함수로 `clearInterval()` 함수로 컴포넌트 생성할 때 setInterval한 익명함수를 clear


- ## 회원가입 페이지

  ### SignUp.jsx <br>

  - 함수형 컴포넌트로 `useState` 를 이용해 id, pw, pwconfirm 3가지 상태 이용
  
  - input마다 `onChange` 이벤트 핸들러로 입력한 내용을 state에 반영
  
  - form에서 `onSubmit` 이벤트 핸들러에서 유효성 검사


- ## 정리

<pre>
컴포넌트 내에서 지속적으로 변경되며 렌더링이 필요한 값을 State로 사용
props와 달리 state에는 assign할 수 있다.
렌더링으로 인한 성능저하를 최소화하기 위해 <b>비동기적으로 작동한다.</b> : batch update, 콜백함수를 이용해 원하는대로 제어가 가능

state는 명시적으로 기술해야한다.
class Component에서 this.state = {...}
function Component에서 const [state, setState] = useState(initState)

값 변경시에는 <b>반드시 setState를 사용</b>
setState후 특정 작업 실행 :
  this.setState( { 바꿀 스테이트값 기술 }, () => { 여기 콜백 함수 } );

컴포넌트에서 DOM의 이벤트 사용
"on" + "이벤트명" 을 camelCase로, {함수명}으로 이벤트핸들러 전달

this.clickHandler = this.clickHandler.bind(this);와 같이 Class Component의 this로 바인딩
=> 컴포넌트 - 이벤트메소드 사이를 연결

React 컴포넌트는 생명주기를 가진다.
Mounting > Updating > Unmounting
</pre>