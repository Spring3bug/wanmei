 define(['config'], function() {
	require(['jquery'], function() {
		return{
			//引入头尾部
			indexgonggong:! function(){
				$('.gonggong').load('header.html',function () {
					$('.header_cart').hover(function() {
					$(this).find('.icon').addClass('curr');
					$(this).find('.cartNum').addClass('curr');
					$(this).find('.cart_list').stop(true).animate({
						height: 105
					});
				}, function() {
					$(this).find('.icon').removeClass('curr')
					$(this).find('.cartNum').removeClass('curr');
					$(this).find('.cart_list').stop(true).animate({
						height: 0
					});
				});
				var $inputbox = $('.nav .nav-seach input');
				$inputbox.focus(function() {
					$inputbox.css({
						borderColor: 'red',
					});
				});
					//主页头部cookie
					require(['jqcookie'], function() {
						if($.cookie('username')){
							$('.logindl').css({
								display:'none'
							});
							$('.closedl').css({
								display:'inline-block'
							});
							$('.closedl .userlogin').html($.cookie('username')+'欢迎你,');
						}
						$('.closedl .userclose').on('click',function () {
							$('.logindl').css({
								display:'inline-block'
							});
							$('.closedl').css({
								display:'none'
							});
							$.cookie('username',$.cookie('username'),{expires:-1});
						})
						if($.cookie('cookiesid') && $.cookie('cookienum')) {
						var $countnum=0;
							var n = $.cookie('cookienum').split(',');
							$.each(n, function(i, value) {
								parseInt(n[i]);
								$countnum+=parseInt(n[i]);
							});
							$('.cartNum').html($countnum);
							$('.fixed_cart_tip b').html($countnum);
							
						}
					})
				
				});
				$('.footer').load('footer.html');
			}(),
			//主页li下面的购物车
			lishopcar:! function (){
				$('.area .product-item').hover(function () {
					$(this).find('.add').stop(true).animate({
						height:90,
					});
				},function () {
					$(this).find('.add').stop(true).animate({
						height:0,
					});
				});
			}(),
			//楼梯
			louti:! function(){
				$(window).on('scroll',function(){
					var $top=$(window).scrollTop();
					if($top>=700){
						$('.loutinav').show();
					}else{
						$('.loutinav').hide();
					}
					$('.area').each(function(index,element){
						var $scrolltop=$(element).offset().top+300;
						if($scrolltop>$top){
							$('.loutinav li').removeClass('active');
							$('.loutinav li').eq(index).addClass('active');
							return false;
						}
					});
				});
				$('.loutinav li').not('.last').on('click',function(){
					$(this).addClass('active').siblings('.loutinav li').removeClass('active');
					var $top=$('.area').eq($(this).index('.loutinav li')).offset().top;
					$('html,body').animate({
						scrollTop:$top
					});
				});
				$('.last').on('click',function(){
					$('html,body').animate({
						scrollTop:0
					});
				});
			}(),
			//banner图
			banner:!function () {
				var $bannerbox=$('.banner');
				var $ullist=$('.banner ul');
				var $pics=$('.banner ul li');
				var $btns=$('.banner ol li');
				var $num=0;
				var $timer=null;
				var $prev=$('.banner .prev');
				var $next=$('.banner .next');
				var $liwidth=$pics.eq(0).outerWidth();
				var $lisize=$pics.size();
				var $ollisize=$btns.size();
				$bannerbox.hover(function(){
					clearInterval($timer)
				},function () {
					$timer=setInterval(function(){
						$next.click();
					},3500);
				});
				$btns.on('click',function () {
					$num=$(this).index();
					$btns.eq($num).addClass('active').siblings('li').removeClass('active');
					tabswitch();
				});
				$btns.hover(function () {
					$btns.eq($(this).index()).addClass('active')
				},function () {
					$btns.eq($(this).index()).removeClass('active');
					$btns.eq($num).addClass('active')
				})
				$next.on('click',function(){
					$num++;
					if($num>$lisize-1){
						$num=0;
					}
					tabswitch();
				});
				$prev.on('click',function(){
					$num--;
					if($num<0){
						$num=$lisize-1;
					}
					tabswitch();		
				});
				function tabswitch () {
					$btns.eq($num).addClass('active').siblings('li').removeClass('active');
					$ullist.stop(true).animate({
						left:-$liwidth*$num
					},600);	
				}
				$timer=setInterval(function(){
					$next.click();
					//console.log(+$num)
				},3500);
			}(),
			//Dota2神秘商店tab切换
			tab:!function () {
				var $tabdd=$('.area .title_main dd');
				var $taba=$('.area .title_main dd a');
				var $tempWrap=$('.wrapper>.tempWrap');
				var $center=$('.tempWrap .content');
				var $main=$('.tempWrap .content .main');
				var $mainwidth=$main.eq(0).outerWidth();
				var $num=0;
				var $timer=null;
				var $mainsize=$main.size();
				$tempWrap.hover(function(){
					clearInterval($timer)
				},function () {
					$timer=setInterval(function(){
						tabswitch ();
					},3500);
				});
				if($num==0){
					$tabdd.eq($num).addClass('on').siblings('dd').removeClass('on');
				}
				$tabdd.on('click',function () {
					$num=$(this).index();
					$tabdd.eq($num).addClass('on').siblings('dd').removeClass('on');
					$center.stop(true).animate({
						left:-$mainwidth*$num
					},600)
				});
				$timer=setInterval(function(){
					tabswitch ();
					//console.log("11"+$num)
				},3500);
				function tabswitch () {
					$num++;
					if($num>$mainsize-1){
						$num=0;
					}
					$tabdd.eq($num).addClass('on').siblings('dd').removeClass('on');
					$center.stop(true).animate({
						left:-$mainwidth*$num
					},600);
				}
			}(),
			
			
			
			//Dota2神秘商店tab切换中轮播图
			/*tabbanner:!function(){
				var $areabox=$('.area_slide');
				var $ullist1=$('.area_slide .tempWrap ul');
				var $pics1=$('.area_slide .tempWrap ul li');
				var $ollist=$('.area_slide ol');
				var $btns1=$('.area_slide ol li');
				var $num1=0;
				var $timer1=null;
				var $prev1=$('.area_slide .prev');
				var $next1=$('.area_slide .next');
				var $liwidth1=$pics1.eq(0).outerWidth();
				var $lisize1=$pics1.size();
				var $ollisize1=$btns1.size();
				var $olliwidth1=$btns1.eq(0).outerWidth();
				$ollist.css({
					width:$olliwidth1*$ollisize1
				});
				$ullist1.css({
					width:$liwidth1*$lisize1,
					left:0
				});
				$areabox.hover(function(){
					clearInterval($timer1)
				},function () {
					$timer1=setInterval(function(){
						$next1.click();
					},2000);
				});
				$btns1.hover(function () {
					$btns1.eq($(this).index()).addClass('active').siblings('ol li').removeClass('active');
				},function () {
					$btns1.eq($(this).index()).removeClass('active').siblings('ol li').addClass('active');
				})
				$btns1.on('click',function () {
					$num1=$(this).index();
					console.log($num1)
					$btns1.eq($num1).addClass('active').siblings(' ol li').removeClass('active');
					tabswitch();
				});
				$next1.on('click',function(){
					$num1++;
					if($num1>2-1){
						$num1=0;
					}
					tabswitch();
				});
				$prev1.on('click',function(){
					$num1--;
					if($num1<0){
						$num1=2-1;
					}
					tabswitch();		
				});
				function tabswitch () {
					$ullist1.stop(true).animate({
						left:-$liwidth1*$num1
					},600);	
				}
				$timer1=setInterval(function(){
					$next1.click();
				},2000);
			}(),*/
			
			
			
			goolsajax:!function () {
				$.ajax({
					url:"http://10.31.155.108/wanmei/php/wanmeidata.php",
					dataType:"json"
				}).done(function (data) {
					var str='';
					$.each(data, function(index,value) {
						if((index+1)%4==0){
							str+='<div class="product-item list in" style="margin-right:0;">'
						}else{
							str+='<div class="product-item list in">';
						}
						
						str+='<a href="javascript:;" class="like "><span></span><font>1</font></a>';
						str+='<a href="http://10.31.155.108/wanmei/src/details.html?sid='+value.sid+'" target="_blank"><img class="lazy" data-original="'+value.url+'" alt="赛睿 rival 600 有线游戏鼠标rgb宏编程双传感防滑侧裙配重" width="160" height="160" title="赛睿 rival 600 有线游戏鼠标rgb宏编程双传感防滑侧裙配重"></a>';
						str+='<p class="name ellipsis" title="赛睿 rival 600 有线游戏鼠标rgb宏编程双传感防滑侧裙配重">'+value.title+'</p><p class="price">￥'+value.price+'</p>'
						str+='<div class="add"><a class="star stars0" href="javascript:;" target="_blank"></a><a href="javascript:;" class="btn btn_addCart"><span></span>加入购物车</a></div>';
						str+='</div>'
					});
					$('.area .main1').html(str);
					
					require(['jqlzload'],function () {
						$(function() {
							$("img.lazy").lazyload({
								effect: "fadeIn"
							});
						});
					})
					$('.area .product-item').hover(function () {
					$(this).find('.add').stop(true).animate({
						height:90,
					});
				},function () {
					$(this).find('.add').stop(true).animate({
						height:0,
					});
				});
				});
			}(),
			
			
		}
	});

});
