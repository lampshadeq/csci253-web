<?php
  // Grab the filter list (0 is no, 1 is yes)
  $filter = array(
    0 => $_GET["like"],
    1 => $_GET["comment"],
    2 => $_GET["tag"],
    3 => $_GET["group"],
    4 => $_GET["bday"],
    5 => $_GET["msg"],
    6 => $_GET["friend"],
  );
  
  // Grab the scraped data
  $scrape = file("notif.txt", FILE_IGNORE_NEW_LINES);
  
  // Filter the data by zeroing
  foreach ($scrape as $i => $d) {
    if ($filter[$i] == 1) {
      $scrape[$i] = 0;
    }
  }
  
  // Find the sum of the counts
  $sum = 0;
  foreach ($scrape as $i => $d) {
    $sum += $d;
  }
  
  // Return the sum to the UI
  echo $sum;
?>