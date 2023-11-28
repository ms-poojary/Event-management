
// responsive
const navbar=document.querySelector("[data-navbar]");
const navbarlinks=document.querySelectorAll("[data-nav-link]")
const menuToggleBtn=document.querySelector("[data-navbtn]");

menuToggleBtn.addEventListener('click',function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active");
})

for (let i=0;i<navbarlinks.length;i++){
    navbarlinks[i].addEventListener("click",function(){
        menuToggleBtn.classList.toggle("active");
    })
}

// events
let events=document.getElementById('events');
let eventlist=document.getElementById('eventlist');
events.addEventListener("click",()=>{
    eventlist.style.display=(eventlist.style.display=='none')?'block':'none';
})
let home=document.getElementsByClassName('home')[0];
home.addEventListener('click',()=>{
    eventlist.style.display='none';
})

// slideshow
slideindex=0;
function slideshow(){
    let i;
    const slides=document.getElementsByClassName('slides');
    const dots=document.getElementsByClassName('dot')
    for(i=0;i<slides.length;i++)
    slides[i].style.display='none';
    
    for(i=0;i<dots.length;i++)
    dots[i].className=dots[i].className.replace(" active","");

    slideindex++;
    if(slideindex>slides.length)
    slideindex=1;

    slides[slideindex-1].style.display='block';
    dots[slideindex-1].className+=' active';
    setTimeout(slideshow,1500)
}




