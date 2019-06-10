$(function(){
  var n=0;
  var pos=0;
  var video01=document.getElementById("oh_video");
  var keyH;


 $(window).resize(function(){
		keyH=$(".keyvisual img").height();

		$(".keyvisual").css({height:keyH});
	});
	$(window).trigger("resize");

  // $(".keyvisual li").eq(n).addClass("active");
  // setInterval(function(){
  //   if(n < 1){
  //     n++;
  //   }
  //   else{
  //     n=0;
  //   }
  //   pos=-1*n*600;
  //   $(".keyvisual li").removeClass("active");
  //   $(".keyvisual li").eq(n).addClass("active");
  // }, 5000);

  // $(".controller").click(function(e){
  //   e.preventDefault();
  //   $(this).fadeOut(300);
  //   video01.play();
  // });
  // $(".video_inner a #oh_video").click(function(e){
  //   e.preventDefault();
  //   $(".controller").fadeIn(300);
  //   video01.pause();
  // });
  // video01.addEventListener("ended", function(){
  //   $(".controller").fadeIn(300);
  //   video01.pause();
  //   video01.currentTime=0;
  // });

  setInterval(function(){
     n++;
     pos=n*-1*100;

     if(n==2){
        html0=$(".keyvisual ul li").eq(0).html();
        $("<li>"+html0+"</li>").appendTo(".keyvisual ul");
     }
     $(".keyvisual ul").animate({left:pos+"%"},300,function(){
        if(n==2){
           $(".keyvisual ul").css({left:0});
           n=0;
           $(".keyvisual ul li").last().remove();
        }
     });
  },5000);

  // @media only screen and (max-width : 1200px){
  //
  // }
  // @media only screen and (max-width : 1000px){
  //
  // }
  // @media only screen and (max-width : 760px){
  //
  // }
  // @media only screen and (max-width : 460px){
  //
  // }
});
