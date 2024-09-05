function adjustMainContainer() {
    // Get the height of the navbar
    var navbarHeight = document.querySelector('.navbar').offsetHeight;

    // Set the top margin of the main container to the height of the navbar
    var mainContainer = document.querySelector('.main-container');
    mainContainer.style.marginTop = navbarHeight + 'px';

    // Adjust the min-height of the main container to fit the viewport
    mainContainer.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
}

// Adjust on DOM load and window resize
window.addEventListener('DOMContentLoaded', adjustMainContainer);
window.addEventListener('resize', adjustMainContainer);

// dynamic form fields
document.getElementById('enquiryType').addEventListener('change', function () {
    var quoteFields = document.getElementById('quoteFields');
    if (this.value === 'RequestQuote') {
        quoteFields.style.display = 'block';
    } else {
        quoteFields.style.display = 'none';
    }
});
