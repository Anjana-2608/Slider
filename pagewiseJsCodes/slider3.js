let prevBtn=document.getElementsByClassName('prev')[0];
let nextBtn=document.getElementsByClassName('next')[0];

let allSlides=document.querySelectorAll('.slide');

let currSlideIndex=0;

const disablePreBtn=()=>{
    prevBtn.style.pointerEvents="none";
    prevBtn.style.opacity=0.5;
}

const enablePreBtn=()=>{
    prevBtn.style.pointerEvents="auto";
    prevBtn.style.opacity=1;
}

const disableNextBtn=()=>{
    nextBtn.style.pointerEvents="none";
    nextBtn.style.opacity=0.5;
}

const enableNextBtn=()=>{
    nextBtn.style.pointerEvents="auto";
    nextBtn.style.opacity=1;
}

const handlePrevBtnClick=()=>{
    allSlides[currSlideIndex].style.display='none';
    allSlides[currSlideIndex-1].style.display='block';
    currSlideIndex-=1;
    currSlideIndex===0?disablePreBtn():enablePreBtn()
    enableNextBtn();
}

const handleNextBtnClick=()=>{
    allSlides[currSlideIndex].style.display='none';
    allSlides[currSlideIndex+1].style.display='block';
    currSlideIndex+=1;
     currSlideIndex===(allSlides.length-1)?disableNextBtn():enableNextBtn()
     enablePreBtn();
}

disablePreBtn();

prevBtn.addEventListener('click',handlePrevBtnClick);
nextBtn.addEventListener('click',handleNextBtnClick);

// ========================================================================

// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');
// const allSlides = document.querySelectorAll('.slide');

// let currSlideIndex = 0;

// // Utility to set button state
// const setBtnState = (btn, enabled) => {
//   btn.style.pointerEvents = enabled ? "auto" : "none";
//   btn.style.opacity = enabled ? 1 : 0.5;
// };

// // Show slide by index
// const showSlide = (index) => {
//   allSlides.forEach((slide, i) => {
//     slide.style.display = i === index ? 'block' : 'none';
//   });
// };

// // Update navigation button states
// const updateButtons = () => {
//   setBtnState(prevBtn, currSlideIndex > 0);
//   setBtnState(nextBtn, currSlideIndex < allSlides.length - 1);
// };

// // Navigation handlers
// const handlePrevBtnClick = () => {
//   if (currSlideIndex > 0) {
//     currSlideIndex--;
//     showSlide(currSlideIndex);
//     updateButtons();
//   }
// };

// const handleNextBtnClick = () => {
//   if (currSlideIndex < allSlides.length - 1) {
//     currSlideIndex++;
//     showSlide(currSlideIndex);
//     updateButtons();
//   }
// };

// // Init
// showSlide(currSlideIndex);
// updateButtons();

// // Event listeners
// prevBtn.addEventListener('click', handlePrevBtnClick);
// nextBtn.addEventListener('click', handleNextBtnClick);

