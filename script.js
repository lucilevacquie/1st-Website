var slideIndex=0;

function plusSlides(n){
    showSlides(slideIndex+=n)
}

function currentSlide(n){
    showSlides(slideIndex=n);
}

function showSlides(n){
    var i;


    var slides=document.getElementsByClassName('mySlides');
    if (slides.length===0) return
    var dots=document.getElementsByClassName('dot');


    if (n>slides.length){slideIndex=1}
    if (n<1){slideIndex=slides.length}
    for (i=0;i<slides.length;i++){
        slides[i].style.display='none';
    }
    for (i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace('active','');
    }
    slides[slideIndex-1].style.display='block';
    dots[slideIndex-1].className+=' active';
}
function onPageLoad(){
    highlightCurrentLink()
    showSlides(0)
    accordion()
}
window.onload=onPageLoad

function highlightCurrentLink(){
    var path=document.URL.substring(document.URL.lastIndexOf('/')+1)
    var currentLinks=document.querySelectorAll('a[href="'+path+'"]')
    currentLinks.forEach(function(link){
        link.className += ' highlight-link'
    })
}

function accordion(){
    var acc=document.getElementsByClassName('accordion');

    for (var i=0;      i < acc.length;       i++){
        acc[i].addEventListener('click',function(){
            this.classList.toggle('active');
            var panel=this.nextElementSibling;
            if(panel.style.display==='block'){
                panel.style.display='none';
            } else{
                panel.style.display='block';
            }
        })
    }
}