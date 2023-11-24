
function scrolll(sliderid){
    const slider=document.getElementById(sliderid)
    console.log("client",slider.clientWidth)
    if(slider.scrollLeft==0){
        slider.scrollTo(400,0)
    }
    slider.scrollBy(-300 ,0);
    console.log("width",slider.scrollWidth)
    console.log("left",slider.scrollLeft);
    
}
// slider.scrollTo(330,0);
function scrollr(sliderid){
    const slider=document.getElementById(sliderid)
    if(slider.scrollLeft==slider.scrollWidth-slider.clientWidth){
        // scrolll()
        slider.scrollTo(-slider.scrollWidth,0)
    }
    else
    slider.scrollBy(300,0);
    console.log("width r",slider.scrollWidth);
    console.log("rughtt",slider.scrollLeft);
}

console.log("its js page to scroll33333");
function displays(element,elements){
    
    let classElements=document.getElementsByClassName(elements);
    for(let i=0;i<classElements.length;i++)
    classElements[i].style.display='none';

    let idelement=document.getElementById(element);
    
    console.log('its working')
    if(idelement.style.display=='none')
    idelement.style.display='block';
    else
    idelement.style.display='none';
// do this ;..
    
}

// destination img
function image(imageid,bigimage){
   let  imageids=document.getElementById(imageid);
    console.log("its half worling")
    let bigImage=document.getElementById(bigimage);
    bigImage.src=imageids.src;
    console.log("full working")
}
// closing
function closing(dest){
    destination=document.getElementById(dest);
    destination.style.display='none';
    console.log('npt woerijfdjla')
}