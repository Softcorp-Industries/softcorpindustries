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