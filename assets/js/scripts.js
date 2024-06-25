/*
Author       : Themes_Mountain.
Template Name: Laxmi - Responsive App Landing Page
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/

		/*START MENU JS*/
			$('a.page-scroll').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

			$(window).on('scroll', function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/*END MENU JS*/ 

		/*START HOME WATER JS*/
		  if (typeof $.fn.ripples == 'function') {
				try {
					$('.ripple').ripples({
						resolution: 500,
						perturbance: 0.01
					});
				} catch (e) {
					$('.error').show().text(e);
				}
			}
		/*END HOME WATER JS*/
		
		/* START SCREENSHOTS SLIDER JS*/
		$('.s-slider').owlCarousel({ 
			autoPlay: 10000, //Set AutoPlay to 4 seconds	 
			items : 4,
			itemsDesktop : [1199,4],
			itemsDesktopSmall : [979,3],
			itemsTablet : [768,2],
			itemsMobile	: [479,1],
			pagination	: true,
		});
		/* END  SCREENSHOTS SLIDER JS*/

		/*START VIDEO JS*/
		$('.video-play').magnificPopup({
            type: 'iframe'
        });
		/*END VIDEO JS*/
		
		/* START TESTIMONIAL JS*/
		 $("#testimonial-slider").owlCarousel({
				items:2,
				itemsDesktop:[1000,2],
				itemsDesktopSmall:[980,1],
				itemsTablet:[768,1],
				pagination:true,
				navigation:false,
				navigationText:["",""],
				autoPlay:true
			});			
		/* END TESTIMONIAL JS*/
		
		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  items : 5,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});
		/*END PARTNER LOGO*/
		
	}); 		
	
	/* START PARALLAX JS */
	(function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	/* END PARALLAX JS  */	

	document.getElementById('sendInvitation').addEventListener('submit', function(event) {
            event.preventDefault();

		const email = document.getElementById('mce-email').value;

		const data = { email: email, meetLink: 'https://calendar.app.google/7VYHagwvxz5V3t7Z6', eventTime:"2024-07-08T10:00:00Z"};
		console.log(data);

		fetch('https://webinar-back.vercel.app/api/invitation', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(data => {
			setTimeout(function() {
				$('#confirmationModal').modal('show');
			}, 500);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
	});
		
				
})(jQuery);


  

