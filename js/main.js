$( document ).ready(function() {
    console.log( "ready!" );
    // $( "#header" ).css( "height", window.innerHeight);

    var isMobile = true;

	if ( screen.width > 700  && window.innerWidth > 500) {
		isMobile = false;
	} else {
		isMobile = true;
	}

	if(isMobile) {
	 
	} else {
		animations();
		scrollyDividers();
	}
    

    $(".animated-icon").hover(
    	function() {
    		$(this).addClass('tada');
    	}, function() {
    		$(this).removeClass('tada');
    	}
    );



    function scrollyDividers() {
    	//var lastScrollTop = 0;
		$(window).scroll( function() {

			var top = $(this).scrollTop();
			//if (top > lastScrollTop) {
				$('section').each( function() {
					var height = $(this).height();
					var sectionOffset = $(this).offset();
					if (top + window.innerHeight > sectionOffset.top) {
						setWidth=100*(top + window.innerHeight - sectionOffset.top)/window.innerHeight;
						if (setWidth > 100 ) {
							setWidth = 100;
						}
					
						$('.scrolly-divider', this).width(setWidth+'%');
						$('.tinyhexagon', this).css({
								'margin-left': setWidth + '%',
						})
						$('.tinyhexagon span', this).css('transform', 'rotate(' + setWidth * 10 + 'deg)')
					}

				})
		});
	}
})

