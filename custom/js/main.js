$(document).ready((function(){var t=$(".intro");setTimeout((function(){t.addClass("animate__hinge")}),3500),setTimeout((function(){t.addClass("hide")}),6500);var e=$("body > footer > div > p > span"),a=(new Date).getFullYear();e.text(a),$(".theme-btn input").change((function(){$(this).prop("checked")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light"),"dark"===localStorage.getItem("theme")?$("html").attr("data-bs-theme","dark"):$("html").attr("data-bs-theme","light")})),"dark"===localStorage.getItem("theme")?($("html").attr("data-bs-theme","dark"),$(".theme-btn input").prop("checked",!0)):($("html").attr("data-bs-theme","light"),$(".theme-btn input").prop("checked",!1))}));