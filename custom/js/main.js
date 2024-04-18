console.log("Iftekher Mahmud Pervez")

$(document).ready(function(){

// intro section
var intro = $(".intro");

setTimeout(function(){
    intro.addClass('animate__hinge');
    // intro.addClass('hide')
}, 3500);

setTimeout(function(){
    intro.addClass('hide')
}, 6500);
// intro section

// footer dynamic date set
var target =$("body > footer > div > p > span");
var date = new Date();
var year = date.getFullYear();
target.text(year);
// footer dynamic date set


// dark theme switch function
$('.theme-btn input').change(function(){

    if ($(this).prop('checked')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

    // Update the theme based on the localStorage value
    if (localStorage.getItem('theme') === 'dark') {
        $('html').attr('data-bs-theme', 'dark');
    } else {
        $('html').attr('data-bs-theme', 'light');
    }

});

if (localStorage.getItem('theme') === 'dark') {
    $('html').attr('data-bs-theme', 'dark');
    $('.theme-btn input').prop('checked', true); // Check the checkbox if theme is dark
} else {
    $('html').attr('data-bs-theme', 'light');
    $('.theme-btn input').prop('checked', false); // Uncheck the checkbox if theme is light
}

// dark theme switch function



})


