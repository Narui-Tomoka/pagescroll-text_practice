$(function () {
  $(".features__item").on("mouseenter", function () {
    $(this).addClass("is-active");
  });

  $(".features__item").on("mouseleave", function () {
    $(this).removeClass("is-active");
  });
});
