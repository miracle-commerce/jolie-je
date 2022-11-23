$(function () {  
  
  $('.RegisterModal').click(function() {
   // $('#loginModal').find('.close').trigger('click');
     $('#loginModal').modal('hide');
	});
  
   $('.loginModal').click(function() {
     
     $('#RegisterModal').hide();
    $('#RegisterModal').find('.close').trigger('click');
     $('#loginModal').modal('show');
	});

  
  $(".card-header").click(function () {
  $('html, body').animate({
    scrollTop: $("#faq-head").offset().top
  }, 500);
});
  
   $('[data-cat-id]').click(function () {
  $('html, body').animate({
    scrollTop: $("#faq-head").offset().top
  }, 500);
});
  
   //accordionOpenHash();
  
  
}); 






// function slickCarouselCompleteLook() {
//   // Complete the look
//   $('.complete-the-look').slick({
//     dots: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,	 
//      responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow:2,
//         slidesToScroll:1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
    
//   });	
// }


// function destroyCarousel() {
//   if ($('.complete-the-look').hasClass('slick-initialized')) {
//     $('.complete-the-look').slick('destroy');
//   }      
// }


function accordionOpenHash(){
 if(location.hash){
     var hash = window.location.hash;
     if (hash) {
       //console.log(hash);
       var selected_faq = hash.replace("#", "");
       
       var element = $(hash);
       if (element.length) {
        $('[href="'+hash+'"]').trigger('click')
     	}
       
        //console.log(selected_faq);
        $(`[data-cat-id='${selected_faq}']`).trigger('click');
       $(`[data-category-id='${selected_faq}']`).trigger('click');
       
      
     }
  }
  
}



$(document).ready(function(){  


  // FAQs
  $('[data-cat-id]:first').addClass('active');
  $('[data-category-id]').hide();
  $('[data-category-id="[data-cat-id]:first"]').show();
  
  var first_cat_id = $("[data-cat-id]:first").attr('data-cat-id');
  var first_cat_txt = $("[data-cat-id]:first").text();

  $('#faq-heading').text(first_cat_txt);
  
  $('[data-category-id="'+first_cat_id+'"').show();
  
  
  $('[data-cat-id]').on("click", function () {
    $('[data-cat-id]').removeClass('active');
    $(this).addClass('active');
    $('.collapse').removeClass('show');
    $('[data-category-id]').hide();
    var on_click_txt = $(this).text();
    var on_click_id = $(this).attr('data-cat-id');
     $('#faq-heading').text(on_click_txt);
  
  $('[data-category-id="'+on_click_id+'"').show();

  });




  
 
  
  //$('#shopify-section-announcement-bar').addClass('sticky-md-top');
  
  $('#insta-feed').addClass('container p-0').css("padding", "");
  
  $('#shopify-section-template--15736874074291__16558260306018af38').removeClass('page-width').addClass('container p-0');

  

  accordionOpenHash();
 
  

 
   $('#main-slider').slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,	 
    autoplay: true,  		
    autoplaySpeed: 5000, 
  });
  

 $('.mix_match_carousel').slick({
    dots: true,
    slidesToShow:1,
    slidesToScroll: 1,	 
    autoplay: true,  		
   adaptiveHeight: true,
    autoplaySpeed: 10000,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    
  });	
    
 
  
  // Shop Collection
  $('.shop-collection-slider').slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,	 
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    
  });	


  // Complete the look 
  $('.complete-the-loop-slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3,	
      loop: false,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
         infinite: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    
  });



  
//  Shop Categories
    $('.shop-category-slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,	 
       responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    
  });

   $('.new-arrivals').slick({
    dots: false,
    slidesToShow: 4,
     infinite: false,
    slidesToScroll: 3,	 
       responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    
  });
 
 // Style Edit 
  $('.shop-style-slider').slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,	 
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
  
  // Homepage Slider
   $('.homepage-slider').slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,	
    
  });

      
  $('#jolie-announcement-bar').slick({   
    dots: false,     
    arrows: false,   
    infinite: true,  
    autoplay: true,
    autoplaySpeed: 3000,  
    slidesToShow: 1,   
    slidesToScroll: 1,	   
    fade: true,
    cssEase: 'linear',
  });

     
    /*Cart Tray*/
        $(document).on('click', '#cart-icon-bubble', function (e) {
            $('#cart-tray').animate({
                width: "toggle"
            });
        });

        $(document).on('click', '#cart-tray-close', function (e) {
            $('#cart-tray').animate({
                width: "toggle"
            });
        });




  $('#footer-bottom ul li a').on('click', function(){
   var hash = window.location.hash;
    if(hash){
     var url = $(this).attr('href');
      console.log($(this).attr('href'));
     window.location = `${url}`;
      location.reload();
    }
  });

   $('#f_item_6 a').on('click', function(){
   var hash = window.location.hash;
    if(hash){
     var url = $(this).attr('href');
      console.log($(this).attr('href'));
     window.location = `${url}`;
      location.reload();
    }
  });

  $('#f_item_4 a').on('click', function(){
   var hash = window.location.hash;
    if(hash){
     var url = $(this).attr('href');
      console.log($(this).attr('href'));
     window.location = `${url}`;
      location.reload();
    }
  });

  $('#f_item_5 a').on('click', function(){
   var hash = window.location.hash;
    if(hash){
     var url = $(this).attr('href');
      console.log($(this).attr('href'));
     window.location = `${url}`;
      location.reload();
    }
  });
  

setTimeout(function() {
  
      $('#preloader').hide();
  
    }, 1000);
  
     
});





