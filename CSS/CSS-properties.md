## CSS Properties

- [font](#font)
- [overflow](#overflow)
- [border](#border)
- [margin](#margin) : div들 사이에 여백을 줌
- [padding](#padding) : div 경계와 내부 내용 사이에 공간을 줌

**CSS 속성은 HTML 각 태그의 style 속성에 넣을 수 있다.**


### font

- font-style
    - normal : 기본
    - italic : 이탤릭체
- font-weight : 미리 정의된 단어나 100 ~ 900 사이의 숫자로 설정
    - lighter(=100), normal(=400), bold(=700), bolder(=900)
- font-size
- font-family
- text-decoration
    - underline
- text-align
- line-height
- font-variant

**아래 두 속성은 같은 역할을 한다.**

```
.song-lyrics {
    background-color : yellow;
    font-family : fantasy;
    font-size : 13px;
    font-style : italic;
}
```
```
.song-lyrics {
    background-color : yellow;
    font : italic 13px fantasy;
}
```
### overflow
- auto : 스크롤이 필요할 때 스크롤을 만듦

### border

```
p {
    border : 4px dashed rgb(219,29,29)
}
```

### Reference

- [ofcourse - font 속성](https://ofcourse.kr/css-course/font-%EC%86%8D%EC%84%B1)

### Learn More

- [CSS 레이아웃을 배웁시다](https://ko.learnlayout.com/)
