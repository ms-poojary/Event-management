
function scrolll(sliderid){
    const slider=document.getElementById(sliderid)
    
    console.log("client",slider.clientWidth)
    if(slider.scrollLeft===0)
    {
        slider.scrollTo(slider.scrollWidth,0)
    }
    else{
    slider.scrollBy(-300 ,0);
    }
    console.log("width",slider.scrollWidth)
    console.log("left",slider.scrollLeft);
    
}
// slider.scrollTo(330,0);
// not working
function scrollr(sliderid){
    const slider=document.getElementById(sliderid)
    if(slider.scrollLeft===1806.3157958984375)
    slider.scrollTo(0,0)
    else{
    slider.scrollBy(300,0);
    }
    console.log("r ",(slider.scrollWidth-slider.clientWidth));
    console.log("leftscroll",slider.scrollLeft)
    // console.log("width r",slider.scrollWidth);
    // console.log("rughtt",slider.scrollLeft);
}


// displaying contents
function displays(element,elements){
    let classElements=document.getElementsByClassName(elements);
    for(let i=0;i<classElements.length;i++)
    classElements[i].style.display='none';

    let idelement=document.getElementById(element);
    
    if(idelement.style.display=='none')
    idelement.style.display='block';
    else
    idelement.style.display='none';   
}

// destination img
function image(imageid,bigimage){
   let  imageids=document.getElementById(imageid);
    let bigImage=document.getElementById(bigimage);
    bigImage.src=imageids.src;
}
// closing
function closing(dest){
    destination=document.getElementById(dest);
    destination.style.display='none';
}