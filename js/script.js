(function () {
  //헤더에 있는 스크롤바
  window.onscroll = function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

      var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      var contentHeight =  scrollHeight - clientHeight;
      var scrollBar = (scrollTop / contentHeight) * 100;

      document.getElementById('scroll-bar').style.width = scrollBar + '%';
  };
  
  // section2에 슬라이드 전체 width값 자동으로 구하기
  const studyList = document.querySelector(".study_list");
  const slideContent = document.querySelector(".slide_content");
  const slideContents = document.querySelectorAll(".slide_content");
  const slideContentLength = slideContents.length;
  const slideContentWidth = slideContent.getBoundingClientRect().width;
  console.log(slideContentWidth);

  studyList.style.width = (slideContentWidth * slideContentLength) + (42 * slideContentLength)+ "px";

  console.log(studyList.getBoundingClientRect().width)

  // 팝업 생성 및 제거
  const popup = document.querySelector('#popup_wrap');
  const popClose = document.querySelector(".close_button");
  const popupButton = document.querySelector('.button_area button');

  const popupShow = () => {
    popup.classList.remove("popup_hide");
  }

  const popupClose = () => {
    popup.classList.add("popup_hide");
  }
  

  popup.classList.add("popup_hide");
  popupButton.addEventListener("click", popupShow);
  popClose.addEventListener("click", popupClose);

  const projectContent = document.querySelector("#section3 .project_list .project_content")
  const projectContentWidth =  projectContent.getBoundingClientRect().width;
  
  projectContent.style.height = projectContentWidth;
  
  window.addEventListener('load', () => {
    setTimeout(() => scrollTo(0, 0), 100);
  });
  
})();
