## React

- npm : node.js로 만들어진 앱을 쉽게 설치할 수 있는 도구

```
# -g는 global을 의미
npm install -g create-react-app

# permission denied 시
sudo npm install -g create-react-app

# 원하는 디렉토리에서 create-react-app 실행
# .는 현재 디랙토리 의미
# 해당 디렉토리에 create-react-app을 통해 개발환경 구축
create-react-app .
```

- npx : npm을 설치하면 함께 설치됨

```
npx create-react-app my-app
# -> craeate-react-app을 일회용으로 다운받은 후 실행하고 삭제함

cd my-app
npm start
```
