$(function(){
    'use strict';
    $('.toggle-sidebar').on('click', function () {
        $('.content-area , .sidebar').toggleClass('no-sidebar');
            });
            //toggle-submenu
            $('.toggle-submenu').on('click', function () {
                $(this).find(".fa-angle-right").toggleClass('down');
                $(this).next(".child-links").slideToggle();
            });
            
//open and close full screen
$('.toggle-fullscreen').on("click", function () {
    $(this).toggleClass("full-screen");

    if ($(this).hasClass('full-screen')){ //page is now full screen
        openFullscreen();
        
    }else { //page is not full screen
        closeFullscreen()    
    }
        });
    //toggle settings box 
    $(".toggle-settings").on("click", function(){
        $(this).find("i").toggleClass("fa-spin");
      $(this).parent().toggleClass('show-settings');
    });
    //switch color theme
    var themesClass = [];
    $(".color-options li").each(function(){
      themesClass.push($(this).data('theme'));
    });
    
    $(".color-options li").on('click', function(){
      $(this).addClass('active').siblings().removeClass('active');
      $("body").removeClass(themesClass.join(" ")).addClass($(this).data("theme"));
    });

    //switch font option
    var fontClass = [];
    $(".font-option select option").each(function(){
      fontClass.push($(this).val());
    });



    $(".font-option select").on("change", function () {
         $("body").removeClass(fontClass.join(" ")).addClass($(this).find("option:selected").val());
    });
   
});








/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}