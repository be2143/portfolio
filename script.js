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
// Smooth scrolling to the landing page bar
$('.Name').on('click', function() {
    $('html, body').animate({
      scrollTop: $('.LandingPage').offset().top
    }, 'slow');
  });
  


// Function to check if element is in viewport
// function isElementInViewport(elem) {
//     var elementTop = elem.offset().top;
//     var elementBottom = elementTop + elem.outerHeight();
//     var viewportTop = $(window).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();
//     return elementBottom > viewportTop && elementTop < viewportBottom;
// }

// $(document).ready(function() {
//     // Check on scroll if the Projects section is fully in the viewport
//     $(window).scroll(function() {
//         var projectsSection = $('#projects'); // Change to your projects section ID
//         if (isElementInViewport(projectsSection)) {
//             // Projects section is fully in the viewport
//             $('body').addClass('projects-background'); // Add a class to change background color
//         } else {
//             // Projects section is not fully in the viewport
//             $('body').removeClass('projects-background'); // Remove the class to revert the background color
//         }
//     });
// });

// Function to check if element is in viewport
// function isElementInViewport(elem) {
//     var elementTop = elem.offset().top;
//     var elementBottom = elementTop + elem.outerHeight();
//     var viewportTop = $(window).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();
//     return elementBottom > viewportTop && elementTop < viewportBottom;
// }

// $(document).ready(function() {
//     // Check on scroll if the Projects section is fully in the viewport
//     $(window).scroll(function() {
//         var projectsSection = $('#projects'); // Change to your projects section ID
//         var nameText = $('.Name'); // Change to the class or ID of your name text
//         var navText = $('.NavigationBar a'); // Change to the class or ID of your navigation text

//         if (isElementInViewport(projectsSection)) {
//             // Projects section is fully in the viewport
//             $('body').addClass('projects-background'); // Add a class to change background color
//             nameText.addClass('name-color'); // Add a class to change name text color
//             navText.addClass('nav-color'); // Add a class to change navigation text color
//         } else {
//             // Projects section is not fully in the viewport
//             $('body').removeClass('projects-background'); // Remove the class to revert background color
//             nameText.removeClass('name-color'); // Remove the class to revert name text color
//             navText.removeClass('nav-color'); // Remove the class to revert navigation text color
//         }
//     });
// });

