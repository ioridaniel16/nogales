$(() => {
  
  activateControls(createControls())
  $(window).resize(function() {
    activateControls(createControls())
  })

})

function createControls() {
  var sliderSize = $(window).width()
  let totalSections = []

  for(var sliders = 0; sliders < $(".slider-wrapper").length; sliders++) {
    var imageCounter = $(".slider-wrapper").eq(sliders).find(".slider-item").length

    var visibleImages;
    if(sliderSize > 800) visibleImages = 4
    else if(sliderSize >= 600 && sliderSize <= 800) visibleImages = 3
    else if(sliderSize >= 500 && sliderSize < 600) visibleImages = 2
    else if(sliderSize < 500) visibleImages = 1

    $(".slider-control").eq(sliders).empty()
    totalSections.push(Math.ceil(imageCounter / visibleImages))
    for(var i = 0; i < Math.ceil(imageCounter / visibleImages); i++)
      $(".slider-control").eq(sliders).append("<div class='slider-button'> </div>")

    $(".slider-control").eq(sliders).append("<div class='slider-page'> </div>")
  }

  return totalSections
}

function activateControls(totalSections) {
  
  let activeButton = []
  for(var sliders = 0; sliders < $(".slider").length; sliders++) {
    activeButton.push(0)
    $(".slider").eq(sliders).find(".slider-button").eq(0).addClass("slider-button-active")
    $(".slider-page").eq(sliders).text((activeButton[sliders] + 1) + " / " + totalSections[sliders])

    $(".slider").eq(sliders).find(".slider-button").each(function(idx) {
      $(this).click({slider: sliders}, function(e) {
        $(".slider-page").eq(e.data.slider).text((idx + 1) + " / " + totalSections[e.data.slider])
        var translateSize = idx * $(".slider-wrapper").width()
        
        $(".slider").eq(e.data.slider).find(".slider-button").eq(activeButton[e.data.slider]).removeClass("slider-button-active")
        activeButton[e.data.slider] = idx
        $(this).addClass("slider-button-active")

        $(".slider-content").eq(e.data.slider).css({
          'transform': 'translateX(' + -translateSize + 'px)'
        })

      })
    })
  }
  
}