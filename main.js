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
  
  // Global variable to hold the current hover class
  var originalColor = "red";
  var hoverColor = "green";
  
  // When a new color choice is selected...
  $(".back").change(function() {
    // Change the background color
    $(this).css("background-color", $(this).children().filter(":selected").attr("class"));
    
    // Change the border color (white should have black)
    if ($(this).hasClass("off")) {
      if ($(this).css("background-color") == "rgb(255, 255, 255)") {
        $("span").css("border", "1px solid black");
      }
      else {
        $("span").css("border", "1px solid " + $(this).css("background-color"));
      }
    }
    
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
      hoverColor = $(this).children().filter(":selected").attr("class");
    }
  });
  
  // When a button is hovered over...
  $("span").hover(function() {
    // Mouse enter
    originalColor = $(this).css("background-color");
    $(this).css("background-color", "");
    if (hoverColor == "white") {
      $(this).css("border", "1px solid black");
    }
    else {
      $(this).css("border", "");
    }
    $(this).addClass(hoverColor);
  }, function() {
    // Mouse leave
    $(this).removeClass(hoverColor);
    $(this).css("background-color", originalColor);
    if (originalColor == "rgb(255, 255, 255)") {
      $(this).css("border", "1px solid black");
    }
    else {
      $(this).css("border", "1px solid " + originalColor);
    }
  });
});