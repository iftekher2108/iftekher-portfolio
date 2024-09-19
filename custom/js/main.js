$(document).ready(function () {
 AOS.init({
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    offset: 120,
    delay: 300,
    duration: 700,
    easing: "ease",
    mirror: false,
    once: true,
  });
    $.ripple(".btn", {
        debug: !1,
        on: "mousedown",
        opacity: 0.4,
        color: "auto",
        multi: !0,
        duration: 0.7,
        rate: function (e) {
          return e;
        },
        easing: "linear",
      });

    new Typed(".skill-group .skill-base h3", {
        strings: [
          "Website Developer",
          "WP website dev",
          "Problem Solver",
          "PHP developer",
          "Laravel developer",
          "Vue developer",
          "Flutter developer",
        ],
        typeSpeed: 60,
        backDelay: 500,
        backSpeed: 60,
        loop: !0,
      })

localStorage.setItem("theme", "dark");
  var e = $(".intro");
  setTimeout(function () {
    e.addClass("animate__hinge");
  }, 3000)
    setTimeout(function () {
      e.addClass("hide");
    }, 5300)
    $("img").on("mousedown", function (e) {
      e.preventDefault();
    });
  var t = $("body > footer > div > p > span")
    a = new Date().getFullYear();
  t.text(a)
    $(".theme-btn input").change(function () {
      $(this).prop("checked")
        ? localStorage.setItem("theme", "dark")
        : localStorage.setItem("theme", "light"),
        "dark" === localStorage.getItem("theme")
          ? $("html").attr("data-bs-theme", "dark")
          : $("html").attr("data-bs-theme", "light");
    }),
    "dark" === localStorage.getItem("theme")
      ? ($("html").attr("data-bs-theme", "dark"),
        $(".theme-btn input").prop("checked", !0))
      : ($("html").attr("data-bs-theme", "light"),
        $(".theme-btn input").prop("checked", !1))
        particlesJS.load('particles', './custom/js/particles.json', function() {
            // console.log('callback - particles.js config loaded');
        }); 
})

  $(document).on("contextmenu", function (e) {
    e.preventDefault();
  }),
  $(document).keydown(function (e) {
    if (123 === e.which) return !1;
  });
