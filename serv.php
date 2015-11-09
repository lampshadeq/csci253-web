<?php
  header("Access-Control-Allow-Origin: *");
  
  // Grab the data
  $like    = $_GET["like"];
  $comment = $_GET["comment"];
  $tag     = $_GET["tag"];
  $group   = $_GET["group"];
  $bday    = $_GET["bday"];
  $msg     = $_GET["msg"];
  $friend  = $_GET["friend"];
  
  // Create a file
  $myfile = fopen("test.txt", "w");
  
  // Write number
  fwrite($myfile, $like);
  fwrite($myfile, $comment);
  fwrite($myfile, $tag);
  fwrite($myfile, $group);
  fwrite($myfile, $bday);
  fwrite($myfile, $msg);
  fwrite($myfile, $friend);
  
  // Close it
  fclose($myfile);
?>