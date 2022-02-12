$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOfset = $(window).scrollTop();

        // Fixed header
        checkScroll(scrollOfset);  
        
    $(window).on("scroll", function() {
        scrollOfset = $(this).scrollTop();
        checkScroll(scrollOfset);
      
    });

    function checkScroll(scrollOfset) {
        if( scrollOfset >= introH ) {
           header.addClass("fixed");   
        } else {
         header.removeClass("fixed"); 
        }
    }


    // smooth scroll
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top; // ПОЛУЧАЕМ ПОЗ-Ю ЭТОГО ЭЛ ОТ ВЕРХА СТРАНИЦЫ

            $("nav a").removeClass("active");
            $this.addClass("active");

            $("html, body").animate({
                scrollTop: blockOffset
            }, 500);
    });


    
// menu nav toggle
 $("#nav_toggle").on("click", function(event){
     event.preventDefault();

     $(this).toggleClass("active");
     $("#nav").toggleClass("active"); 
 });
    
//  Collapse

$("[data-collapse]").on("click", function(event){
    event.preventDefault();
    
        var $this = $(this),
            blockId = $(this).data('collapse');
        
        
        $this.toggleClass("active");
    });

    // Slider

   $("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
   });
   

//   Switch

$("#switch_mon").on("click", function(event){
    event.preventDefault();

    $(this).toggleClass("active");
    $("#switch_inner").toggleClass("active");
    $("#switch_body").toggleClass("active");
    $("#switch_recom").toggleClass("active");
    
});


$("#switch_ann").on("click", function(event){
    event.preventDefault();

    $(this).toggleClass("active");
    $("#switch_inner2").toggleClass("active");
    $("#switch_body2").toggleClass("active");
    $("#switch_recom2").toggleClass("active");
    
});
   






});