const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));


$("#show-more-category, .show-less").hide();
$(".show-all-btn").on("click", function () {
  $("#show-more-category, .show-less, .show-more").slideToggle();
});

$(document).ready(function () {
  $('a href= "#top"').on("click", function () {
    $("html,body").animate({
      scrollTop: 0,
      Time: 6000,
    });
  });
});