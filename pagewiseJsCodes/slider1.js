let allSlides=document.querySelectorAll('.slide');

let currSlideIndex=0;

const handleNextSlideShow=()=>{
    allSlides[currSlideIndex].style.display='none';
    currSlideIndex = (currSlideIndex + 1) % allSlides.length;
    allSlides[currSlideIndex].style.display='block';
}


setInterval(()=>{
    handleNextSlideShow();
},5000)