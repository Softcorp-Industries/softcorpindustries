alert('Fuck You');

/*  This selects all the elements with a class of txtSlider */
const txtSliders = document.querySelectorAll('.txtSlider');

/*  This sets the Options for the Observer  */
const slideOptions = {
    rootMargin: "0% 0% -50% 0%",
    threshold: 1
}

/*  This Creates the IntersectionObserver()   */
const slideOnScroll = new IntersectionObserver(function(entries, slideOnScroll) {
    entries.forEach(entry => {
        if(!isIntersecting) {
            return;
        } else {
            entry.target.classList.add("slideTxt");
            slideOnScroll.unobserve(entry.target);
        }
    })
}, slideOptions);

txtSliders.forEach(txtSlider => {
    slideOnScroll.observe(txtSlider);
});