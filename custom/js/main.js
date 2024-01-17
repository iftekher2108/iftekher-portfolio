console.log("Iftekher Mahmud Pervez")

// intro section
let intro =$('.intro');
setTimeout(() => {
    intro.removeClass('intro-window');
    intro.addClass('hide');
}, 10000);
// intro section

// footer dynamic date set
let target =$("body > footer > div > p > span");
let date = new Date();
let year = date.getFullYear();
target.text(year);
// footer dynamic date set