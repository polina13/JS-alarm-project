$(document).ready(function(){
  var userAlarmSet;
  var currentTime = moment().format("HH:mm");
  var userTime;
  var audio = document.getElementsByTagName("audio")[0];
  $('#date').text(moment().format("LL"));

  $("form").submit(function(event) {
    event.preventDefault();
    var userAlarmSet = $("#alarmSet").val();
    var userTime = moment().format("HH:mm");
    console.log("userInput:" + userAlarmSet);
    $("#display").addClass("well");
    $("#alarmNotify").append("<h2> Your alarm will go off at: </h2>" + userAlarmSet);
  });

  console.log("currentTime: " + currentTime);
  $(document).ready(function update_time() {
    $('#time').text(moment().format("HH:mm"));
    setTimeout(update_time, 100);
    });

    if (currentTime === userAlarmSet) {
      $('#display').append("<p> Alarm went off </p>");
      audio.play();
    }
});
