setTimeout(function() {
var balloon = $('#balloon');

   function runIt() {
       balloon.animate({top:'+=20'}, 1200);
       balloon.animate({top:'-=20'}, 1200, runIt);
   }
balloon.fadeIn({queue: false, duration: 800, easing: "linear"});
runIt();
}, 1000);