
/********************
 * HTML5Boilerplate *
 ********************/

window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);(typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a))}};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

/***************
 * Triple Dare *
 ***************/

// Resize sections to fit nicely...
$(window).resize(function() {
	var h = $(window).height();
	$('header,section').css('min-height', (h - 14));
	$('header h1 span').css('height', Math.min($('header h1 span').width() - 40, 425));
}).resize();

// Scrolling navigation
$('nav a').click(function(e) {
	e.preventDefault();
	jQuery.scrollTo.window().queue([]).stop();
	$.scrollTo($($(this).attr('href')), 1000, {easing:'easeOutQuint'});
});

// Obstacle scrolling
$('#obstacles ul a').click(function(e) {
	e.preventDefault();
	$('#obstacles .panel').stop().scrollTo($($(this).attr('href')), 500, {easing:'easeOutCubic'});
});
// TODO: Add left/right/swipe switching between obstacles.

// The Final Countdown - de ne neerrr nerrrrr!
var countdownTimer = setInterval(function() {
	v = parseInt( $('.countdown').text() ) - 1;
	if (v < 0) {
		$('.countdown').addClass('done');
		clearInterval(countdownTimer);

		// TODO: Something grand when the timer stops...
	} else {
		$('.countdown').text(v);
	}
}, 1000);


















