$(document).ready(function(){
	
	control_val = 0;
	position_val = 0;
	if(window.location.href.indexOf("profile") > -1) {
		$(".opt1").addClass("active");
		$(".container").css("left", "-100vw");
		$(".view2").show();
		$(".header").addClass("active");
		position_val = 100;
		control_val = 1;
	} else{
		if(window.location.href.indexOf("abilities") > -1) {
			$(".opt2").addClass("active");
			$(".container").css("left", "-200vw");
			$(".view3").show();
			$(".header").addClass("active");
			position_val = 200;
			control_val = 2;
		} else{
			if(window.location.href.indexOf("experiences") > -1) {
				$(".opt3").addClass("active");
				$(".container").css("left", "-300vw");
				$(".view4").show();
				$(".header").addClass("active");
				position_val = 300;
				control_val = 3;
			} else{
				if(window.location.href.indexOf("projects") > -1) {
					$(".opt4").addClass("active");
					$(".container").css("left", "-400vw");
					$(".view5").show();
					$(".header").addClass("active");
					position_val = 400;
					control_val = 4;
				} else{
					if(window.location.href.indexOf("contact") > -1) {
						$(".opt5").addClass("active");
						$(".container").css("left", "-500vw");
						$(".view6").show();
						$(".header").addClass("active");
						position_val = 500;
						control_val = 5;
					} 
				}
			}
		
		}
	
	};
	
	
	$(window).on("hashchange", function(){
		var hash = window.location.hash;
		if (hash=="" || hash=="#"){
			if ( $(".header").hasClass("active") ) {
				position_val = position_val - 100;
				set_pos = position_val + "vw";
				cur_view = ".view" + (control_val + 1);
				$(".screen").hide();				
				$(cur_view).show();
				$(".view1").show();
				$(".view1").css("left", set_pos);
				$(".container").animate({left: '+=100%'});
				$(".header").removeClass("active");
				$(".on-hover").removeClass("active");
				control_val = 0;
				$('.menu_box').stop().animate({top: '-90vw'});
				$(".mobi_menu").removeClass("active");
			} return false;
		} else{
			if (hash=="#/profile"){
				if(control_val>1){
					position_val = position_val - 100;
					set_pos = position_val + "vw";
					cur_view = ".view" + (control_val + 1);
					$(".screen").hide();
					$(cur_view).show();
					$(".view2").show();
					$(".view2").css("left", set_pos);
					$(".container").animate({left: '+=100%'});
					$(".header").addClass("active");					
				} else{
					if(control_val<1){
						position_val = position_val + 100;
						set_pos = position_val + "vw";
						cur_view = ".view" + (control_val + 1);
						$(".screen").hide();
						$(cur_view).show();
						$(".view2").show();
						$(".view2").css("left", set_pos);
						$(".container").animate({left: '-=100%'});
						$(".header").addClass("active");
					}				
				};
				control_val = 1;
			};
			if (hash=="#/abilities"){
				if(control_val>2){
					position_val = position_val - 100;
					set_pos = position_val + "vw";
					cur_view = ".view" + (control_val + 1);
					$(".screen").hide();
					$(cur_view).show();
					$(".view3").show();
					$(".view3").css("left", set_pos);
					$(".container").animate({left: '+=100%'});
					$(".header").addClass("active");
				} else{
					if(control_val<2){
						position_val = position_val + 100;
						set_pos = position_val + "vw";
						cur_view = ".view" + (control_val + 1);
						$(".screen").hide();
						$(cur_view).show();
						$(".view3").show();
						$(".view3").css("left", set_pos);
						$(".container").animate({left: '-=100%'});
						$(".header").addClass("active");
					}				
				};
				control_val = 2;
			};
			if (hash=="#/experiences"){
				if(control_val>3){
					position_val = position_val - 100;
					set_pos = position_val + "vw";
					cur_view = ".view" + (control_val + 1);
					$(".screen").hide();
					$(cur_view).show();
					$(".view4").show();
					$(".view4").css("left", set_pos);
					$(".container").animate({left: '+=100%'});
					$(".header").addClass("active");
				} else{
					if(control_val<3){
						position_val = position_val + 100;
						set_pos = position_val + "vw";
						cur_view = ".view" + (control_val + 1);
						$(".screen").hide();
						$(cur_view).show();
						$(".view4").show();
						$(".view4").css("left", set_pos);
						$(".container").animate({left: '-=100%'});
						$(".header").addClass("active");
					}				
				};
				control_val = 3;
			};
			if (hash=="#/projects"){
				if(control_val>4){
					position_val = position_val - 100;
					set_pos = position_val + "vw";
					cur_view = ".view" + (control_val + 1);
					$(".screen").hide();
					$(cur_view).show();
					$(".view5").show();
					$(".view5").css("left", set_pos);
					$(".container").animate({left: '+=100%'});	
					$(".header").addClass("active");
				} else{
					if(control_val<4){
						position_val = position_val + 100;
						set_pos = position_val + "vw";
						cur_view = ".view" + (control_val + 1);
						$(".screen").hide();
						$(cur_view).show();
						$(".view5").show();
						$(".view5").css("left", set_pos);
						$(".container").animate({left: '-=100%'});	
						$(".header").addClass("active");
					}				
				};
				control_val = 4;
			};
			if (hash=="#/contact"){
				if(control_val>5){
					position_val = position_val - 100;
					set_pos = position_val + "vw";
					cur_view = ".view" + (control_val + 1);
					$(".screen").hide();
					$(cur_view).show();
					$(".view6").show();
					$(".view6").css("left", set_pos);
					$(".container").animate({left: '+=100%'});	
					$(".header").addClass("active");
				} else{
					if(control_val<5){
						position_val = position_val + 100;
						set_pos = position_val + "vw";
						cur_view = ".view" + (control_val + 1);
						$(".screen").hide();
						$(cur_view).show();
						$(".view6").show();
						$(".view6").css("left", set_pos);
						$(".container").animate({left: '-=100%'});	
						$(".header").addClass("active");
					}				
				};
				control_val = 5;				
			};
		$('.menu_box').stop().animate({top: '-90vw'});
		$(".mobi_menu").removeClass("active");
		};
	});
	$(".on-hover").click(function(){
		$(".on-hover").removeClass("active");
		$(this).addClass("active");
	});
	
	$(".pro-box li").hover(function(){
		$(this).addClass("active");
		
		$(".pro-box li.active > .proj_img").stop().animate({left: '-10%'});		
		$(".pro-box li.active > .proj_desc").stop().animate({left: '0%'});
		$(".pro-box li.active > .proj_over").stop().animate({opacity: '0.8'});
		$(".pro-box li.active > .proj_info").stop().animate({opacity: '1'});
		$(".pro-box li.active > .proj_tags").stop().animate({left: '12%'});
		$(".pro-box li.active > .proj_under").stop().animate({width: '100%', left: '0%', opacity: '1'});
		}, function(){		
		
		
		$(".pro-box li.active > .proj_img").stop().animate({left: '0%'});
		$(".pro-box li.active > .proj_desc").stop().animate({left: '100%'});
		$(".pro-box li.active > .proj_over").stop().animate({opacity: '0'});
		$(".pro-box li.active > .proj_info").stop().animate({opacity: '0'});
		$(".pro-box li.active > .proj_tags").stop().animate({left: '-112%'});
		$(".pro-box li.active > .proj_under").stop().animate({width: '0%', left: '50%', opacity: '0'});
		$(this).removeClass("active");

		
	});
	$(".mobi_menu").click(function(){
		if(!$(this).hasClass("active")){
			$('.menu_box').stop().animate({top: '20vw'});
			$(this).addClass("active");
		} else{
			$('.menu_box').stop().animate({top: '-90vw'});
			$(this).removeClass("active");
		};
	});

});
