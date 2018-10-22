$(() => {
  let firstCol = $(".content-section .ds-col")
  
  let text = firstCol.html();
  let halfText = text.length / 2;

  for(let i = halfText; i < text.length; i++) {
    if(text[i] == '\n') {
      halfText = i;
      break;
    }
  }
  
  let first = text.substr(0, halfText);
  let second = text.substr(halfText + 1);
  
  $(".content-section")
    .append("<div class='ds-col'></div>");
  
    $(".content-section .ds-col")
    .eq(1)
    .append(second);

})