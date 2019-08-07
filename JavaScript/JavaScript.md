## JavaScript

### 객체

- 객체란 서로 연관된 변수와 함수를 그룹핑한 자료
- 객체 내의 변수 : property
- 객체 내의 함수 : method

```
# person은 객체, name은 property, introduce는 method
var person = {}
person.name = 'egoing'
person.introduce = function(){
    return 'My name is ' + this.name
}
document.write(person.introduce())

# 객체를 선언할 때 위의 코드를 한꺼번에 구현한다면 아래와 같다
var person = {
    name : 'egoing',
    introduce : function(){
        return 'My name is ' + this.name
    }
}
document.write(person.introduce())
```

### 생성자와 new

- 생성자 : 객체를 만드는 역할을 하는 함수, 첫글자를 대문자로 씀
- new : 함수를 객체로 만들어주는 역할

```
// Person이라는 함수 생성
function Person(){}
// new를 이용하여 Person 함수로 p라는 객체 생성, 함수를 호출하는 형태로 작성
var p = new Person();
p.name = 'egoing';
p.introduce = function(){
    return 'My name is '+this.name;
}
document.write(p.introduce())
```

- 함수로 객체를 생성함으로써 생성자 내에서 이 객체의 프로퍼티를 정의할 수 있다 -> 코드의 재사용성 향상

  ```
  function Person(name){
      this.name = name;
      this.introduce = function(){
          return 'My name is '+this.name;
      }
  }

  var p1 = new Person('egoing');
  document.write(p1.introduce()+'<br>');

  var p2 = new Person('leezche');
  document.write(p2.introduce());

  // 필요시 Person 함수를 수정하여 객체를 원하는 구조로 일괄 변경 가능하다
  ```

### setTimeout()

- 특정 코드, 함수를 일정시간 의도적으로 지연한 뒤 실행하는 함수
- 2개의 인자 설정
  1. 일정시간 뒤 실행될 코드
  2. 지연 시간(delay time), 1000은 1초

```
// 3초 지연 뒤 코드 실행
setTimeout(function(){
    console.log('hello');
}, 3000);
```

### callback

- 같은 코드(callback)를 활용하여 다른 결과를 내고싶을 때 활용
  - 예를들면 onclick 함수를 여러 상황에서 활용하고 싶을 때,
    상황에 맞는 코드를 짜고 onclick 함수를 callback하면 된다
  - callback 함수를 직접짜는 경우보다는 반복해서 쓰이는 기능으로 이미 짜여진 함수일 경우가 많다

```
function foo(callback) {
  setTimeout(() => {
    //로직
    callback();
  }, 1000);
}

foo(() => {
  console.log("end");
});
```

### Learn More

- [자바스크립트란 무엇인가](https://nolboo.kim/blog/2014/03/20/javascript-for-web-developer-1/)
- [HTML 속의 자바스크립트](https://nolboo.kim/blog/2014/03/27/javascript-for-web-developer-2/)
- [WEB2 JavaScript](https://opentutorials.org/course/3085)
- [WEB2 JavaScript YouTube](https://www.youtube.com/playlist?list=PLuHgQVnccGMBB348PWRN0fREzYcYgFybf)
- [생성자와 new](https://www.opentutorials.org/module/532/6570)
