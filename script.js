// Smooth scrolling for the navigation bar
$(document).ready(function () {
    // Smooth scrolling for anchor links
    $('.NavigationBar a').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });
});

// Smooth scrolling to the landing page bar
$('.Name').on('click', function () {
    $('html, body').animate({
        scrollTop: $('.LandingPage').offset().top
    }, 'slow');
});

const tabs = document.querySelectorAll('.option');
const contentTexts = document.querySelectorAll('.text');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove 'active' from all tabs and content
    tabs.forEach(t => t.classList.remove('active'));
    contentTexts.forEach(c => c.classList.remove('active'));

    // Add 'active' to the clicked tab and corresponding content
    tab.classList.add('active');
    const activeTab = tab.getAttribute('data-tab');
    document.querySelector(`.text.${activeTab}`).classList.add('active');
  });
});


// Get all the toggle buttons
const toggleButtons = document.querySelectorAll('.toggle-button');

// Loop through each button and add event listener
toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the associated toggle content (instructions list)
        const content = this.nextElementSibling;

        // Toggle the "open" class to show/hide the content
        content.classList.toggle('open');

        // Optionally, you could change the button text on toggle
        if (content.classList.contains('open')) {
            this.textContent = 'Hide Instructions';
        } else {
            this.textContent = 'Show Instructions';
        }
    });
});