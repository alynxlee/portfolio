const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const mainContainer = document.querySelector(".mainContainer");
const mainContact = document.querySelector(".mainContact");
const sideBar = document.querySelector(".mainFixedBar");
const contactBtn = document.querySelector(".mainFixedBar .contactBtn");
const goUp = document.querySelector(".goUp");
const sideBarLogo = document.querySelector(".mainFixedBar h2");
const gitBg = document.querySelector(".mainSkills .git");
const footer = document.querySelector("footer");
const dark = document.querySelector(".darkMode");
const skills = document.querySelectorAll(".mainSkills .skills");
const jsBg = document.querySelector(".mainSkills .js");
const graphicsBg = document.querySelector(".mainSkills .graphics");
const menuWork = document.querySelector("#gnb li a.work");
const menuAbout = document.querySelector("#gnb li a.about");
const mainWork = document.querySelector(".mainWork");
const mainAbout = document.querySelector(".mainAbout");

// 메뉴 누르면 해당 영역으로 이동
menuWork.addEventListener("click", (e) => {
  e.preventDefault();
  const getWork = mainWork.offsetTop + mainContainer.offsetTop;
  scrollTo({
    top: getWork,
    behavior: "smooth",
  });
});

menuAbout.addEventListener("click", (e) => {
  e.preventDefault();
  const getAbout = mainAbout.offsetTop + mainContainer.offsetTop;
  scrollTo({
    top: getAbout,
    behavior: "smooth",
  });
});

// footer에서 버튼 이동
let ftOffsetTop = footer.offsetTop;
let clientHt = document.documentElement.clientHeight;
let result = ftOffsetTop - clientHt - footer.clientHeight + 100;

addEventListener("scroll", () => {
  scrollY > 300 ? (dark.style.opacity = 1) : (dark.style.opacity = 0);
  scrollY > 300 ? (goUp.style.opacity = 1) : (goUp.style.opacity = 0);
  console.log(scrollY);

  if (scrollY >= result) {
    goUp.style.marginBottom = "100px";
    dark.style.marginBottom = "100px";
  } else if (scrollY < result) {
    goUp.style.marginBottom = "0";
    dark.style.marginBottom = "0";
  }
});

// dark mode toggle
dark.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.toggle("dark");
  main.classList.toggle("active");

  header.classList.toggle("dark");
  /*header.classList.toggle('active');*/
  skills.forEach((item) => {
    item.classList.toggle("dark");
  });
  jsBg.classList.toggle("dark");
  graphicsBg.classList.toggle("dark");
  contactBtn.classList.toggle("dark");
  dark.classList.toggle("lightMode");
});

// smooth behavior
goUp.addEventListener("click", (e) => {
  e.preventDefault();

  scrollTo({
    top: 0,
    behavior: "smooth", // 스크롤 부드럽게 이동
  });
});

// mainTitle 텍스트 움직임
const el1 = document.querySelector(".titleText img:nth-child(1)");
const el2 = document.querySelector(".titleText img:nth-child(2)");
const el3 = document.querySelector(".titleText img:nth-child(3)");
const el4 = document.querySelector(".titleText img:nth-child(4)");
const el5 = document.querySelector(".titleText img:nth-child(5)");
const el6 = document.querySelector(".titleText img:nth-child(6)");
const el7 = document.querySelector(".titleText img:nth-child(7)");
const el8 = document.querySelector(".titleText img:nth-child(8)");
const el9 = document.querySelector(".titleText img:nth-child(9)");
const el10 = document.querySelector(".titleText img:nth-child(10)");
const el11 = document.querySelector(".titleText img:nth-child(11)");
const el12 = document.querySelector(".titleText img:nth-child(12)");
const el13 = document.querySelector(".titleText img:nth-child(13)");
const el14 = document.querySelector(".titleText img:nth-child(14)");
const el15 = document.querySelector(".titleText img:nth-child(15)");
const el16 = document.querySelector(".titleText img:nth-child(16)");
const el17 = document.querySelector(".titleText img:nth-child(17)");
const el18 = document.querySelector(".titleText img:nth-child(18)");

addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  el1.style.transform = `translate(${x / 100}px, ${y / -100}px) scale(0.6)`;
  el2.style.transform = `translate(${x / -80}px, ${y / 150}px) scale(0.6)`;
  el3.style.transform = `translate(${x / 70}px, ${y / -100}px) scale(0.6)`;
  el4.style.transform = `translate(${x / -100}px, ${y / -30}px) scale(0.6)`;
  el5.style.transform = `translate(${x / 500}px, ${y / 70}px) scale(0.6)`;
  el6.style.transform = `translate(${x / -100}px, ${y / 120}px) scale(0.6)`;
  el7.style.transform = `translate(${x / 450}px, ${y / -50}px) scale(0.6)`;
  el8.style.transform = `translate(${x / 100}px, ${y / 500}px) scale(0.6)`;
  el9.style.transform = `translate(${x / 200}px, ${y / -100}px) scale(0.6)`;
  el10.style.transform = `translate(${x / 280}px, ${y / 200}px) scale(0.6)`;
  el11.style.transform = `translate(${x / 120}px, ${y / 60}px) scale(0.6)`;
  el12.style.transform = `translate(${x / -100}px, ${y / -200}px) scale(0.6)`;
  el13.style.transform = `translate(${x / 150}px, ${y / 150}px) scale(0.6)`;
  el14.style.transform = `translate(${x / 100}px, ${y / -100}px) scale(0.6)`;
  el15.style.transform = `translate(${x / -100}px, ${y / 30}px) scale(0.6)`;
  el16.style.transform = `translate(${x / 120}px, ${y / 100}px) scale(0.6)`;
  el17.style.transform = `translate(${x / -150}px, ${y / 200}px) scale(0.6)`;
  el18.style.transform = `translate(${x / -80}px, ${y / 120}px) scale(0.6)`;
});

// 스크롤 이벤트

addEventListener("scroll", () => {
  // main background 변경
  let num1 = mainContainer.offsetTop - 600;
  let num4 = mainContact.offsetTop - 1000;

  if (scrollY > num1 && body.className !== `dark`) {
    main.classList.add("active");
    contactBtn.classList.remove("on");
    sideBarLogo.classList.remove("on");
    goUp.classList.remove("on");
    gitBg.classList.remove("on");
    dark.classList.remove("on");
  } else if (scrollY <= num1) {
    main.classList.remove("active");
    sideBarLogo.classList.add("on");
  }

  if (scrollY > num1 && body.className == `dark`) {
    sideBarLogo.classList.remove("on");
  }

  if (scrollY > num4) {
    main.classList.remove("active");
    contactBtn.classList.add("on");
    goUp.classList.add("on");
    dark.classList.add("on");
  }

  if (scrollY > num4 && body.className !== `dark`) {
    gitBg.classList.add("on");
  }

  // header 색 변경
  let num2 = mainContainer.offsetTop - 300;
  if (scrollY > num2 && body.className !== `dark`) {
    header.classList.add("active");
    header.classList.remove("dark");
  } else if (scrollY <= num2 && body.className !== `dark`) {
    header.classList.remove("active");
  }

  if (scrollY > num2 && body.className == `dark`) {
    header.classList.add("dark");
  }
  if (scrollY <= num2 && body.className == `dark`) {
    header.classList.remove("dark");
    header.classList.remove("active");
  }

  if (scrollY > num4) {
    header.classList.remove("active");
    header.classList.remove("dark");
  }

  // 사이드바 border-right
  let num3 = mainContainer.offsetTop - 50;
  if (scrollY > num3) {
    sideBar.classList.add("on");
  } else if (scrollY <= num3) {
    sideBar.classList.remove("on");
  }

  let num5 = mainContact.offsetTop - 1600;
  if (scrollY > num5) {
    sideBar.classList.remove("on");
  }
});

// mainContact mousemove blur
const pos = document.querySelector(".mainContact");

pos.addEventListener("mousemove", (e) => {
  pos.style.setProperty("--x", e.clientX + "px");
  pos.style.setProperty("--y", e.clientY + "px");
});

const mq1 = window.matchMedia("screen and (min-width: 2000px)");
// addEventListener('resize', () => {
addEventListener("mousemove", (e) => {
  if (mq1.matches) {
    let x = e.clientX;
    let y = e.clientY;

    el1.style.transform = `translate(${x / 100}px, ${y / -100}px) scale(0.65)`;
    el2.style.transform = `translate(${x / -80}px, ${y / 150}px) scale(0.65)`;
    el3.style.transform = `translate(${x / 70}px, ${y / -100}px) scale(0.65)`;
    el4.style.transform = `translate(${x / -100}px, ${y / -30}px) scale(0.65)`;
    el5.style.transform = `translate(${x / 500}px, ${y / 70}px) scale(0.65)`;
    el6.style.transform = `translate(${x / -100}px, ${y / 120}px) scale(0.65)`;
    el7.style.transform = `translate(${x / 450}px, ${y / -50}px) scale(0.65)`;
    el8.style.transform = `translate(${x / 100}px, ${y / 500}px) scale(0.65)`;
    el9.style.transform = `translate(${x / 200}px, ${y / -100}px) scale(0.65)`;
    el10.style.transform = `translate(${x / 280}px, ${y / 200}px) scale(0.65)`;
    el11.style.transform = `translate(${x / 120}px, ${y / 60}px) scale(0.65)`;
    el12.style.transform = `translate(${x / -100}px, ${
      y / -200
    }px) scale(0.65)`;
    el13.style.transform = `translate(${x / 150}px, ${y / 150}px) scale(0.65)`;
    el14.style.transform = `translate(${x / 100}px, ${y / -100}px) scale(0.65)`;
    el15.style.transform = `translate(${x / -100}px, ${y / 30}px) scale(0.65)`;
    el16.style.transform = `translate(${x / 120}px, ${y / 100}px) scale(0.65)`;
    el17.style.transform = `translate(${x / -150}px, ${y / 200}px) scale(0.65)`;
    el18.style.transform = `translate(${x / -80}px, ${y / 120}px) scale(0.65)`;
  }
});
// });
const mq2 = window.matchMedia("screen and (min-width: 2300px)");
// addEventListener('resize', () => {
addEventListener("mousemove", (e) => {
  if (mq2.matches) {
    let x = e.clientX;
    let y = e.clientY;

    el1.style.transform = `translate(${x / 100}px, ${y / -100}px) scale(0.7)`;
    el2.style.transform = `translate(${x / -80}px, ${y / 150}px) scale(0.7)`;
    el3.style.transform = `translate(${x / 70}px, ${y / -100}px) scale(0.7)`;
    el4.style.transform = `translate(${x / -100}px, ${y / -30}px) scale(0.7)`;
    el5.style.transform = `translate(${x / 500}px, ${y / 70}px) scale(0.7)`;
    el6.style.transform = `translate(${x / -100}px, ${y / 120}px) scale(0.7)`;
    el7.style.transform = `translate(${x / 450}px, ${y / -50}px) scale(0.7)`;
    el8.style.transform = `translate(${x / 100}px, ${y / 500}px) scale(0.7)`;
    el9.style.transform = `translate(${x / 200}px, ${y / -100}px) scale(0.7)`;
    el10.style.transform = `translate(${x / 280}px, ${y / 200}px) scale(0.7)`;
    el11.style.transform = `translate(${x / 120}px, ${y / 60}px) scale(0.7)`;
    el12.style.transform = `translate(${x / -100}px, ${y / -200}px) scale(0.7)`;
    el13.style.transform = `translate(${x / 150}px, ${y / 150}px) scale(0.7)`;
    el14.style.transform = `translate(${x / 100}px, ${y / -100}px) scale(0.7)`;
    el15.style.transform = `translate(${x / -100}px, ${y / 30}px) scale(0.7)`;
    el16.style.transform = `translate(${x / 120}px, ${y / 100}px) scale(0.7)`;
    el17.style.transform = `translate(${x / -150}px, ${y / 200}px) scale(0.7)`;
    el18.style.transform = `translate(${x / -80}px, ${y / 120}px) scale(0.7)`;
  }
});
// });
