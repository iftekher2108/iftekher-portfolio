$(document).ready(function () {
    $.getScript("../../custom/bootstrap/js/bootstrap.bundle.min.js");
    $.getScript("../../custom/plugins/ripple/ripple.min.js",function() {
        $.ripple(".btn", {
            debug: !1,
            on: "mousedown",
            opacity: 0.4,
            color: "auto",
            multi: !0,
            duration: 0.7,
            rate: function (t) {
              return t;
            },
            easing: "linear",
          }); 
    })
    $.getScript("../../custom/plugins/slick/slick.min.js",function(){
        $('.slick-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            autoplay: true,
            autoplaySpeed: 1500,
        })
    })
    $.getScript("../../custom/plugins/aos/dist/aos.js",function(){
        AOS.init({
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            offset: 120,
            delay: 200,
            duration: 500,
            easing: 'ease-in-out',
            mirror: false,
            once: true
        });
    })
  $("img").on("mousedown", function (t) {
    t.preventDefault();
  }),
    localStorage.setItem("theme", "dark"),
    (btn_all = $(".btn-all")),
    (btn_bootstrap = $(".btn-bootstrap")),
    (btn_wordpress = $(".btn-wordpress")),
    (btn_others = $(".btn-others")),
    (project_bootstrap = $(".bootstrap")),
    (project_wordpress = $(".wordpress")),
    (project_others = $(".others")),
    btn_all.click(function () {
      btn_all.addClass("active"),
        btn_wordpress.removeClass("active"),
        btn_bootstrap.removeClass("active"),
        btn_others.removeClass("active"),
        project_bootstrap.fadeIn(250),
        project_wordpress.fadeIn(250),
        project_others.fadeIn(250);
    }),
    btn_bootstrap.click(function () {
      btn_all.removeClass("active"),
        btn_wordpress.removeClass("active"),
        btn_bootstrap.addClass("active"),
        btn_others.removeClass("active"),
        project_bootstrap.fadeIn(250),
        project_wordpress.fadeOut(250),
        project_others.fadeOut(250);
    }),
    btn_wordpress.click(function () {
      btn_all.removeClass("active"),
        btn_wordpress.addClass("active"),
        btn_bootstrap.removeClass("active"),
        btn_others.removeClass("active"),
        project_bootstrap.fadeOut(250),
        project_wordpress.fadeIn(250),
        project_others.fadeOut(250);
    }),
    btn_others.click(function () {
      btn_all.removeClass("active"),
        btn_wordpress.removeClass("active"),
        btn_bootstrap.removeClass("active"),
        btn_others.addClass("active"),
        project_bootstrap.fadeOut(250),
        project_wordpress.fadeOut(250),
        project_others.fadeIn(250);
    }),
    $(".theme-btn input").change(function () {
      $(this).prop("checked")
        ? localStorage.setItem("theme", "dark")
        : localStorage.setItem("theme", "light"),
        "dark" === localStorage.getItem("theme")
          ? $("html").attr("data-bs-theme", "dark")
          : $("html").attr("data-bs-theme", "light");
    })
    "dark" === localStorage.getItem("theme")
      ? ($("html").attr("data-bs-theme", "dark"),
        $(".theme-btn input").prop("checked", !0))
      : ($("html").attr("data-bs-theme", "light"),
        $(".theme-btn input").prop("checked", !1))

}),
  $(document).on("contextmenu", function (t) {
    t.preventDefault();
  }),
  $(document).keydown(function (t) {
    if (123 === t.which) return !1;
  });
