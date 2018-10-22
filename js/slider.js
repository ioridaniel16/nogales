$(() => {
  
  setControls()

  $(window).resize(function() {
    setControls()
  })
  
})

function setControls(casa = 'hola') {
  console.log("Controls set", casa)
  
  var sliderImages = $(".acr-images img").length
  var maxScroll = Math.floor(sliderImages / 2) * 150
  var currentVal = 0
  
  if(sliderImages * 150 > $("#acr-slider").width()) {
  
    $("#acr-right-control").on('click', function() {

      if(currentVal > -maxScroll) {
        currentVal -= 150
        $(".acr-images-wrapper").css({
          'transform': 'translateX(' + currentVal + 'px)'
        })
      }

    })
  
    $("#acr-left-control").on('click', function() {

      if(currentVal < maxScroll) {
        currentVal += 150
        $(".acr-images-wrapper").css({
          'transform': 'translateX(' + currentVal + 'px)'
        })
      }
    })
  }
  
}