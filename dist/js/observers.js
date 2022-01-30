/*  observe Text  */

/*  This selects all the elements with a class of txtSlider */
const txtSliders = document.querySelectorAll('.txtSlider');

/*  This sets the Options for the Observer  */
const slideOptions = {
    rootMargin: "-150px",
    threshold: 0
}

/*  This Creates the IntersectionObserver() called "slideOnScroll"   */
const slideOnScroll = new IntersectionObserver(function(entries, slideOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("slideTxt");
            slideOnScroll.unobserve(entry.target);
        }
    });
}, slideOptions);


/*  This Calls the IntersectionObserver  */
txtSliders.forEach(txtslider => {
    slideOnScroll.observe(txtslider);
});


/*  observe Images  */

/*  select images with data-src attribute   */
const images = document.querySelectorAll('[data-src]');

/*  sets when the observer fires */
const imgOptions = {
    thrshold: 0,
    rootMargin: "0px 0px 300px 0px"
}

/*  seperate function outside of the observer   */
function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if(!src) {
        return;
    }
    img.src = src;
}

/*  creates the observer    */
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);

})