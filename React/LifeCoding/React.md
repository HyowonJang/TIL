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

- React Developer Tools(확장프로그램)
  - 개발자도구 > Elements에서는 모든 컴포넌트들이 html로 컴파일되어 렌더링된 결과만 보여주기 때문에, React 컴포넌트들로 짜여진대로를 보여주는 프로그램
