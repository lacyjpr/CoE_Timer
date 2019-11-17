$(document).ready(function() {
  var breakTime = 4;
  var workTime = 12;
  var state = "";
  var counter;
  var ding = new Audio("../src/media/alarm.mp3");

  // Reset to original values
  $(".reset").on("click", function() {
    breakTime = 4;
    workTime = 12;
    state = "";
    $(".breakTime").html(breakTime);
    $(".workTime").html(workTime);
    $(".content").html("00:12");
    clearInterval(counter);
    $(".progress").stop(true, true);
    $(".progress").animate({ width: "0%" }, 0);
    $(".breakTimer").stop(true, true);
    $(".breakTimer").animate({ width: "0%" }, 0);
    $(".start").text("Start");
    $(".getToWork").addClass("hidden");
    $(".takeABreak").addClass("hidden");
  });

  $(".start").on("click", function() {
    var val = $(this).text();
    switch (val) {
      case "Start":
        state = "running";
        $(".start").text("Pause");
        if (!$(".takeABreak").hasClass("hidden")) {
          breakTimer($(".content").text());
        } else {
          workTimer($(".content").text());
        }
        break;
      case "Pause":
        state = "paused";
        clearInterval(counter);
        $(".start").text("Start");
        if (!$(".takeABreak").hasClass("hidden")) {
          $(".breakTimer").clearQueue();
          $(".breakTimer").stop();
        } else {
          $(".progress").clearQueue();
          $(".progress").stop();
        }
        break;
    }
  });

  function workTimer(val) {
    // Timer credit: http://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer
    ding.play();
    $(".getToWork").removeClass("hidden");
    $(".progress").animate({ width: "100%" }, toSeconds(val) * 1000);
    $(".progress").queue(function() {
      var that = $(this);
      that.dequeue();
    });
    var time = toSeconds(val);
    counter = setInterval(function() {
      time = time - 1;
      if (time <= 0) {
        $(".getToWork").addClass("hidden");
        $(".progress").animate({ width: "0%" }, 0);
        clearInterval(counter);
        breakTimer("00:" + breakTime);
        //ding.play();
      }
      $(".content").html(toMinutes(time));
    }, 1000);
  }

  function breakTimer(val) {
    ding.play();
    $(".takeABreak").removeClass("hidden");
    $(".breakTimer").animate({ width: "100%" }, toSeconds(val) * 1000);
    $(".breakTimer").queue(function() {
      var that = $(this);
      that.dequeue();
    });
    var time = toSeconds(val);
    counter = setInterval(function() {
      time = time - 1;
      if (time <= 0) {
        //ding.play();
        $(".takeABreak").addClass("hidden");
        $(".breakTimer").animate({ width: "0%" }, 0);
        clearInterval(counter);
        workTimer("00:" + workTime);
      }
      $(".content").html(toMinutes(time));
    }, 1000);
  }

  function toSeconds(val) {
    var arr = val.split(":");
    var minutes = arr[0];
    var seconds = arr[1];
    return parseInt(seconds) + parseInt(minutes); //* 60;
  }

  function toMinutes(val) {
    // Convert seconds to minutes and seconds credit: http://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
    var minutes = Math.floor(val / 60);
    var seconds = val - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return "00:" + seconds;
  }
});
