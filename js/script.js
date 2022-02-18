// Модальное окно на главной странице
$(".popup-fade__popup-close").click( () => {
  $(".popup-fade").addClass("hidden");
});

$(".main__button-new").click( () => {
  $(".popup-fade").removeClass("hidden");
});

$(window).keydown((event) => {
  if (event.key == "Escape"){
    $(".popup-fade").addClass("hidden");
  }
});

// Окно справки
$("#btn-info").click( () => {
  $(".check-main__info-page").toggleClass("hidden");
});