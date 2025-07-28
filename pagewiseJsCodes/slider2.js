let prevBtn=document.getElementsByClassName('prev')[0];
let nextBtn=document.getElementsByClassName('next')[0];

let allSlides=document.querySelectorAll('.slide');

let currSlideIndex=0;

const handlePrevBtnClick=()=>{
    allSlides[currSlideIndex].style.display='none';
    currSlideIndex = (currSlideIndex - 1 + allSlides.length) % allSlides.length;
    allSlides[currSlideIndex].style.display='block';;
}

const handleNextBtnClick=()=>{
    allSlides[currSlideIndex].style.display='none';
    currSlideIndex = (currSlideIndex + 1) % allSlides.length;
    allSlides[currSlideIndex].style.display='block';
}

prevBtn.addEventListener('click',handlePrevBtnClick);
nextBtn.addEventListener('click',handleNextBtnClick);