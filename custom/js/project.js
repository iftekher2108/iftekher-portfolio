$(document).ready((function(){btn_all=$(".btn-all"),btn_bootstrap=$(".btn-bootstrap"),btn_wordpress=$(".btn-wordpress"),btn_others=$(".btn-others"),project_bootstrap=$(".bootstrap"),project_wordpress=$(".wordpress"),project_others=$(".others"),btn_all.click((function(){btn_all.addClass("active"),btn_wordpress.removeClass("active"),btn_bootstrap.removeClass("active"),btn_others.removeClass("active"),project_bootstrap.slideDown(300),project_wordpress.slideDown(300),project_others.slideDown(300)})),btn_bootstrap.click((function(){btn_all.removeClass("active"),btn_wordpress.removeClass("active"),btn_bootstrap.addClass("active"),btn_others.removeClass("active"),project_bootstrap.slideDown(300),project_wordpress.slideUp(300),project_others.slideUp(300)})),btn_wordpress.click((function(){btn_all.removeClass("active"),btn_wordpress.addClass("active"),btn_bootstrap.removeClass("active"),btn_others.removeClass("active"),project_bootstrap.slideUp(300),project_wordpress.slideDown(300),project_others.slideUp(300)})),btn_others.click((function(){btn_all.removeClass("active"),btn_wordpress.removeClass("active"),btn_bootstrap.removeClass("active"),btn_others.addClass("active"),project_bootstrap.slideUp(300),project_wordpress.slideUp(300),project_others.slideDown(300)})),$(".theme-btn input").change((function(){$(this).prop("checked")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light"),"dark"===localStorage.getItem("theme")?$("html").attr("data-bs-theme","dark"):$("html").attr("data-bs-theme","light")})),"dark"===localStorage.getItem("theme")?($("html").attr("data-bs-theme","dark"),$(".theme-btn input").prop("checked",!0)):($("html").attr("data-bs-theme","light"),$(".theme-btn input").prop("checked",!1))}));