import React, {Component} from "react";
import "./App.css";
import TOC from "./components/TOC";
import Content from "./components/Content";
// import Subject from "./components/Subject";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      subject: {title: "WEB", sub: "World Wide Web!"},
      welcome: {title: "welcome", desc: "Hello, React!"},
      contents: [
        // object 하나당 태그 하나에 대한 속성 모음
        // 이 state들은 Content 컴포넌트에서 나타낼 내용
        // TOC도 같은 내용으로 구성되므로 해당 state를 TOC에서도 활용함
        {id: 1, title: "HTML", desc: "HTML is for information"},
        {id: 2, title: "CSS", desc: "CSS is for design"},
        {id: 3, title: "JavaScript", desc: "JavaScript is for interactive"}
      ]
    };
  }

  render() {
    var _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        /> */}
     <header>
          <h1>
            <a href="/" onClick={function(e){
              // react에서는 onClick을 통해 실행되는 함수의 첫번째 파라미터 값으로 event라는 객체를 주입하기로 약속 되어있음
              console.log(e);

              // debugger; // 이 부분에서 실행을 멈춤
              
              e.preventDefault();
              // event가 발생한 태그의 기본 동작을 막음, 여기서는 페이지 이동을 막음

              // this.state.mode = 'welcome';
              // 오류발생
              // 문제1. function 안에서는 this의 값이 세팅X -> .bind(this), 여기서 this는 컴포넌트를 가리킴
              // 문제2. 정의해놓은 state를 받는게 아니라 state에 새로운 값을 넣을 때는 -> this.setState()를 사용한다

              this.setState({mode : 'welcome'});

            }.bind(this)}>{this.state.subject.title}</a>
          </h1>
          {this.state.subject.sub}
      </header>
        <TOC data={this.state.contents} />
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
