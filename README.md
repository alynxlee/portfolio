# 👩🏻‍💻 포트폴리오 작업일지

---

- **목차**

## 🎯 프로젝트 목표

---

시각적으로 보기 좋은 사이트를 만들고, 프론트엔드 개발자로서 발전하는 계기가 된다.

## 📋 코딩 컨벤션

---

- 펼쳐보기
  **파일 및 폴더 분류**
  1. 파일 및 폴더명은 소문자로 작성
  2. 메인 페이지명은 index, 서브페이지명은 project로 작성
  _ex) index.html / project1.html / project2.html …_
  1. 폴더는 html, css, js, images, common로 분류
  - common폴더 내부에는 전역으로 설정하는 파일 생성 (reset.css, font.css …)
  - images 폴더 하위에는 각각의 페이지 별로 폴더 생성.
  **Stylesheet / Script**
  1. reset 파일은 minireset.min.css 파일 수정 후 사용
  2. 폰트는 fonts.css 파일 사용
  3. style.css와 js 파일 생성 시, html의 이름으로 생성
  _ex) index.html / index.css / index.js_
  **네이밍**
  1. html, css, js의 id명, class명, 변수명은 카멜표기법으로 작성
  _ex) toggleBtn_
  1. querySelectorAll을 사용하여 노드를 반환할 때의 변수명은 s를 붙여 복수형으로 작성
  2. html의 body 구조는 header, main, footer로 작성
  - 작성 시 가독성을 위해 주석으로 구분
  - 사이트 전체 메뉴는 header - nav - ul#gnb로 작성
  - main은 article로 구분 후, 클래스 혹은 아이디명 main\_(index 페이지 소제목)으로 작성

    _ex) main_work_
  1. index페이지의 이미지 파일 이름은 main메뉴명1.jpg 형식으로 작성
  2. 프로젝트의 이미지 파일 이름은 img1.jpg로 작성
  **식 / 구문**
  1. 기본적인 작성 방식은 prettier 작성 방식을 따름
  2. 들여쓰기 : tab을 사용한 들여쓰기 (tap 사이즈는 2로 설정)
  3. 키워드, 연산자와 다른 코드 사이에 공백 작성
  ```jsx
  const total = (a, b, c = 5) => console.log(a + b + c);
  total(10, 5); // X
  const total = (a, b, c = 5) => console.log(a + b + c);
  total(10, 5); // O
  ```
  1. 괄호의 위치는 K&R 스타일로 작성
  - 여는 블록을 첫 줄 마지막에 사용하고 닫는 블록은 새 줄에 작성
  1. Scss 스타일 속성 작성 시, 한 줄에 하나의 스타일 속성 작성
  ```scss
  /* X */
  body {
    height: 100vh;
    background-color: #15264b;
    color: #fff;
    overflow: hidden;
  }

  /* O */
  body {
    height: 100vh;
    background-color: #15264b;
    color: #fff;
    overflow: hidden;
  }
  ```
  1. js 변수 선언 시
  - const 또는 let 사용
  - 가급적 화살표 함수 사용 문자열
  - 선언 시, 백틱( ` )을 쓰지 않는 경우 작은 따옴표 사용

## 📂 디렉터리 구조

---

![directory.PNG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bcc44144-9245-43fa-9e17-f0da39981753/directory.png)

## 🛠 사용 기술

---

[제목 없음](https://www.notion.so/8589ec5e01a7417f97982d4e94a90576)

## 📚 페이지 구성

---

## 🖥 Main

프로젝트 상세 페이지를 제외한 모든 페이지를 스크롤로 이동할 수 있도록 제작

### 📌 **Title Section**

---

![ezgif.com-optimize (2).gif](<https://s3-us-west-2.amazonaws.com/secure.notion-static.com/173a1365-6dc4-40b0-9a3d-c2b9a363ff9d/ezgif.com-optimize_(2).gif>)

> **mousemove 이벤트**

마우스의 움직임에 따라 텍스트 이동

![menuMove.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a1ef28d7-abdb-47c7-8757-40b2f5a24c77/menuMove.gif)

> **scroll 이벤트**

- body의 background-color, header의 color 변경
- goUp / 다크모드 버튼
  - 첫 화면에서 아래로 스크롤 시 나타남

> **click 이벤트**

메뉴 클릭 시 해당 영역으로 이동

### 📌 Work **Section**

---

![sideBar.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/71165911-d2ac-4799-9e51-b9eed5038b50/sideBar.gif)

> **position: sticky**

스크롤 시 움직이지 않게 사이드바 고정

![swiper.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7ac0d4e8-4830-4c9a-83c2-77cb44586115/swiper.gif)

> **Swiper를 사용한 슬라이드**

### 📌 About **Section**

---

![skills.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/efb64442-8cd4-402d-b7c5-0d2894385e56/skills.gif)

> **position: sticky / bottom 값**

스크롤 시 차례대로 올라오는 움직임 구현

### 📌 Contact **Section**

---

![clipPath.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e9df30da-2c13-4427-bcc9-47b2ef958639/clipPath.gif)

> **mousemove 이벤트 + clip-path**

마우스 커서가 지나가는 부분만 blur 해제

### 📌 Dark Mode

---

![dark.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ba6d36c9-ac01-4257-a8bc-454945bdc6a1/dark.gif)

> **click 이벤트**

- 🌙 아이콘을 누르면 다크모드 실행
- ☀ 아이콘을 누르면 라이트모드 실행

## 🖥 Project page

## 🔍 문제 및 해결

---

### 왜 내가 원하는 영역으로 이동 되지 않을까?

<aside>
🥵 메뉴를 클릭하면 해당 영역으로 이동시키기 위해,

수업 시간에 배운 내용을 바탕으로 offsetTop을 이용해서 코드를 잘 짰다… 고 생각했지만 아래로 살짝 이동만 될 뿐 실행되지 않았다.

</aside>

<aside>
💡 offsetTop에 대해 검색해보니

**바로 위에 있는 부모 요소의 상단에서부터의 그 요소까지의 픽셀값** 이라고 한다.

내 경우엔 해당 영역의 margin-top : 71px과 부모 요소의 padding: 60px을 합쳐 131px밖에 되지 않았기 때문에 웹페이지 최상단으로부터 131px만 이동된 것이었다!

해당 영역의 offsetTop에 그 영역을 감싸고 있는 요소 중 **웹페이지의 최상단과 붙어있는 요소의 offsetTop**을 더해주니 문제가 해결되었다.

```jsx
const getWork = mainWork.offsetTop + mainContainer.offsetTop;
```

</aside>

### 사이드바… 제발 움직이지 말아 줘

<aside>
🥵 메인 상단에서 아래로 스크롤하면 나타나는 왼쪽의 사이드바를 고정시키기 위해 **position: sticky**를 부여했지만 고정되지 않았다.

</aside>

<aside>
💡 sticky가 실행되는 조건

1. 부모 요소에 **overflow: hidden, auto, scroll** 속성이 적용되어 있으면 안 된다.
2. 부모 요소에 **height 값**이 있어야 한다.

**사이드바의 부모 요소**에 overflow 속성이 있는지 확인해보았지만 없었고, **height 값을 설정해주니 바로 고정이 되었다.** 부모의 height 값만큼 sticky가 실행된다고 한다.

</aside>

### 브라우저 창이 커지면 한 쪽으로 쏠려요

![textInLargeScreen.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f1fb1f23-e3ba-484f-9bc5-dd0973adc2b8/textInLargeScreen.jpg)

<aside>
🥵 알파벳 이미지에 position: absolute 값을 적용해놓았기 때문에 너비가 1920px 이상인 모니터에서 페이지를 보게 되면 알파벳이 앞쪽으로 쏠리는 현상이 발생했다.

</aside>

<aside>
💡 미디어 쿼리로 일정 너비 이상이 되면 그 너비에 맞게 위치가 이동 되게 설정하였다.

```scss
@media screen and (min-width: 2300px) {
  body {
    main {
      .
			.
			.
     .titleText {
	      img {
					&:first-child {
	          top: 6%;
            left: -6%;
            z-index: 8;
          }
          **&**:nth-child(2) {
             top: 7%;
             left: 3%;
             z-index: 7;
          }
								.
								.
								.
```

JavaScript에서도 matchMedia를 이용하여 scale 값을 바꿔주었다.

```jsx
const mq1 = window.matchMedia('screen and (min-width: 2000px)');

addEventListener('mousemove', e => {
  if (mq1.matches) {
    let x = e.clientX;
    let y = e.clientY;

    el1.style.transform = `translate(${x / 100}px, ${y / -100}px) scale(0.65)`;
    el2.style.transform = `translate(${x / -80}px, ${y / 150}px) scale(0.65)`;
																			.
																			.
																			.
```

</aside>

## ✍🏻 리뷰

---

- offsetTop, sticky 등 수업 시간에 배웠지만 제대로 이해하지 못 한 개념들을 다시 찾아보고 적용해 봄으로써 정확히 이해할 수 있는 계기가 되었다.

- 포트폴리오를 제대로 만들어보기 전까지는 화려한 효과가 많은 사이트가 좋다고 생각했는데 직접 만들어보니 가독성이 좋고 심플한 것이 최고!

## 📎 포트폴리오 바로가기

---

[LeeHyeJin Portfolio](https://alynxlee.github.io/portfolio/)
