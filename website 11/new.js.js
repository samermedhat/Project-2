/******* Nav *********/

$(".home1").mouseenter(function(){
     
 $(".home2").css("width","65px")  
      
});
$(".home1").mouseleave(function(){
    
 $(".home2").css("width","0px")  
      
});

$(".about1").mouseenter(function(){
     
 $(".about2").css("width","65px")  
      
});
$(".about1").mouseleave(function(){
    
 $(".about2").css("width","0px")  
      
});

$(".blog1").mouseenter(function(){
     
 $(".blog2").css("width","55px")  
      
});
$(".blog1").mouseleave(function(){
    
 $(".blog2").css("width","0px")  
      
});

$(".statics1").mouseenter(function(){
     
 $(".statics2").css("width","65px")  
      
});
$(".statics1").mouseleave(function(){
    
 $(".statics2").css("width","0px")  
      
});

$(".portfolio1").mouseenter(function(){
    
 $(".portfolio2").css("width","75px")  
      
});
$(".portfolio1").mouseleave(function(){
    
 $(".portfolio2").css("width","0px")  
      
});

$(".contact1").mouseenter(function(){
    
 $(".contact2").css("width","65px")  
      
});
$(".contact1").mouseleave(function(){
    
 $(".contact2").css("width","0px")  
      
});

/**************** About *************/

$(".team img").mouseenter(function(){
$(this).css("transform","scale(1.3,1.3)");
$(".team .over1").fadeIn()   
});
$(".team img").mouseleave(function(){ 
$(this).css("transform","scale(1,1)")
$(".team .over1").fadeOut() 
});

$(".office img").mouseenter(function(){
$(this).css("transform","scale(1.3,1.3)");
$(".office .over1").fadeIn()   
});
$(".office img").mouseleave(function(){ 
$(this).css("transform","scale(1,1)")
$(".office .over1").fadeOut() 
});

/**************** Blog *************/

var s1 = document.getElementById('_s1');
var a1 = document.getElementById('_a1');

var s2 = document.getElementById('_s2');
var a2 = document.getElementById('_a2');

var s3 = document.getElementById('_s3');
var a3 = document.getElementById('_a3');

$(".slid1 .s").click(function(){
    
   if(a2.classList.contains('active'))
       {
        a2.classList.remove('active')
        $(".slid2 .a").slideUp()
        $(".slid1 .a").addClass('active') 
        $(".slid1 .a").slideToggle()
       }
   else if(a3.classList.contains('active'))
       {
        a3.classList.remove('active')
        $(".slid3 .a").slideUp()
        $(".slid1 .a").addClass('active') 
        $(".slid1 .a").slideToggle()
       }    
    else
        {
        $(".slid1 .a").addClass('active')
        $(".slid1 .a").slideToggle()
        }
    
     
});
$(".slid2 .s").click(function(){
    
    if(a1.classList.contains('active'))
       {
    a1.classList.remove('active')
    $(".slid1 .a").slideUp() 
    $(".slid2 .a").addClass('active')
    $(".slid2 .a").slideToggle()
       }
   else if(a3.classList.contains('active'))
       {
        a3.classList.remove('active')
        $(".slid3 .a").slideUp()
        $(".slid2 .a").addClass('active') 
        $(".slid2 .a").slideToggle()
       }    
    else
        {
        $(".slid2 .a").addClass('active')  
        $(".slid2 .a").slideToggle()
        }        
    
});
$(".slid3 .s").click(function(){
    
   if(a2.classList.contains('active'))
       {
        a2.classList.remove('active')
        $(".slid2 .a").slideUp() 
        $(".slid3 .a").addClass('active') 
        $(".slid3 .a").slideToggle()
       }
   else if(a1.classList.contains('active'))
       {
        a1.classList.remove('active')
        $(".slid1 .a").slideUp() 
        $(".slid3 .a").addClass('active') 
        $(".slid3 .a").slideToggle() 
       }    
    else
        {
        $(".slid3 .a").addClass('active') 
        $(".slid3 .a").slideToggle()
        } 
  
});

var c1 = document.getElementById('one')
var c2 = document.getElementById('two')
var c3 = document.getElementById('three')

$(".on").click(function(){
$(".client2").fadeOut()  
$(".client3").fadeOut()  
$(".client1").fadeIn()

$(".thre").css("opacity",".5")
$(".tw").css("opacity",".5")
$(".on").css("opacity","1")  
});
$(".tw").click(function(){
$(".client1").fadeOut() 
$(".client3").fadeOut()
$(".client2").fadeIn()  

$(".thre").css("opacity",".5")
$(".on").css("opacity",".5")
$(".tw").css("opacity","1")     
});
$(".thre").click(function(){
$(".client1").fadeOut()  
$(".client2").fadeOut() 
$(".client3").fadeIn()  

$(".tw").css("opacity",".5")
$(".on").css("opacity",".5")
$(".thre").css("opacity","1")  


});

/************* Statics **************/

window.onload = function(){
   $(".nav").css("color","#fff");
   $(".nav h3 span").css("color","#fff"); 
} 
$(window).scroll(function(){
   
  if($(window).scrollTop() == '0')
      {
    $(".nav").css("position","absolute");     
    $(".nav").css("top","0px");
    $(".nav").css("background-color","transparent");
    $(".nav").css("color","#fff");
    $(".nav h3 span").css("color","#fff");       
      }
  
else if($(window).scrollTop() > '0')
      {
     $(".nav").css("position","fixed");     
     $(".nav").css("top","0px");
     $(".nav").css("background-color","white");
     $(".nav").css("color","#ff0052");
      $(".nav h3 span").css("color","#5cc1ea");
          
    if($(window).scrollTop() >= '2153')
      {          
var reviews = document.getElementById('reviews');
var downloads = document.getElementById('downloads');
var liked = document.getElementById('liked');
var rated = document.getElementById('rated');

setInterval(function(){  
    
if(reviews.textContent <= 390)
        {
    reviews.textContent = 20+parseInt(reviews.textContent);    
        }
else if(downloads.textContent <= 340)
        {
    downloads.textContent = 20+parseInt(downloads.textContent);    
        }
else if(liked.textContent <= 40)
        {
    liked.textContent = 10+parseInt(liked.textContent);    
        }     
else if(rated.textContent <= 120)
        {
    rated.textContent = 10+parseInt(rated.textContent);    
        }  
   },200);   
      }     
   
      }   
  
 });
 
/************* Portfolio **************/

$(".all").click(function(){
$(this).css("outline","0px")
$(".design2").css("transform","scale(1,1)")
$(".identity2").css("transform","scale(1,1)")
$(".photography2").css("transform","scale(1,1)")
$(".application2").css("transform","scale(1,1)")
});

$(".design1").click(function(){
$(this).css("outline","0px")
$(".design2").css("transform","scale(1,1)")
$(".identity2").css("transform","scale(0,0)")
$(".photography2").css("transform","scale(0,0)")
$(".application2").css("transform","scale(0,0)")
});

$(".identity1").click(function(){
       $(this).css("outline","0px")
   $(".identity2").css("transform","scale(1,1)")
   $(".design2").css("transform","scale(0,0)")
   $(".photography2").css("transform","scale(0,0)")
   $(".application2").css("transform","scale(0,0)")
});

$(".photography1").click(function(){
       $(this).css("outline","0px")
   $(".photography2").css("transform","scale(1,1)")
   $(".identity2").css("transform","scale(0,0)")
   $(".design2").css("transform","scale(0,0)")
   $(".application2").css("transform","scale(0,0)")
});

$(".application1").click(function(){
       $(this).css("outline","0px")
   $(".application2").css("transform","scale(1,1)")
   $(".identity2").css("transform","scale(0,0)")
   $(".design2").css("transform","scale(0,0)")
   $(".photography2").css("transform","scale(0,0)")
});

/********** Contact Us *****************/

$(".in1").focusin(function(){
    
$(this).css("outline","0px")    
$(".name2").css("width","350px")
$(".name").css("top","3693px")  
$(".name").css("font-size","18px")    
    
});
$(".in1").focusout(function(){   
    
if($(this).val() == '')
    {
$(".name2").css("width","0px")        
$(".name").css("top","3724px")  
$(".name").css("font-size","14px")     
    }
    
 else
     {
$(".name2").css("width","350px")         
$(".name").css("top","3693px")  
$(".name").css("font-size","18px")    
     }
  
});

$(".in2").focusin(function(){
    
$(this).css("outline","0px")    
$(".email2").css("width","350px")
$(".email").css("top","3764px")  
$(".email").css("font-size","18px")    
    
});
$(".in2").focusout(function(){   
    
if($(this).val() == '')
    {
$(".email2").css("width","0px")        
$(".email").css("top","3794px")  
$(".email").css("font-size","14px")     
    }
    
 else
     {
$(".email2").css("width","350px")         
$(".email").css("top","3764px")  
$(".email").css("font-size","18px")    
     }
  
});

$(".in3").focusin(function(){
    
$(this).css("outline","0px")    
$(".phone2").css("width","350px")
$(".phone").css("top","3836px")  
$(".phone").css("font-size","18px")    
    
});
$(".in3").focusout(function(){   
    
if($(this).val() == '')
    {
$(".phone2").css("width","0px")        
$(".phone").css("top","3864px")  
$(".phone").css("font-size","14px")     
    }
    
 else
     {
$(".phone2").css("width","350px")         
$(".phone").css("top","3836px")  
$(".phone").css("font-size","18px")    
     }
  
});

$(".in4").focusin(function(){
    
$(this).css("outline","0px")    
$(".msg2").css("width","350px")
$(".msg").css("top","3690px")  
$(".msg").css("font-size","18px")    
    
});
$(".in4").focusout(function(){   
    
if($(this).val() == '')
    {
$(".msg2").css("width","0px")        
$(".msg").css("top","3724px")  
$(".msg").css("font-size","14px")     
    }
    
 else
     {
$(".msg2").css("width","350px")         
$(".msg").css("top","3690px")  
$(".msg").css("font-size","18px")    
     }
  
});

$(".contact button").mouseenter(function(){
    
    $(".bt1").css("left","43%") 
    $(".bt1").css("width","200px")
    
    $(".bt2").css("left","43%") 
    $(".bt2").css("width","200px")
    
});
$(".contact button").mouseleave(function(){
    
    $(".bt1").css("left","51%") 
    $(".bt1").css("width","0px") 
    
    $(".bt2").css("left","51%") 
    $(".bt2").css("width","0px")    
});