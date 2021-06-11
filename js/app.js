

$('.mobile_menu').slicknav({
    label: '',
    prependTo: 'header .middle .container',
    closedSymbol: '+',
    openedSymbol: '-',
    init: function () {
        /*$('.slicknav_nav').find('ul').removeClass('dropdown-nav');
        $('.slicknav_nav').find('li').removeClass('dropdown-show');
        $('.slicknav_nav').find('a').removeClass('arrow-toggle');*/
    }
});

jQuery('#product-category-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
	dots:false,
    autoplay:true,
	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

jQuery('.discount-category-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
	dots:false,
    autoplay:false,
	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

jQuery('#industries-banner').owlCarousel({
    loop:true,
    margin:35,
    nav:false,
	dots:true,
    autoplay:true,
	
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

jQuery('#testimonials').owlCarousel({
    loop:true,
    margin:40,
    nav:false,
	dots:false,
    autoplay:true,
	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

jQuery('#client').owlCarousel({
    loop:true,
    margin:68,
    nav:false,
	dots:false,
    autoplay:true,
	
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});

// Add minus icon for collapse element which is open by default
jQuery(".collapse.show").each(function(){
    jQuery(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
  });
  
  // Toggle plus minus icon on show hide of collapse element
  jQuery(".collapse").on('show.bs.collapse', function(){
    jQuery(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function(){
    jQuery(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });


  jQuery(".card .card-header:first").addClass("active").show(); //Activate first tab

  jQuery(".card-header").on('click', '.card-header', function(){    
    if (jQuery(this).find('.accordion-toggle').hasClass('active')) {        
    }
    

 })


 $('.open_pop').click(function(){
     $('.popup_details_back').addClass('open');
     $('.blur_back').addClass('open');
 });
 $('.cross').click(function(){
    $('.popup_details_back').removeClass('open');
    $('.blur_back').removeClass('open');
})










