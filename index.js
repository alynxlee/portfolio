const header = document.querySelector('header');
const main = document.querySelector('main');
const mainContainer = document.querySelector('.mainContainer');
const mainContact = document.querySelector('.mainContact');
const sideBar = document.querySelector('.mainFixedBar');

// mainTitle 텍스트 움직임

addEventListener('scroll', () => {
  // main background 변경
  let num1 = mainContainer.offsetTop - 600;
  let num4 = mainContact.offsetTop - 1000;
  if (scrollY > num1) {
    main.classList.add('active');
  } else if (scrollY <= num1) {
    main.classList.remove('active');
  }

  if (scrollY > num4) {
    main.classList.remove('active');
  }

  // header 색 변경
  let num2 = mainContainer.offsetTop - 555;
  if (scrollY > num2) {
    header.classList.add('active');
  } else if (scrollY <= num2) {
    header.classList.remove('active');
  }

  if (scrollY > num4) {
    header.classList.remove('active');
  }

  // 사이드바 border-right
  let num3 = mainContainer.offsetTop - 50;
  if (scrollY > num3) {
    sideBar.classList.add('on');
  } else if (scrollY <= num3) {
    sideBar.classList.remove('on');
  }
});

// mainContact mousemove blur
const pos = document.documentElement;

pos.addEventListener('mousemove', e => {
  pos.style.setProperty('--x', e.clientX + 'px');
  pos.style.setProperty('--y', e.clientY + 'px');
});
