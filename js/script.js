$(() => {

  $(".menu-bottom li a ").on("click", function(e) {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page == '')
      e.preventDefault();
  });

  var menuBottomActive = -1

  $(".btn-grow").click(function(){
    $(this).parent().parent().toggleClass("com-item-active")
  })

  $(".menu-bottom li").on('click', function() {

    $("#close-submenu").css({
      'visibility': 'visible'
    })

    let idx = $(this).index()
    if(menuBottomActive != -1) {
      desactivateSubMenu(menuBottomActive)
    }
    
    menuBottomActive = idx
    activateSubMenu(idx)
  });

  $("#close-submenu").on('click', function() {
    $(this).css({
      'visibility': 'hidden'
    })
    desactivateSubMenu(menuBottomActive)
    menuBottomActive = -1
  })

  $("#event-list").on('click', function() {
    $(".event-content").toggleClass("full-width")
  })

  var activeMobileMenu = 0

  $(".mobile-main").click(function() {

    $(".submenu-mobile").eq(activateSubMenu).removeClass("active-submenu")
    activateSubMenu = $(".mobile-main").index(this)
    $(this).next().addClass("active-submenu")

  })

  var activeMobileSubMenu = 0

  $(".mbm-main").click(function() {

    if(activeMobileSubMenu == $(".mbm-main").index(this) && $(this).hasClass("mbm-main-active")) {
      $(".mbm-main").eq(activeMobileSubMenu).removeClass("mbm-main-active")
      $(".mbm-submenu").eq(activeMobileSubMenu).removeClass("mbm-submenu-active")
      return
    }

    $(".mbm-main").eq(activeMobileSubMenu).removeClass("mbm-main-active")
    $(this).addClass("mbm-main-active")
    $(".mbm-submenu").eq(activeMobileSubMenu).removeClass("mbm-submenu-active")
    activeMobileSubMenu = $(".mbm-main").index(this)
    $(this).next().addClass("mbm-submenu-active")

  })

  $("#closeMobile").click(function () {
    $(".menu-mobile").toggle()
  })

  $("#openMobile svg").click(function () {
    $(".menu-mobile").toggle()
  })

  $(window).scroll(function(event) {
    var scroll = $(window).scrollTop()
    if($(".event")[0] && scroll + 400 >= $(".event").offset().top && scroll <= $(".cont-max").height() + $(".event").offset().top) {
      $(".event-content").addClass("full-width")
    }else{
      $(".event-content").removeClass("full-width")
    }
  })

}); 

function activateSubMenu(index) {
  $(".submenu-extra").eq(index).css({
    'display': 'flex'
  })
  
  $(".submenu-pointer").eq(index).css({
    'visibility': 'visible'
  })
}

function desactivateSubMenu(index) {
  $(".submenu-extra").eq(index).css({
    'display': 'none'
  })
  
  $(".submenu-pointer").eq(index).css({
    'visibility': 'hidden'
  })
}

// function setNewsMobileControls() {

//   $(".news-mobile img").each(function(idx) {
//     $(".news-mobile-controls").append("<div class='slider-button'></div>")
//   })

// }

// function initMobileControls() {

//   let active = 0
//   $(".news-mobile-controls .slider-button").each(function(idx) {

//     $(this).click(function() {
      
//     })

//   })
// }