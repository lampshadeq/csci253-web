// Global variables
var likeCount, commentCount, tagCount, groupCount, bdayCount;
var msgCount, friendCount;

// Grab the data every 10 seconds
setInterval(grabData, 10000);

// Launch the steps
function grabData() {
  resetCounts();
  clickNotif();
  setTimeout(clickNotif, 1000);
  setTimeout(unreadCounts, 1000);
  setTimeout(submitData, 1500);
  unreadMessages();
  newFriends();
}

// Click the notifications to generate the content
function clickNotif() {
  document.getElementsByClassName("jewelButton")[2].click();
}

// Find the number of unread notifications
function unreadCounts() {
  var n = document.getElementsByClassName("_33c");
  var i, d, u;
  for (i = 0; i < n.length; i++) {
    d = n[i].getAttribute("data-gt");
    u = d.search("unread") + 8;
    
    if (parseInt(d.charAt(u)) == 1) {
      if (d.search("like") != -1) {
        likeCount++;
      }
      else if (d.search("feed_comment") != -1) {
        commentCount++;
      }
      else if ((d.search("comment_mention") != -1) || (d.search("photo_tag") != -1)) {
        tagCount++;
      }
      else if (d.search("group_activity") != -1) {
        groupCount++;
      }
      else if (d.search("birthday_reminder") != -1) {
        bdayCount++;
      }
    }
  }
}

// Find the number of unread messages
function unreadMessages() {
  msgCount = parseInt(document.getElementsByClassName("countValue _5aff")[0].innerHTML);
}

// Find the number of new friend requests
function newFriends() {
  friendCount = parseInt(document.getElementById("requestsCountValue").innerHTML);
}

// Submit the data to the server
function submitData() {
  var req = new XMLHttpRequest();
  req.open("GET", "https://localhost/musique/serv.php?" +
           "like="    + likeCount.toString()    + "&" +
           "comment=" + commentCount.toString() + "&" +
           "tag="     + tagCount.toString()     + "&" +
           "group="   + groupCount.toString()   + "&" +
           "bday="    + bdayCount.toString()    + "&" +
           "msg="     + msgCount.toString()     + "&" +
           "friend="  + friendCount.toString()  , true);
  req.send();
}

// Reset the count values
function resetCounts() {
  likeCount    = 0;
  commentCount = 0;
  tagCount     = 0;
  groupCount   = 0;
  bdayCount    = 0;
  msgCount     = 0;
  friendCount  = 0;
}