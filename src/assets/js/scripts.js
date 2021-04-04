import $ from 'jquery';
window.jQuery = window.$ = $;
import { pagepiling } from './jquery.pagepiling.min.js'
import animsition from './animsition.js'
import { WOW } from './wow.min.js'
import smoothscroll from './smoothscroll'

$(document).ready(function() {

	$('.loader').fadeOut(1000);
    
  if ($('.pagepiling').length > 0){
    $('.pagepiling').pagepiling({
	   	scrollingSpeed: 580,
			loopBottom:true,
			anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
			afterLoad: function(anchorLink, index){
		    navbarFullpage();       
	  	}
		});
  }

  $('.pp-scrollable').on('scroll', function () {
    var scrollTop =$(this).scrollTop();
		if (scrollTop > 0 ) {
			$('.navbar-fullpage').addClass('navbar-fixed');
		}
		else{
			$('.navbar-fullpage').removeClass('navbar-fixed');
		}
	});

  $(".animsition").animsition({
		inClass: 'fade-in',
		 	outClass: 'fade-out',
		inDuration: 1000,
		outDuration: 700,
		linkElement: 'a.project-box',
		loading:true,
		loadingParentElement: 'body',
		loadingClass: 'spinner',
		loadingInner: '<div class="double-bounce1"></div><div class="double-bounce2"></div>',
		timeout: false,
		timeoutCountdown:5000,
		onLoadEvent: true,
		browser: [ 'animation-duration', '-webkit-animation-duration'],
		overlay : false,
		overlayClass : 'animsition-overlay-slide',
		overlayParentElement : 'body',
		transition: function(url){ window.location.href = url; }
	});

	$('.navbar-toggle').on('click',function(){
		$('body').removeClass('menu-is-closed').addClass('menu-is-opened');
	});

	$('.close-menu, .click-capture, .menu-list li a').on('click', function(){
		$('body').removeClass('menu-is-opened').addClass('menu-is-closed');
		$('.menu-list ul').slideUp(300);
	});

	$('.menu-list li a').on('click', function(){
		$('.menu-list li').removeClass('active');
		$(this).closest('li').addClass('active');
	});

	$('.col-resume').on('mouseover',function(){
		$('.section-bg.mask').addClass('hide');
	});

	$('.col-resume').on('mouseleave', function () {
	  $('.section-bg.mask').removeClass('hide');
	});

	function navbarFullpage(){
		if ( $('.pp-section.active').scrollTop() > 0 ){
    	$('.navbar-fullpage').addClass('navbar-fixed');
    }
      else {
    		$('.navbar-fullpage').removeClass('navbar-fixed');
     }
    }

    navbarFullpage();

    function navbar(){
    $(window).scroll(function(){
    	if ( $(window).scrollTop() > 0 ){
	    	$('.navbar').addClass('navbar-fixed');
	      }
	      else{
	    	$('.navbar').removeClass('navbar-fixed');
	     }
    });
	 
    }

    navbar();

    $('#pp-nav').remove().appendTo('.animsition').addClass('white right-boxed hidden-xs');

		$('.pp-nav-up').on('click', function(){
			$.fn.pagepiling.moveSectionUp();
		});

		$('.pp-nav-down').on('click', function(){
			$.fn.pagepiling.moveSectionDown();



		});

		$('.project-row a').on('mouseover',function(){
    	var index = $('.project-row a').index(this)
    	$('.project-row a').removeClass('active');
    	$(this).addClass('active');
    	$('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
    });

	if ($('.js-form').length) {
		$('.js-form').each(function(){
			$(this).validate({
				errorClass: 'error',
			    submitHandler: function(form){
		        	$.ajax({
			            type: "POST",
			            url:"mail.php",
			            data: $(form).serialize(),
			            success: function() {
			            	$('.form-group-message').show();
			            	$('#error').hide();
		                	$('#success').show();
		                },

		                error: function(){
		                	$('.form-group-message').show();
		                	$('#success').hide();
			                $('#error').show();
			            }
			        });
			    }
			});
		});
	}


});