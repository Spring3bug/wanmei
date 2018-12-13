;!function ($) {
	$.fn.lunbo=function (options) {
		var defaults={//默认参数
			lunboClassName:'on',  //激活的类名
			lunboBtns:' .spic ul li',  //切换的按钮
			lunboItems:' .tempWrap ul li', //切换的图片
			lunboItem:' .tempWrap ul',
			lunboArrowLeft:'.left', //左右箭头
			lunboArrowRight:'.right',
			lunboEtype:'click'  //事件类型
		}
		
		var endOptions=$.extend(defaults,options);
		var $num=0;
		var timer=null;
		$(this).each(function(){
			var _this=$(this);
			$(this).hover(function () {
				clearInterval(timer)
			},function () {
				$timer = setInterval(function() {
					tabswitch();
				}, 3500);
			});
			if($num == 0) {
				_this.find(endOptions.lunboBtns).eq($num).addClass(endOptions.lunboClassName).siblings().removeClass(endOptions.lunboClassName);
			}
			console.log(_this.find(endOptions.lunboBtns))
			_this.find(endOptions.lunboBtns).on('click', function() {
				$num = $(this).index();
				alert($num);
				console.log($num)
				_this.find(endOptions.lunboBtns).eq($num).addClass(endOptions.lunboClassName).siblings().removeClass(endOptions.lunboClassName);
				_this.find(endOptions.lunboItem).stop(true).animate({
					left: (-(_this.find(endOptions.lunboItems).eq(0).outerWidth()) * $num)+'px',
				}, 600)
			});
			
			function tabswitch() {
				$num++;
				if($num > _this.find(endOptions.lunboItems).size() - 1) {
					$num = 0;
				}
				_this.find(endOptions.lunboBtns).eq($num).addClass(endOptions.lunboClassName).siblings().removeClass(endOptions.lunboClassName);
				_this.find(endOptions.lunboItem).stop(true).animate({
					left: (-(_this.find(endOptions.lunboItems).eq(0).outerWidth()) * $num)+'px',
				}, 600);
				
			}
			$timer = setInterval(function() {
				tabswitch();
			}, 3500);
		});
	}
}(jQuery)

