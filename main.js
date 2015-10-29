$(document).ready(function() {
  // Match aside's height to article
  $("aside").height($("article").height());
  
  // Adjust the bar height
  $("#bar").height($("article").height() * 0.85);
  
  // Test the blocks inside the bar
  $("#bar").append('<div class="block"></div>');
  $("#bar").append('<div class="block"></div>');
  $("#bar").append('<div class="block"></div>');
  $("#bar").append('<div class="block"></div>');
  
  // Change the block heights
  $(".block").height($("#bar").height() * 0.1);
  
  // Push blocks downward
  $(".block").each(function(i,e) {
    $(e).css("top", (1 - 0.1 * (i + 1)) * $("#bar").height());
  });
  
  // Change the color background for selected option
  $(".back").each(function() {
    $(this).css("background-color", $(this).children().filter(":selected").attr("class"));
  });
  
  // When a new color choice is selected...
  $(".back").change(function() {
    // Change the background color
    $(this).css("background-color", $(this).children().filter(":selected").attr("class"));
    
    // Change the text color
    if ($(this).css("background-color") == "rgb(0, 0, 0)") {
      $(this).css("color", "white");
    }
    else {
      $(this).css("color", "black");
    }
    
    // Change the button color
    if ($(this).hasClass("off")) {
      $("span").css("background-color", $(this).css("background-color"));
    }
    else {
      $(".spanHover").css("background-color", $(this).css("background-color"));
    }
  });
  
  // When a button is hovered over...
  // FIXME
  $("span").hover(function() {
    $(this).toggleClass("spanHover");
  });
});