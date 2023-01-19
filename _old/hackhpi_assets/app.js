$(document).ready(function(){


	$("#countdown").countdown("06/11/2016 10:00:00", function(event) {
		$(this).text(
			event.strftime('%D:%H:%M:%S')
		);
	});


	var $mainNavLinks = $('#main-nav a');

    $('a[href^="/#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        if($(e.target).closest('#main-nav').length) {
	        $mainNavLinks.each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	    }
      
        var target = this.hash,
            menu   = target;

        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    var running = 0;
	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    var headerHeight = $('header').height();

	    var $mainNav = $('#main-nav');
	    var mainNavHeight = $mainNav.height();
	    var $mainNavLinks = $('#main-nav a');

	    if(scrollPos > headerHeight) {
	    	if(!$mainNav.hasClass('fixed')) {
		    	$mainNav.addClass('fixed').css('top', (-1) * mainNavHeight);
				$mainNav.stop().animate({
					'top':0
				}, 150, 'swing');
			}
	    } else if($mainNav.hasClass('fixed')) {
	    	if(running != 1) {
	    		running = 1;
		    	$mainNav.stop().animate({
					'top':(-1) * mainNavHeight
				}, 150, 'swing', function() {
					$mainNav.removeClass('fixed').css('top', 0);
					running = 0;
				});
			}
	    }
 		

	    $mainNavLinks.each(function () {
	        var currLink = $(this);
	        var refElement = $('#' + currLink.data("target"));
			
	        if (refElement.position().top <= scrollPos + 1 && refElement.position().top + refElement.height() > scrollPos + 1) {
	            $mainNavLinks.removeClass("active");
	            currLink.addClass("active");
	        } else {
	            currLink.removeClass("active");
	        }
	    });
	}

	$(document).on("scroll", onScroll);

});