jQuery(function($) {

	var $first_path;
	var $next;
	var $play = true;
	var $i = 0;
	var $j = -21;
	var $time = 1; // in seconds

	$(document).ready(function() {

	    	var win = $(window);

	    	$('#intro').css('min-height',win.height());

	    	$('.nav-item>a').click(function(){

	    		scrollToAnchor($(this).attr('data-title'));

	    	});

	    	$('#map-overlay').click(function () {
   				 $('#map-overlay').css("display", "none");
			});
			
			$('#map').mouseleave(function () {
   				 $('#map-overlay').css("display", "block");
   			});

	    $('#vimeo-vid').html('<iframe src="https://player.vimeo.com/video/100149009" width="100%" height="300" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');

	    

 			
  	});


    	//email button app

    	var clicked = function(){

			console.log('clicked');
     		
     		$('a#e-mail-button').css('display','none');

     		$.getJSON('wp-content/themes/bklex-post-theme/js/e-mail.json', 
			function(response){
				$('div#e-mail').html(response[0].email);

			});
     		
     		$('div#e-mail').css('display','block');
		}

    	$('a#e-mail-button').on('click', clicked);


    	//loads the studio carousel see studio-carousel.js
    	window.studioCarousel();

    	resizeSvg();

    	$first_path = $('#my-svg').children().first();

    	$('#logo-b').css({'fill-opacity': 1});
    	$('#logo-k').css({'fill-opacity': 1});
    	$('#logo-dot').css({'fill-opacity': 1});
    	$('#logo-l').css({'fill-opacity': 1});
    	$('#logo-e').css({'fill-opacity': 1});
    	$('#logo-x').css({'fill-opacity': 1});
    	$('#post-prod h1').css({opacity: 1});

    	/*if( !/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {

    		window.setInterval(animate, 200)
		}*/




		

	function animate(){
		var $path = window.location.href;

		if($path == "http://localhost:8888/bklex-post/wordpress/" || $path == "http://localhost:8888/bklex-post/wordpress/#intro" || $path == "http://post.bklex.com/#intro" || $path == "http://post.bklex.com"){
			

			var $r = Math.floor(255/32)*($i%32);


				if($i<32){
					var $string = rgbToHex($r, 0, 0);
					//$('#lgn-'+$k+' .col-'+$i).css({'transition-delay': (0.1*$j)+'s'});
					$('.col-'+$i).css({fill: $string});
					$('.col-'+$i).css({"transform" : "scale("+1.3+")"});

				}
				else if(32<=$i && $i<64){
					var $string = rgbToHex(255-$r, $r, 0);
					//$('#lgn-'+$j+').css({'transition-delay': (0.1*$j)+'s'});
					$('.col-'+$i).css({fill: $string});
					$('.col-'+$i).css({"transform" : "scale("+1.3+")"});
				}
					else if(64<=$i && $i<=94){
						var $string = rgbToHex(0, 255-$r, $r);
						//$('#lgn-'+$k+' .col-'+$i).css({'transition-delay': (0.1*$k)+'s'});
						$('.col-'+$i).css({fill: $string});
						$('.col-'+$i).css({"transform" : "scale("+1.3+")"});
				}
				
				
					$('.col-'+($j)).css({fill: "gray"});
					$('.col-'+($j)).css({"transform" : "scale("+1+")"});

		
			//$t[$k].css({fill: "red", transition: $time + "s"});
			//$col = parseInt($t[$k].attr('class').split('-').pop());
			//$lgn = parseInt($t[$k].parent().attr('id').split('-').pop());
			//$t.push($('#lgn-'+($lgn+1)+' .col-'+($col+1)));
			//$t.push($('#lgn-'+($lgn+1)+' .col-'+$col));
			//$t.push($('#lgn-'+$lgn+' .col-'+($col+1)));


			//$col = $dot.attr('class').split('-').pop();
			//$lgn = $dot.parent().attr('id').split('-').pop();


			if( $i < 95 ){
				$i++;
			}
			else{
				$i = 0;
			}


			if( $j < 95 ){
				$j++;
			}
			else{
				$j =  0;
			}
		}
	};


	function componentToHex(c) {
	    var hex = c.toString(16);
	    return hex.length == 1 ? "0" + hex : hex;
	}

	function rgbToHex(r, g, b) {
	    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}

	function isOnScreen(){

	    var win = $(window);

	    var viewport = {
	        top : win.scrollTop(),
	        left : win.scrollLeft()
	    };
	    viewport.right = viewport.left + win.width();
	    viewport.bottom = viewport.top + win.height();

	    var bounds = this.offset();
	    bounds.right = bounds.left + this.outerWidth();
	    bounds.bottom = bounds.top + this.outerHeight();

	    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

	};

	function resizeSvg(){
		var win = $(this); //this = window
		var height = win.height() +'px';
  		var svg = $('#my-svg');
  		var window_ratio = win.height()/win.width();
  		var svg_ratio = svg.height()/svg.width();

  			if (window_ratio >= svg_ratio) { 
  				$('#my-svg').attr('height', height);
  				$('#my-svg').removeAttr('width');
  			}
  			else {
  				$('#my-svg').attr('width','100%');
  				$('#my-svg').removeAttr('height','auto');
  			}

	}

	function scrollToAnchor(anchor_id){
		var tag = $("#"+anchor_id+"");
		$('html,body').animate({scrollTop: tag.offset().top - 55},'slow');
	}


	

		
	$(window).on('resize', function(){
 		
 		resizeSvg();

 		if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
 			var win = $(window);
	    	$('#intro-section').css('height',win.height());
	    }

	});

	 $(window).scroll( function(){

      		var windowYOffset = window.pageYOffset;
			if(	windowYOffset < 1.5 * $(window).height() ){
          		var elBackgrounPos = (windowYOffset * 0.5) + "px";
      			$("#my-svg").css('margin-top', elBackgrounPos);
      		}

    });
    

			
});

/*var initMap = function() {
        var mapDiv = document.getElementById('map');

        var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
		var mapOptions = {
  			zoom: 4,
  			center: myLatlng,
  			offsetWidth: 0
			}
			var map = new google.maps.Map(document.getElementById("map"), mapOptions);

			var marker = new google.maps.Marker({
    			position: myLatlng,
    			title:"Studio BKLEX"
			});

			// To add the marker to the map, call setMap();
			marker.setMap(map);
}*/
//google.maps.event.addDomListener(window, "load", initMap);

(function(f,i,r,e,s,h,l){i['GoogleAnalyticsObject']=s;f[s]=f[s]||function(){
		(f[s].q=f[s].q||[]).push(arguments)},f[s].l=1*new Date();h=i.createElement(r),
		l=i.getElementsByTagName(r)[0];h.async=1;h.src=e;l.parentNode.insertBefore(h,l)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-XXXXXXXX-XX', 'yourdomain.com');
		ga('send', 'pageview');

