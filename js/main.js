$( document ).ready(function() {
    console.log( "ready!" );
    // $( "#header" ).css( "height", window.innerHeight);

    var isMobile = true;

	if ( window.innerWidth > 600 ) {
		isMobile = false;
	} 

	console.log(isMobile)

	if ( isMobile == false ) {
		animations();
		scrollyDividers();

		$(".animated-icon").hover(
	    	function() {
	    		$(this).addClass('tada');
	    	}, function() {
	    		$(this).removeClass('tada');
	    	}
    	);
	} else {
		$('.tinyhexagon').css('display', 'none');
	}

    function scrollyDividers() {

		$(window).scroll( function() {

			var top = $(this).scrollTop();
			//if (top > lastScrollTop) {
				$('section').each( function() {
					var height = $(this).height();
					var sectionOffset = $(this).offset();
					if (top + window.innerHeight > sectionOffset.top) {
						setWidth=100*(top + window.innerHeight - sectionOffset.top)/height;
						if (setWidth > 100 ) {
							setWidth = 100;
						}
					
						$('.scrolly-divider', this).width(setWidth -5 +'%');
						$('.tinyhexagon', this).css({
								'margin-left': setWidth - 5 + '%',
						})
						$('.tinyhexagon span', this).css('transform', 'rotate(' + setWidth * 10 + 'deg)')
					}

				})
		});
	}
	// all used for styling
	$('.question').hover( function() {
		console.log('hover');
		$('p span', this).addClass('yellow');
	}, function() {
		$('p span', this).removeClass('yellow')
	})
	.click( function() {
		$(this).siblings().slideToggle('medium', 'linear');
		$('p span',this).toggleClass('rotated');
	});

	$('.question p').prepend('<span class="glyphicon glyphicon-triangle-right"></span>  ');

	// $('.question-container').hover( function() {
	// 	console.log('hover');
	// 	$('.question p span', this).addClass('yellow');
	// }, function() {
	// 	$('.question p span', this).removeClass('yellow')
	// });
})

