$(function(){
  var n=0;
  var n1=0;
  var pos=0;
  var video01=document.getElementById("oh_video");
  var keyH="";
  var t="";
  var timer=0;
  var w=300;
  var amount="";
  var total=0;

 $(window).resize(function(){
		keyH=$(".keyvisual img").height();

		$(".keyvisual").css({height:keyH});

	});
  $(window).scroll(function(){
	clearTimeout(timer);

	timer=setTimeout(function(){
		t=$(window).scrollTop();

		if(t < $("#article").offset().top-200){
			// $(".video_inner").removeClass("on");
			// $(".video_back").removeClass("on");
			// $(".banner").removeClass("on");
			// $(".gallery_name").removeClass("on");
			// $(".go_top").removeClass("on");
		}
		else if(t >= $("#article").offset().top-200 && t < $(".banner").offset().top-200){
			$(".video_inner").addClass("on");
			$(".video_back").addClass("on");
			$(".notice_content").addClass("on");
		}
		else if(t >= $(".banner").offset().top-200 && t < $(".gallery_name").offset().top){
			$(".banner").addClass("on");
      $(".gallery_name").addClass("on");
      $(".gallery_back").addClass("on");
      $(".go_top").addClass("on");
		}
		else{

		}
	}, 150);
  });
	$(window).trigger("resize");
  $(".go_top").click(function(e){
    e.preventDefault();
    $("html ,body").animate({scrollTop:0}, 800);
  });

  setInterval(function(){
     n++;
     pos=n*-1*100;

     if(n == 2){
        html0=$(".keyvisual ul li").eq(0).html();
        $("<li>"+html0+"</li>").appendTo(".keyvisual ul");
     }
     $(".keyvisual ul").animate({left:pos+"%"}, 300, function(){
        if(n == 2){
           $(".keyvisual ul").css({left:0});
           n=0;
           $(".keyvisual ul li").last().remove();
        }
     });
  },5000);

  $(".video_text1 a").click(function(e){
    e.preventDefault();
    oh_video1.play();
  }
);
$(".video_text2 a").click(function(e){
  e.preventDefault();
  oh_video2.play();
}
);
$(".video_text3 a").click(function(e){
  e.preventDefault();
  oh_video3.play();
}
);

$(".notic_content dl > dt > a").hover(function(){
  $(this).css({"color":"#f6ee25"});
});

  function leftMoving(){
    if(n1 < (total - 1)){
      n1++;
    }
    else{
      n1=0;
    }

    amount=-w; // amount= amount-w;
    $(".gallery_num").animate({left : amount}, function(){
    $(".gallery_num").append($(".gallery_num li").first());

    $(".gallery_num").css({left : 0});
    });
  }
  function rightMoving(){

  }

  setInterval(function(){
		leftMoving();
	}, 4000);


});
