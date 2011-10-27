
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
	$('header,#obstacles,#prizes').css('min-height', (h - 14));
	$('header h1 span').css('height', Math.min($('header h1 span').width() - 40, 425));
}).resize();

// Scrolling navigation
$('nav a').click(function(e) {
	e.preventDefault();
	jQuery.scrollTo.window().queue([]).stop();
	$.scrollTo($($(this).attr('href')), 1000, {easing:'easeOutQuint'});
});

// Window scroll
$(window).scroll(function(e) {
	var top = $(document).scrollTop();
	var wHeight = Math.max($('section').height(), $(window).height());
	var current = Math.floor(top / wHeight + 0.4);
	$('header,section,footer').removeClass('current').slice(current, current+1).addClass('current');
	var i = $('.current').attr('id')
	$('nav a').removeClass('selected');
	if (i != undefined && i != 'top') {
		$('nav a[href="#'+i+'"]').addClass('selected');
	}
});

// Keyboard navigation
$(document).bind('keydown',function(e) {
	switch(e.keyCode) {
		case 32: // Space
		case 40: // Down
			e.preventDefault();
			target = $('.current').next('section,footer').attr('id');
			if (target != undefined) {
				$('nav a[href="#'+target+'"]').click();
			}
			break;
		case 38: // Up
			e.preventDefault();
			target = $('.current').prev('section,footer').attr('id');
			if (target != undefined) {
				$('nav a[href="#'+target+'"]').click();
			} else if($('.current').attr('id') == 'obstacles') {
				$('nav a[href="#top"]').click();
			}
		case 37: // Left
			if ($('.current').attr('id') == 'obstacles') {
				e.preventDefault();
				target = $('#obstacles li.selected').prev('li');
				if (target) target.find('a').click();
			}
			break;
		case 39: // Right
			if ($('.current').attr('id') == 'obstacles') {
				e.preventDefault();
				target = $('#obstacles li.selected').next('li');
				if (target) target.find('a').click();
			}
			break;
	}
});

// TODO: Add left/right/swipe switching between obstacles.

// Obstacle scrolling
$('#obstacles ul a').click(function(e) {
	e.preventDefault();
	$('#obstacles .panel').stop().scrollTo($($(this).attr('href')), 500, {easing:'easeOutCubic'});
	$('#obstacles li').removeClass('selected');
	$(this).parent().addClass('selected');
});

// The Final Countdown - de ne neerrr nerrrrr!
var countdownTimer = setInterval(function() {
	v = parseInt( $('.countdown').text() ) - 1;
	if (v < 0) {
		$('.countdown').addClass('done');
		clearInterval(countdownTimer);
		$('#participate h2').html('Time&lsquo;s up!!!');
		// TODO: Something grand when the timer stops... slime splodge perhaps - "Be quick!"
	} else {
		$('.countdown').text(v);
	}
}, 1000);

// Super basic text shadow for the underprivileged
$('header h2').poorMansTextShadow({color: '#ffffff', 'vertical': 3, 'horizontal': 3});
$('section h1').poorMansTextShadow({color: '#333333', 'vertical': 3, 'horizontal': 3});



















