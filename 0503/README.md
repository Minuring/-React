# 📖 5월 3일 레포트
> 1. 7, 7-1 (훅) 실습하기<br>
> 2. 자기소개 웹페이지에 커스텀 훅 추가하기<br>
> 3. 피그마로 웹 사이트 기획하기
> 4. 깃허브 정리

<hr> 

- [**자기소개 페이지 링크** (Github Pages)](https://minuring.github.io/React/0513/build) : 1번 커스텀훅 : useTheme 작성해 사용<br>

<br>

- ## 정리

  - 실습 코드는 훅 종류별로 폴더로 분류해 두었습니다.<br>

  ### useReducer <br>

  - **State**보다 조금 더 복잡항 상태 관리<br>
  이전 상태와 Action을 합쳐 새로운 State를 만드는 조작<br>

  - #### Dispatch 함수 <br>
    reducer 함수를 실행시킨다.<br>
    인자로 action 객체(type속성, payload)를 받으며 action을 이용해 state를 업데이트한다.<br>
  
  - #### reducer 함수 <br>
    Dispatch 함수에 의해 실행되며 컴포넌트 외부에서 state를 업데이트하는 로직 담당<br>
    state와 action을 인자로 받아 새로운 state 반환<br>

  ### useContext<br>

  - **전역 데이터**를 컴포넌트끼리 공유할 수 있는 방법을 제공<br>
  상위 컴포넌트의 데이터가 필요한 하위 컴포넌트들은 useContext훅을 사용해 받아오기만 하면 된다.<br>
  **Provider**로 감싸진 모든 하위 컴포넌트가 props를 사용하지 않고 value에 접근가능.<br>

    <pre>
  
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
        (하위 컴포넌트)
    </ThemeContext.Provider></pre>

  ### useRef<br>

  - **저장공간** 또는 **DOM 요소**에 접근하기 위해 사용하는 훅<br>
  `.current` 프로퍼티로 전달된 인자로 초기화된 변경 가능한 ref객체 반환<br>
  주로 DOM을 직접 선택해야하는 상황에 사용<br>
  **useRef**로 관리하는 값은 렌더링 대상이 아님<br>
  
  - #### forwardRef<br>
    자식 컴포넌트 안의 **DOM Element**에 접근하고 싶을 때 사용<br>
    함수형 컴포넌트는 인스턴스가 없기 때문에 forwardRef로 감싸주지 않으면 ref속성 사용 불가<br>

  ### useEffect<br>
  - 리액트 컴포넌트가 **렌더링 될 때마다 특정 작업 실행**할 수 있도록 하는 훅<br>
  클래스형 컴포넌트의 **생명주기 메서드**를 함수형 컴포넌트에서 사용<br>
  **mount, update, unmount** 때에 특정 작업을 실행하도록 할 수 있음<br>
  무한 루프 주의 - 의존성배열 관리 주의해야함.<br>
  **클린업 함수** : 메모리 누수 방지를 위해 useEffect내에서 시작한 모든 작업은 컴포넌트가 Unmount될 때 정리되어야한다.<br>

  ### useMemo<br>
  - **메모이제이션**<br>
  자주 필요한 값을 맨 처음 계산할 때 캐싱한다.<br>
  <pre>const value = useMemo(() => { return calculate();}.[item]) </pre>
  첫 번째 인자인 콜백함수는 Memoization할 값을 계산해 리턴<br>
  두 번째 인자인 의존성 배열의 요소가 업데이트될 때만 콜백함수 호출 후 다시 Memoization.<br>

  ### useCallback<br>
  - **함수를 메모이제이션**, JS의 클로저 특성에따른 문제를 해결하기 위해 사용<br>
  콜백함수의 리턴값을 메모이제이션하는 useMemo와 달리, **콜백 함수 자체를 메모이제이션**<br>
  따라서 렌더링될 때마다 콜백함수가 새로 생성되는 것이 아닌 동일한 함수 인스턴스<br>
  불필요한 렌더링을 최적화할 수 있다.<br>

  ### useTransition<br>
  - UI를 차단하지 않고 상태를 업데이트할 수 있는 훅<br>
  오래 걸리는 setState (상태 업데이트)가 존재하면 그 시간만큼 렌더 트리가 Block됨<br>
  -> useTransition이 최상위 레벨에서 호출돼 웅선순위에 따라 업데이트되게 함<br>
  `const[isPending, startTransition] = useTransition();`<br>
    isPending : 대기중인 transition이 있는지 여부<br>
    startTransition : setState를 transition으로 표시해주는 함수<br>
  useMemo, useCallback과 같이 성능 최적화 용도로 사용<br>

  ### use<br>
  - Promise를 정의하는 데 필요한 상용구 코드 양을 줄여 데이터 가져오기 프로세스를 단순화하도록 설계된 솔루션<br>
  다른 훅과 달리 조건, 블럭, 루프 내부에서 호출 가능<br>
  promise를 인수로 전달해 비동기적으로 데이터 가져오기, 조건문 내에서 조건에따라 데이터 일시 중지 등이 가능<br>

  ### useId<br>
  - **유니크한 ID**를 생성할 수 있는 훅<br>
  React에서 컴포넌트 렌더링마다 JS변수를 사용한 ID가 매번 재생성될 수 있음<br>
  `const passwordHintId = useId();` 와 같이 컴포넌트 최상단에서 고유ID값을 생성해 사용 가능<br>


- ## 자기소개 페이지<br>

  **state**와 **props**로 하위 컴포넌트에게 전달, 전달,,하는 방식으로 작성했던 자기소개 페이지를 **useTheme** 커스텀 훅을 작성, **useContext**를 이용해 최상위에서 **Provider**를 통해 전달함.<br>

  하위 컴포넌트들은 useContext를 통해 전역 데이터 **ThemeContext**에 접근<br>

  ### useTheme.jsx <br>
  <pre>
  function useTheme() {
      
      const THEME = {
          BLUE : {
            id : '1',
              ...
          },
          GRAY : {
            id : '2',
              ...
          }
      };

      const [theme, setTheme] = useState(THEME.BLUE);

      useEffect(() => {
          if (theme.id == '1') {
              setTheme(THEME.GRAY);
          } else {
              setTheme(THEME.BLUE);
          }
      }, []);

      const toggleTheme = () => {
          const newTheme = theme.id === '1' ? THEME.GRAY : THEME.BLUE;
          setTheme(newTheme);
      };

      return [theme, toggleTheme];
  }

  export default useTheme;
  </pre>

  ### ThemeContext.js
  <pre>
  import { createContext } from 'react';

  const ThemeContext = createContext(null);

  export default ThemeContext;
  </pre>
