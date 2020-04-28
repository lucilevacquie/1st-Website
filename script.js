// lets hold a slide position for each container
var indexes = {
    aboutme: 0,
    paint: 0,
    travel: 0,
}

function plusSlides(n, id){
    indexes[id] += n
    showSlides()
}

function currentSlide(n, id){
    indexes[id] = n
    showSlides()
}

function showSlides(){
    // find an array (list) of all of the slideshow containers on the page
    var listOfContainers = document.getElementsByClassName('slideshow-container')
    // if there are no containers, we can stop here! :)
    if (listOfContainers.length === 0) {
        return
    }
    // loop through each of the found slideshow containers in the list
    for (var i = 0; i < listOfContainers.length; i++) {
        // first, we need to grab the slideshow container element from the list above using the index (i)
        var slideshowContainer = listOfContainers[i]
        // then we will save the id to a variable for later use
        var id = slideshowContainer.id
        // next we will find all of the mySlide elements inside the current slideshow container
        var slides = slideshowContainer.getElementsByClassName('mySlides')
        // if there are no slides, log a warning and skip to the next slideshow container
        if (slides.length === 0) {
            console.warn('you have no slides!')
            continue
        }
        // check that n doesnt exceed the amount of slides
        if (indexes[id] > slides.length - 1) {
            indexes[id] = 0
        }
        // check that n doesnt go below 0
        if (indexes[id] < 0) {
            indexes[id] = slides.length - 1
        }
        // next we will find all of the dot elements inside the current slideshow container
        var dots = slideshowContainer.getElementsByClassName('dot')
        // if there are no dots found, log a warning an skip to the next container
        if (dots.length === 0) {
            console.warn('you have no dots!')
            continue
        }
        // loop through each slide and set to display none
        for(var u = 0; u < slides.length; u++) {
            // grab the slide element using the index (u)
            var slide = slides[u]
            // make invisible (display: none)
            slide.style.display = 'none'
        }
        // loop through each dot and remove the 'active' class
        for(var d = 0; d < dots.length; d++) {
            // grab the dot element using the index (d)
            var dot = dots[d]
            // update the classname to the current classname WITHOUT the word 'active'
            dot.className = dot.className.replace('active', '')
        }
        // make the slide visible
        slides[indexes[id]].style.display = 'block'
        // set 'active' on the dot
        dots[indexes[id]].className += " active"
    }
}

function onPageLoad(){
    highlightCurrentLink()
    showSlides()
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
