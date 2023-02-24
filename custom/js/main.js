console.log("iftekher mahmud pervez")









let intro =document.querySelector('.intro');
console.log(intro)

setTimeout(() => {
    intro.classList.remove('intro-window');
    intro.classList.add('hide');
}, 10000);






// footer dynamic date set
let target =document.querySelector("body > footer > div > p > span");
let date = new Date();
let year = date.getFullYear();
target.innerHTML=year;
// footer dynamic date set