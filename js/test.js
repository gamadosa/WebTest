window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
    var scrollY = window.scrollY || window.pageYOffset;
  
    if (scrollY > 1) {
      scrollToTopButton.style.opacity = 1;
    } else {
      scrollToTopButton.style.opacity = 0;
    }
  });
  

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}

function buttonClick(btnNumber) {
  //버튼을 눌렀을때 모든 clicked 클래스 제거
  let clickedBtnArr = document.getElementsByClassName("clicked");  
  Array.from(clickedBtnArr).forEach(function(x) {
      x.classList.remove("clicked");
  });
  
  //선택한 버튼 ckicked 추가
  let clickedButton = document.getElementById("button" + btnNumber);
  clickedButton.classList.add("clicked");


  //버튼넘버에 맞는 내용보여주기 

  let indexArr = document.getElementsByClassName("index");  
  Array.from(indexArr).forEach(x => {
    x.style.display = 'none';
  });
   
  let index = document.getElementById("index"+btnNumber);
  index.style.display = 'block';


  
}

