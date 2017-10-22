jQuery(document).ready(function(jQuery){

	// ScrollReveal

	var config = {
	  delay: 'always',
	  mobile: false,
	  vFactor: 0.60
	}

	window.sr = new scrollReveal( config );

	// Mobile Navigation

	jQuery('.open-menu').click(function(){
		jQuery('.site-menu').slideToggle('fast');
	});

	// Hide Menu After Anchorlink Click

	jQuery('.site-menu li a').on('click', function(){
	  jQuery('.site-menu').hide();
	});

	// Page Preloader

	jQuery(window).load(function() { // makes sure the whole site is loaded
		jQuery('.loading').fadeOut(1000); // will first fade out the loading animation
		jQuery('.site-preloader').delay(1100).animate({top:'100%',opacity:0.9},500).fadeOut(1000); // will fade out the white DIV that covers the website
		jQuery('body').delay(1100).css({'overflow':'visible'});
	});

	// Smooth Scroll

	jQuery(function() {
	  jQuery('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = jQuery(this.hash);
	      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        jQuery('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	// Easy Pie Chart

	var waypoint = new Waypoint({
	  element: document.getElementById('kenntnisse'),
	  handler: function(direction) {

		  jQuery('.chart').easyPieChart({
		     barColor: '#6d8086',
		     trackColor: '#fff',
		     scaleColor: false,
		     lineCap: 'square',
		     lineWidth: 8,
		     size: 150,
		     animate: 1800,
				 onStep: function(from, to, percent) {
				 	this.el.children[0].innerHTML = Math.round(percent);
				 }
		  });

	  },

		offset: '75%'

	});

	// Onepager Navigation

	jQuery('#navmenu').onePageNav({
	    currentClass: 'current',
	    changeHash: false,
	    scrollSpeed: 750,
	    scrollThreshold: 0.5,
	    filter: '',
	    easing: 'swing',
	    begin: function() {
	        //I get fired when the animation is starting
	    },
	    end: function() {
	        //I get fired when the animation is ending
	    },
	    scrollChange: function($currentListItem) {
	        //I get fired when you enter a section and I pass the list item of the section
	    }
	});

	// To Top Link

	var offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
	offset_opacity = 1200, // browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	scroll_top_duration = 750, //duration of the top scrolling animation (in ms)
	$back_to_top = jQuery('.top'); // grab the "back to top" link

	jQuery(window).scroll(function(){ // hide or show the "back to top" link
		( jQuery(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
			if( jQuery(this).scrollTop() > offset_opacity ) {
				$back_to_top.addClass('fade-out');
			}
	});

	// Smooth Scroll To Top

	$back_to_top.on('click', function(event){
		event.preventDefault();
		jQuery('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});