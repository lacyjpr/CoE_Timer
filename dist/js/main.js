$(document).ready(function(){function t(t){c.play(),$(".getToWork").removeClass("hidden"),$(".progress").animate({width:"100%"},1e3*e(t));var a=e(t);o=setInterval(function(){a-=1,a<=0&&($(".getToWork").addClass("hidden"),$(".progress").animate({width:"0%"},0),clearInterval(o),n(i+":00")),$(".content").html(r(a))},1e3)}function n(n){c.play(),$(".takeABreak").removeClass("hidden"),$(".progress").animate({width:"100%"},1e3*e(n)),console.log(a(e(n)));var i=e(n);o=setInterval(function(){i-=1,i<=0&&($(".takeABreak").addClass("hidden"),$(".progress").animate({width:"0%"},0),clearInterval(o),t(s+":00")),$(".content").html(r(i))},1e3)}function e(t){var n=t.split(":"),e=n[0],r=n[1];return parseInt(r,10)+60*parseInt(e,10)}function r(t){var n=Math.floor(t/60),e=t-60*n;return e=e<10?"0"+e:e,n+":"+e}function a(t){return 6e4*t}var o,i=5,s=25,l="",c=new Audio("/media/alarm.mp3");$(".breakPlus").on("click",function(){i<999&&"running"!==l&&(i++,$(".breakTime").html(i))}),$(".breakMinus").on("click",function(){i>1&&"running"!==l&&(i--,$(".breakTime").html(i))}),$(".workPlus").on("click",function(){s<999&&"running"!==l&&(s++,$(".workTime").html(s),$(".content").html(s+":00"))}),$(".workMinus").on("click",function(){s>1&&"running"!==l&&(s--,$(".workTime").html(s),$(".content").html(s+":00"))}),$(".reset").on("click",function(){i=5,s=25,l="",$(".breakTime").html(i),$(".workTime").html(s),$(".content").html("25:00"),clearInterval(o),$(".progress").stop(!0,!0),$(".progress").animate({width:"0%"},0),$(".getToWork").addClass("hidden"),$(".takeABreak").addClass("hidden")}),$(".start").on("click",function(){switch($(this).text()){case"Start":l="running",t($(".content").text()),$("button.start").text("Pause");break;case"Pause":l="paused",clearInterval(o),$("button.start").text("Start")}})});