window.studioCarousel = function(){

	jQuery(function($) {

		var templateUrl = "wp-content/themes/bklex-post-theme";
		var photos;
		var i = 2;

		$('#carousel-studio').carousel({
	  		interval:false // remove interval for manual sliding
		});


		$.getJSON( templateUrl+'/js/studio-photos.json', 
			function(response){
				photos = response;
				//load the two first photos.
				var initHtml = '<div class = "item active">'+ loadPhotoHtml(photos[0]) +'</div><div class ="item">' + loadPhotoHtml(photos[1]) +'</div>';
				$('.carousel-inner').html(initHtml);

			});

		// when the carousel slides, load the ajax content
		$('#carousel-studio').on('slide.bs.carousel', function () {
		
			if(photos[i]){

				$(".carousel-inner").append('<div class ="item">' + loadPhotoHtml(photos[i]) +'</div>');
				i++;
			}

		});

		var loadPhotoHtml = function(photo){

			var imgHtml = '<img src='+templateUrl+photo.src+'>';
			var titleHtml = '<div class="hidden-xs carousel-caption"><h2>'+photo.title+'</h2>';
			var captionHtml = '<p>'+photo.caption+'</p></div>'; 

			var html = imgHtml + titleHtml + captionHtml;

			return html;
		}
	});
}