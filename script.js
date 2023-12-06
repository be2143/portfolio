// Smooth scrolling for the navigation bar
$(document).ready(function(){
    // Smooth scrolling for anchor links
    $('.NavigationBar a').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800); // Adjust the speed of scrolling if needed
    });
});

