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


})


