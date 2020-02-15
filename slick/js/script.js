
$('.all').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
    
  })


  $('.logoslideAll').slick({
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    
  })
  


  $(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
            $(".header").css("padding","10px 0")
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
           $(".header").css("padding","20px 0")
        }
    });
});



function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  AOS.init();

  $('.counter').each(function(){
    var $this=$(this),
    countTo=$this.attr('data-count');

    $({countNum:$this.text()}).animate({
        countNum:countTo
        
    },
    {
        duration:3000,
        easing:'linear',
        step:function(){
            $this.text(Math.floor(this.countNum));
        },
        complete:function(){
            $this.text(this.countNum);
        }
    }
    
    )
});


var acc=document.getElementsByClassName("accordion");
var i;
for(i=0;i<acc.length;i++){
    acc[i].addEventListener('click',function(){
        var panel1=this.nextElementSibling;
        if(panel1.style.display=="block"){
            panel1.style.display="none";
        }
        else{
            panel1.style.display="block"
        }
    })
}


$('.offers-box').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1
});

