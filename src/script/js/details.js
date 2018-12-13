define(['config'], function() {
	require(['jquery'], function() {
		return{
			//放大镜拼接图片
			ulpicajax:!function () {
				var smallpicid=location.search.substring(1).split('=')[1];
				var $bpicul=$('.picfocus .tempWrap');
				var $spicul1=$('.spic ul');
				var $bfpic=$('.picfocus .bf');
				var $bigpicimg=$('.picfocus .tempWrap>ul>li>img')
				var $price=$('.property .price');
				var $title=$('.property .title h1');
				$.ajax({
					url:'http://10.31.155.108/wanmei/php/detail.php',
					data:{
						sid:smallpicid
					},
					//async:false,
					dataType:'json'
				}).done(function (data) {
					var picarr=data.urls.split(',');
					var str='';
					var str1='';
					var str2='';
					var str3='<i>￥'+data.price+'</i>';
					var str4=data.title;
					$.each(picarr, function(index,value) {
						if(index==0){
							str1+='<img style="display:block" sid="'+data.sid+'" src="'+value+'" alt="teelseries/赛睿 Arctis Pro 寒冰 Pro 头戴式 游戏耳机耳麦" title="teelseries/赛睿 Arctis Pro 寒冰 Pro 头戴式 游戏耳机耳麦">';
						}else{
							str1+='<img src="'+value+'" sid="'+data.sid+'" alt="teelseries/赛睿 Arctis Pro 寒冰 Pro 头戴式 游戏耳机耳麦" title="teelseries/赛睿 Arctis Pro 寒冰 Pro 头戴式 游戏耳机耳麦">';
						}
						str+='<li>';
						str+='<img src="'+value+'" sid="'+data.sid+'" alt="teelseries/赛睿 Arctis Pro 寒冰 Pro 头戴式 游戏耳机耳麦" title="teelseries/赛睿 Arctis Pro 寒冰 Pro 头戴式 游戏耳机耳麦">';
						str+='</li>';
						if(index==0){
							str2+='<img style="display:block" src="'+value+'" class="bpic">';
						}else{
							str2+='<img src="'+value+'" class="bpic">';
						}
					});
					str1+='<div class="sf"></div>';
					$spicul1.html(str);
					$bpicul.html(str1);
					$bfpic.html(str2);
					$price.html(str3);
					$title.html(str4);
					//放大镜
					var $box=$('.picfocus .tempWrap');
					var $spic=$('.picfocus .tempWrap img');
					var $sf=$('.picfocus .tempWrap .sf');
					var $df=$('.gallery .bf');
					var $bpic=$('.gallery .bf img');
					
					var $spicli=$('.picfocus .spic li');
					var $spicul=$('.picfocus .spic ul');
					var $num=0;
					var $sfwidth = $df.width() * $spic.width() / $bpic.width();
					var $sfheight = $df.height() * $spic.height() / $bpic.height();
					$sf.width($sfwidth);
					$sf.height($sfheight);
					var $bl = $df.width() / $sf.width();
					$spicli.eq($num).show().addClass('on').siblings().removeClass('on')
					$spicli.hover(function () {
						$num = $(this).index();
						console.log($num);
						$spicli.eq($num).show().addClass('on').siblings().removeClass('on')
						$spic.eq($num).show().siblings('img').hide();
						$bpic.eq($num).show().siblings().hide();
					});
					$box.hover(function () {
						$sf.css({
							visibility: "visible"			
						});
						$df.css({
							display:'block',
						});
					},function () {
						$sf.css({
							visibility: "hidden"			
						})
						$df.css({
							display:'none',
						});
						
					});
					
					$(document).on('mousemove', function(e) {		
						var $wid = e.pageX - $spic.eq($num).offset().left - $sf.width() / 2;
						var $hei = e.pageY - $spic.eq($num).offset().top - $sf.height() / 2;
						
						if($wid <= 0) {
							$wid = 0
						} else if($wid >= $spic.width() - $sf.width()) {
							$wid = $spic.width() - $sf.width()
						}
						if($hei <= 0) {
							$hei = 0
						} else if($hei >= $spic.height() - $sf.height()) {
							$hei = $spic.height() - $sf.height()
						}
						$sf.css({
							left: $wid + 'px',
							top: $hei + 'px'
						})
						$bpic.css({
							left: -$bl * $wid + 'px',
							top: -$bl * $hei + 'px'
						});
					});
					});
			}(),
			buying:! function () {
				var arrsid = [];
				var arrnum = [];
				
				require(['jqcookie'], function() {
					function cookietoarray() {
						if($.cookie('cookiesid') && $.cookie('cookienum')) {
							arrsid =$.cookie('cookiesid').split(',');
							arrnum = $.cookie('cookienum').split(',');
						}
					}
					$('.amount .plus').on('click',function () {
						var $goolsnum=$('.amount #count').val();
						$goolsnum++;
						if ($goolsnum >= 99) {
					        $goolsnum = 99;
					    }
						$('.amount #count').val($goolsnum)
					});
					$('.amount .reduce').on('click',function () {
						var $goolsnum=$('.amount #count').val();
						$goolsnum--;
						 if ($goolsnum <= 1) {
					        $goolsnum = 1;
					    }
						$('.amount #count').val($goolsnum)
					});
					$('.amount input').on('input', function() {
					    var $reg = /^\d+$/g; //只能输入数字
					    var $value = parseInt($(this).val());
					    if ($reg.test($value)) {//是数字
					        if ($value >= 99) {//限定范围
					            $(this).val(99);
					        } else if ($value <= 0) {
					            $(this).val(1);
					        } else {
					            $(this).val($value);
					        }
					    } else {//不是数字
					        $(this).val(1);
					    }
					});
					$('.btns .add').on('click',function () {
						location.reload(true);
						var $sid = $(this).parents('.wrapper').find('.spic img').attr('sid');
						cookietoarray();
						
						if($.inArray($sid, arrsid) != -1) {
							var num = parseInt(arrnum[$.inArray($sid, arrsid)]) + parseInt($('#count').val());
							arrnum[$.inArray($sid, arrsid)] = num;
							$.cookie('cookienum', arrnum.toString(), {expires:10});
						} else {
							arrsid.push($sid);
							$.cookie('cookiesid', arrsid.toString(), {expires:10});
							arrnum.push($('#count').val());
							$.cookie('cookienum', arrnum.toString(), {expires:10}); 
						}
						
						
					});
					
					
				});
				
				
				
				
			}(),
		}
	});
});