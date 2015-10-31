// Global variables
var blockCount = 0;
var maxBlock = 10;

$(document).ready(function() {
  // Variables
  var artHeight = $("article").height();
  var offColor = "red";
  var onColor = "green";
  
  // Initial adjustments
  $("aside").height(artHeight);                 // Match aside height to article
  $("#bar").height(artHeight * 0.85);           // Extend the bar
  $(".off").css("background-color", offColor);  // Match the default off color
  $(".on").css("background-color", onColor);    // Match the default on color
  
  // Clicking on a button should change the color
  $("span").click(function() {
    // Off -> On
    if ($(this).css("background-color") == rgbColor(offColor)) {
      $(this).css("background-color", onColor);
    }
    
    // On -> Off
    else {
      $(this).css("background-color", offColor);
    }
    
    // White requires black border
    if ($(this).css("background-color") == rgbColor("white")) {
      $(this).css("border", "1px solid black");
    }
    else {
      $(this).css("border", "");
    }
  });
  
  // Selected a new off color
  $(".off").change(function() {
    // Store the old color
    var oldColor = offColor;
    
    // Update the off color
    offColor = $(this).children().filter(":selected").attr("class");
    
    // Cannot select same color as on
    if (offColor == onColor) {
      offColor = oldColor;
      return;
    }
    
    // Update the bg for the selection dropdown
    $(this).css("background-color", offColor);
    
    // Black bg needs white text
    if (offColor == "black") {
      $(this).css("color", "white");
    }
    else {
      $(this).css("color", "black");
    }
    
    // Update the off buttons' color
    $("span").each(function() {
      if ($(this).css("background-color") == rgbColor(oldColor)) {
        $(this).css("background-color", offColor);
        
        // White requires black border
        if (offColor == "white") {
          $(this).css("border", "1px solid black");
        }
        else {
          $(this).css("border", "");
        }
      }
    });
  });
  
  // Selected a new on color
  $(".on").change(function() {
    // Store the old color
    var oldColor = onColor;
    
    // Update the on color
    onColor = $(this).children().filter(":selected").attr("class");
    
    // Cannot select same color as off
    if (onColor == offColor) {
      onColor = oldColor;
      return;
    }
    
    // Update the bg for the selection dropdown
    $(this).css("background-color", onColor);
    
    // Black bg needs white text
    if (onColor == "black") {
      $(this).css("color", "white");
    }
    else {
      $(this).css("color", "black");
    }
    
    // Update the on buttons' color
    $("span").each(function() {
      if ($(this).css("background-color") == rgbColor(oldColor)) {
        $(this).css("background-color", onColor);
        
        // White requires black border
        if (onColor == "white") {
          $(this).css("border", "1px solid black");
        }
        else {
          $(this).css("border", "");
        }
      }
    });
  });
});

// Map color names to rgb equivalent
function rgbColor(c) {
  switch (c) {
    case "black":
      return "rgb(0, 0, 0)";
      
    case "blue":
      return "rgb(0, 0, 255)";
      
    case "green":
      return "rgb(0, 128, 0)";
      
    case "orange":
      return "rgb(255, 165, 0)";
      
    case "pink":
      return "rgb(255, 192, 203)";
      
    case "purple":
      return "rgb(128, 0, 128)";
      
    case "red":
      return "rgb(255, 0, 0)";
      
    case "white":
      return "rgb(255, 255, 255)";
  }
}

// Place a new block in the correct position in the bar
function addBlock() {
  // Update the maximum number of blocks by 5
  if (blockCount == maxBlock) {
    maxBlock += 5;
  }
  
  // Create the block
  $("#bar").append('<div class="block"></div>');
  
  // Change the height of the block
  $(".block").height($("#bar").height() * (1 / maxBlock));
  
  // Push the block into place
  $(".block").each(function(i,e) {
    $(e).css("top", (1 - (1 / maxBlock) * (i + 1)) * $("#bar").height());
  });
  
  // Update count
  blockCount++;
  $("h6").text(blockCount);
}

// Remove a block from the bar
function removeBlock() {
  // No blocks so nothing to remove
  if (blockCount == 0) {
    return;
  }
  
  // Remove a block
  $("#bar").children().last().remove();
  
  // Update count
  blockCount--;
  $("h6").text(blockCount);
}