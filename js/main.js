 $(document).ready(function(e) {

     $('.menu-toggle').click(function() {
         $('nav ul').slideToggle();
     });
     $(':checkbox:checked').removeAttr('checked');
     $('.frequently_aw_form  .for-checkbox span').click(function() {
         $(this).toggleClass('checked')
     });

     $('.scroll_down').click(function() {
         $('body, html').animate({
             scrollTop: $('.historic, .property-box').offset().top
         }, 500)
     });


     $('.architecture-box3 .box').click(function(e) {
         e.preventDefault()
         if (!$(this).next().is(':visible')) {
             $('.architecture-box2').slideUp(400);
             $('.architecture-box3 .col12').removeClass('active');
             $(this).next().slideDown(400);
             $(this).parent().addClass('active');
         } else {
             $('.architecture-box2').slideUp(400);
             $('.architecture-box3 .col12').removeClass('active');
         }
         return false;
     });


     $('.single-item').slick({
         infinite: true,
         speed: 300,
         slidesToShow: 1,
         slidesToScroll: 1
     });

     $('.single-item2').slick({
         dots: true,
         infinite: true,
         speed: 300,
         slidesToShow: 1,
         slidesToScroll: 1
     });

     $('.single-item3').slick({
         dots: true,
         infinite: true,
         speed: 300,
         slidesToShow: 1,
         slidesToScroll: 1
     });




     $('.responsive').slick({
         dots: false,
         infinite: true,
         speed: 300,
         slidesToShow: 3,
         slidesToScroll: 1,
         responsive: [{
             breakpoint: 1024,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2,
                 infinite: true,
                 dots: true
             }
         }, {
             breakpoint: 1365,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
         }, {
             breakpoint: 767,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
         }, {
             breakpoint: 639,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }]
     });




     $('input, textarea').placeholder({
         customClass: 'my-placeholder'
     });


     $("#slider").owlCarousel({
         navigation: true,
         slideSpeed: 300,
         paginationSpeed: 400,
         singleItem: true
     });


     <!-- fixed header -->
     $('.home-header').after('<div class="space"></div>')
     $(window).scroll(function() {

         if ($(window).scrollTop() > 1) {
             $('.space').css('height', $('.home-header').height());
             $('header').addClass('fixed-header');
         } else {
             $('header').removeClass('fixed-header');
             $('.space').css('height', '0');

         }

     });

     $(function() {
         $.fn.navigate = function(p) {
             var home_top = p.top - 0;
             $('body,html').animate({
                 scrollTop: home_top + 'px'
             }, 800);
         }
         $(".scroll_btn").click(function(e) {
             e.preventDefault();
             var pos = $("#work").position();
             $.fn.navigate(pos);
         });


     });

     $( ".project-link" ).click(function(e){

        e.stopPropagation();

        window.location.href = $(this).attr("href");

     });


     $(".slick-slider .js--scroll-to-content").click(function(e){

        e.preventDefault();

        var h = $(".slick-slider").height();

        $("html, body").animate({
            'scrollTop' : h
        }, 300 );

     });


 });