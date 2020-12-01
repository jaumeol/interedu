var curSlide; 
var slides;
var timer=null;
var slideTime;
  
function nextSlide() {
 if (timer) slides[curSlide++].style="visibility:visible"; 
 if (curSlide==slides.length) timer=null;
 else { setTimeout(nextSlide,slideTime); }
}

function slideStart(thisId,slideT)
{
 curSlide=0;
  slideTime=slideT;
  slides=document.getElementById(thisId).getElementsByTagName('li')
 for (k=0; k<slides.length; k++) { slides[k].style="visibility:hidden"; }
 timer=setTimeout(nextSlide,slideTime);
}