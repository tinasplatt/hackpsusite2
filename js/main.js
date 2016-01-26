$( document ).ready(function() {
    console.log( "ready!" );
    //$( "#header" ).css( "height", window.innerHeight);

    var isMobile = true;

	if ( screen.width > 700  && window.innerWidth > 500) {
		isMobile = false;
	} else {
		isMobile = true;
	}

	if(isMobile) {
	 
	} else {
		animations();
	}
    

    $(".social-media-icon").hover(
    	function() {
    		$(this).addClass('tada');
    	}, function() {
    		$(this).removeClass('tada');
    	}
    );
 
 })

