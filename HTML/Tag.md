## Tag

**웹 페이지 안의 모든 내용은 <body> 태그와 </body> 태그 안에 있어야 한다.**

- 헤드라인 : `<h1> - <h6>`
- 단락 : `<p>`
- 줄 바꿈 : `<br>`
- [목록](#목록) : `<ul>, <ol>, <li>`
- [강조](#강조) : `<strong>`, `<em>`
- [링크](#링크) : `<a>`
- [이미지](#이미지) : `<imag>`
- [테이블](#테이블) : `<table>, <thead>, <tbody>, <tr>, <th>, <td>`

**block element, inline element**

- HTML 태그에는 크게 block element, inline element로 나누어 진다
- 각 element에 적용되는 CSS가 별도로 존재한다

1. block element(블록 요소)

   - 블록 요소는 모든 인라인 요소를 포함할 수 있고 다른 블록 요소도 일부 포함할 수 있다
   - 기본적으로 가로폭 전체의 넓이를 가지는 직사각형 형태가 되며 width, height, margin, padding 등을 사용하여 레이아웃을 수정할 수 있다
   - 블록 요소 다음에는 줄바꿈이 이루어 진다
   - display:inline CSS 명령어로 블록 요소를 인라인 요소의 속성으로 변경할 수 있다
     > div {display:inline}
   - HTML5의 블록 요소 종류
     > address, article, aside, audio, blockquote, canvas, dd, div, dl, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, noscript, ol, output, p, pre, section, table, ul, video

1. inline element(인라인 요소)
   - 인라인 요소는 항상 블록 요소 안에 포함되어 있으며 인라인 요소 안에 다른 인라인 요소가 포함될 수 있다
   - 기본적으로 컨텐츠가 끝나는 지점까지를 넓이로 가지기 때문에 임의로 width, height로 변형을 줄 수 없다
   - line-height로 줄의 높낮이를 조절할 수 있고, text-align으로 텍스트의 중앙, 좌우측 정렬을 할 수 있다
   - 인라인 요소 다음에는 줄바꿈이 없고 우측으로 바로 이어서 표시된다
   - display:block CSS 명령어로 인라인 요소를 블록 요소의 속성으로 변경할 수 있다
     > div {display:block}
   - HTML5의 인라인 요소 종류
     > a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, q, samp, small, script, select, span, strong, sub, sup, textarea, tt, var

<hr>

### 목록

- `<ul>` : 순서가 필요하지 않은 목록(an unordered list)
- `<ol>` : 순서가 필요한 목록(an ordered list)
- `<li>` : 목록의 항목

```
<body>
    <h3>A few famous programmers</h3>
    <ul>
        <li>Ada Lovelace</li>
        <li>Grace Hopper</li>
        <li>...</li>
    </ul>
    <h3>Programming languages used by famous site</h3>
    <ol>
        <li>Google</li>
            <ul>
                <li>JavaScript</li>
                <li>C++</li>
                <li>...</li>
            </ul>
        <li>Facebook</li>
            <ul>
                <li>JavaScript</li>
                <li>Hack</li>
                <li>...</li>
            </ul>
    </ol>
</body>
```

<body>
    <h3>A few famous programmers</h3>
    <ul>
        <li>Ada Lovelace</li>
        <li>Grace Hopper</li>
        <li>...</li>
    </ul>
    <h3>Programming languages used by famous site</h3>
    <ol>
        <li>Google</li>
            <ul>
                <li>JavaScript</li>
                <li>C++</li>
                <li>...</li>
            </ul>
        <li>Facebook</li>
            <ul>
                <li>JavaScript</li>
                <li>Hack</li>
                <li>...</li>
            </ul>
    </ol>
</body>

### 강조

- `<strong>` : 굵게하기
- `<em>` : 기울이기

```
<strong>굵게하기</strong>
<em>기울이기</em>
```

<strong>굵게하기</strong>
<em>기울이기</em>

### 링크

- 링크 기능 : a의 href 속성 이용
- 앵커 기능 : a의 hred, id 속성 이용

```
<a href="#목록">페이지 내 [목록] 부분으로 이동하기</a>
```

<a href="#목록">페이지 내 [목록] 부분으로 이동하기</a>

```
<a href="https://www.google.com">[구글]로 이동하기</a>
```

<a href="https://www.google.com">[구글]로 이동하기</a>

### 이미지

- 인라인 요소 태그(스스로 닫는 태그)
- src 속성과 alt의 속성은 필수
  - src : 이미지 주소
  - alt : 이미지를 못 읽는 경우 alt 속성의 내용이 대체 표기

```
<img src="image.jpg" alt="이미지의 묘사 내용" />
```

### 테이블

- `<table>` : 테이블 틀
- `<thead>` : 테이블의 제목 틀
- `<tbody>` : 테이블의 내용 틀
- `<tr>` : 테이블의 한 행
- `<th>` : 테이블의 제목 셀
- `<td>` : 테이블의 한 셀

<h2>Meet the CS avatars!</h2>

```
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Hobbies</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Hopper</td>
            <td>Programming, Hopping</td>
        </tr>
        <tr>
            <td>Winston</td>
            <td>Eating donuts</td>
        </tr>
    </tbody>
</table>
```

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Hobbies</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Hopper</td>
            <td>Programming, Hopping</td>
        </tr>
        <tr>
            <td>Winston</td>
            <td>Eating donuts</td>
        </tr>
    </tbody>
</table>

### Reference

- [Khan Academy](https://ko.khanacademy.org/computing/computer-programming/html-css#intro-to-html)
- [HTML5 태그의 블록 요소와 인라인 요소](https://junistory.blogspot.com/2017/07/html5.html)

### Learn More

- [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [MarkDown 사용법 총정리](https://heropy.blog/2017/09/30/markdown/)
- [HTML 초급 (기초)](http://webberstudy.com/html-css/html-1/)
