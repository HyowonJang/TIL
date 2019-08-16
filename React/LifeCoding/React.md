## React

- npm : node.js로 만들어진 앱을 쉽게 설치할 수 있는 도구

```
$ npm install -g create-react-app
# -g는 global을 의미

$ sudo npm install -g create-react-app
# permission denied 발생 시

$ create-react-app .
# 원하는 디렉토리에서 create-react-app 실행
# .는 현재 디랙토리 의미
# 해당 디렉토리에 create-react-app을 통해 개발환경 구축

$ npm run start
# 개발환경 실행
# npm start와 같음

$ npm run build
# production(실서비스)) 환경에서 사용되는 앱 제작 및 실행
# 공백 등 불필요한 정보 삭제하여 용량 감축
```

- npx : npm을 설치하면 함께 설치됨

```
$ npx create-react-app my-app
# -> craeate-react-app을 일회용으로 다운받은 후 실행하고 삭제함

$ cd my-app

$ npm start
```

- index.html

  - `<div id="root"></div>`
  - React를 통해 만든 컴포넌트들은 id가 "root"인 태그 안에 들어가도록 create-react-app이 설정되어 있음

- src 디렉토리

  - React를 통해 만든 컴포넌트들, 즉 `<div id="root"></div>` 태그 안에 들어가는 내용들을 담은 디렉토리

- index.js

  - `ReactDOM.render(<App />, document.getElementById('root'));`
  - src 디렉토리의 진입 파일, index.html과 App.js를 연결
  - `<App />` : React를 통해 만든 사용자 정의 태그, 즉 컴포넌트

- App.js

  - `<App />`를 실제로 구현하는 파일

- Component

  - React로 Component를 만들 때는 하나의 최상위 태그로 감싸야 함

  - 상위 컴포넌트에서 내려준 값을 하위 컴포넌트에서 받을 때는 `{this.props.속성명}`을 씀

  - 상위 컴포넌트에서 하위 컴포넌트들의 초기값은 constructor 함수에서 설정하고, 하위 컴포넌트들을 어떤 로직으로 동작시킬지는 render 함수 안에 짜여지며, 최종적으로 화면에 어떤 구조로 배치할지와 어떤 속성을 부여하여 활용할지는 render 함수의 return 안에 짜여진다.

- constructor 함수

  - 어떤 컴포넌트를 사용할 때, render 함수보다 먼저 실행이 되면서 그 컴포넌트를 초기화 시켜주고 싶은 코드가 있다면 constructor 함수 안에 작성한다. 컴포넌트가 실행될 때 constructor 함수가 있으면 이 함수가 제일 먼저 실행되어 초기화를 담당한다.

  - constructor 함수는 하위 컴포넌트를 실행하는 상위 컴포넌트에 속하며, 하위 컴포넌트의 state 값을 정한다(초기화한다). 즉, 하위 컴포넌트는 기능의 단위이고 상위 컴포넌트에서 하위 컴포넌트들을 조합하여 적절하게 활용하는 것이며, 이를 위해 필요에 맞게 하위 컴포넌트들의 초기값들을 세팅해주는 것이다.

- props & state

  - props는 컴포넌트를 실행할 때 속성을 조작하여 값을 부여할 수 있게 해주는 ‘컴포넌트 외부’의 ‘사용자를 위한’ 도구이고, state는 ‘컴포넌트 내부’적으로 사용되는 ‘구현자를 위한’ 도구이다. props와 state는 철저히 분리되어 각자의 편의성을 도모해야만 한다.

  - 상위 컴포넌트의 state의 값을 하위 컴포넌트의 props로 전달하는 것은 얼마든지 가능하다. Ex) 상위 컴포넌트에서 constructor을 설정한 뒤 하위 컴포넌트의 속성값으로 `{this.state.하위컴포넌트이름.하위컴포넌트의속성이름}`을 넣어주면 constructor에서 지정해준 값이 들어간다.

  - 상위 컴포넌트에서 하위 컴포넌트를 활용하기 위해 넣어주는 속성들은 하위 컴포넌트에서 적용할 위치에 `{this.props.속성이름}` 으로 연결해준다.

  - 상위 컴포넌트는 하위 컴포넌트로 props에 값을 부여함으로써 명령하고, 하위 컴포넌트는 상위 컴포넌트로 이벤트를 써서 명령한다.

  - props나 state가 바뀌면 render 함수가 다시 호출되어 화면이 다시 그려진다.

- React Developer Tools(확장프로그램)

  - 개발자도구 > Elements에서는 모든 컴포넌트들이 html로 컴파일되어 렌더링된 결과만 보여주기 때문에, React 컴포넌트들로 짜여진대로를 보여주는 프로그램
