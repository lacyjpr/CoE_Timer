$(document).ready(function(){var a,r=4,n=12,i=new Audio("/CoE_Timer/media/End.mp3"),s=new Audio("/CoE_Timer/media/get_ready.mp3"),o=new Audio("/CoE_Timer/media/fire-truck.mp3");function d(e){i.play(),$(".getToWork").removeClass("hidden"),$(".progress").animate({width:"100%"},1e3*l(e)),$(".progress").queue(function(){$(this).dequeue()});var t=l(e);a=setInterval(function(){5==(t-=1)&&s.play(),t<=0&&($(".getToWork").addClass("hidden"),$(".progress").animate({width:"0%"},0),clearInterval(a),u("00:"+r)),$(".content").html(m(t))},1e3)}function u(e){o.play(),$(".takeABreak").removeClass("hidden"),$(".breakTimer").animate({width:"100%"},1e3*l(e)),$(".breakTimer").queue(function(){$(this).dequeue()});var t=l(e);a=setInterval(function(){(t-=1)<=0&&($(".takeABreak").addClass("hidden"),$(".breakTimer").animate({width:"0%"},0),clearInterval(a),d("00:"+n)),$(".content").html(m(t))},1e3)}function l(e){var t=e.split(":"),a=t[0],r=t[1];return parseInt(r)+60*parseInt(a)}function m(e){var t=e-60*Math.floor(e/60);return"00:"+(t=t<10?"0"+t:t)}$(".reset").on("click",function(){r=4,n=12,"",$(".breakTime").html(r),$(".workTime").html(n),$(".content").html("00:12"),clearInterval(a),$(".progress").stop(!0,!0),$(".progress").animate({width:"0%"},0),$(".breakTimer").stop(!0,!0),$(".breakTimer").animate({width:"0%"},0),$(".start").text("Start"),$(".getToWork").addClass("hidden"),$(".takeABreak").addClass("hidden")}),$(".start").on("click",function(){switch($(this).text()){case"Start":"running",$(".start").text("Pause"),$(".takeABreak").hasClass("hidden")?d($(".content").text()):u($(".content").text());break;case"Pause":"paused",clearInterval(a),$(".start").text("Start"),$(".takeABreak").hasClass("hidden")?($(".progress").clearQueue(),$(".progress").stop()):($(".breakTimer").clearQueue(),$(".breakTimer").stop())}})});