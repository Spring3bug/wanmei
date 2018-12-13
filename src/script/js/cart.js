define(['config'], function() {
	require(['jquery'], function() {
		return{
			//购物车
			gouwuche:! function () {
				require(['jqcookie'], function() {
					//1.渲染商品列表, 传入两个参数，一个id和数量，根据id和数量渲染整个可见的列表.
					function goodslist(id, count) {
						$.ajax({
							url: 'http://10.31.155.108/wanmei/php/wanmeidata.php',
							dataType: 'json'
						}).done(function(data) {
							$.each(data, function(index, value) {
								if(id == value.sid) {
									var $clonebox = $('.itemlist:hidden').clone(true, true);
									$clonebox.find('.itempic').find('img').attr('src', value.url);
									$clonebox.find('.itempic').find('img').attr('sid', value.sid);
									$clonebox.find('.itemtitle').html(value.title);
									$clonebox.find('.itemprice').find('font').html(value.price);
									$clonebox.find('.number-input').find('input').val(count);
									$clonebox.find('.itempricesum').find('font').html((value.price * count).toFixed(2));
									$clonebox.css('display', 'table-row');
									$('.item').append($clonebox);
									priceall(); //计算总价的
								}
							});
						})
					}
					//2.获取cookie，执行渲染列表的函数
					if($.cookie('cookiesid') && $.cookie('cookienum')) {
						var s = $.cookie('cookiesid').split(',');
						var n = $.cookie('cookienum').split(',');
						$.each(s, function(i, value) {
							goodslist(s[i], n[i]);
						});
					}
					
					//3.如果购物车为空，显示empty-cart盒子(购物车空空的)
					kong();
					function kong() {
						if($.cookie('cookiesid') && $.cookie('cookienum')) {
							$('.cart_null').hide(); //cookie存在，购物车有商品，隐藏盒子。
						} else {
							$('.cart_null').show();
						}
					}
				
					//4.计算总价和总的商品件数，必须是选中的商品。
					function priceall() {
						var $sum = 0;
						var $count = 0;
						$('.itemlist:visible').each(function(index, element) {
							if($(element).find('.checkboxone input').prop('checked')) {
								$sum += parseInt($(element).find('.number-input').find('input').val());
								$count += parseFloat($(element).find('.itempricesum').find('font').html());								
							}
						});
						$('#num').find('font').html($sum);
						$('.checkoutPrice').html($count.toFixed(2));
					}
					//5.全选操作
					$('.checkboxall').on('change', function() {
						$('.itemlist:visible').find(':checkbox').prop('checked', $(this).prop('checked'));
						$('.checkboxall').prop('checked', $(this).prop('checked'));
						priceall(); //取消选项，重算总和。
					});
	
					var $inputs = $('.itemlist:visible').find(':checkbox');
					$('.item').on('change', $inputs, function() { //事件的委托的this指向被委托的元素
						if($('.itemlist:visible').find('input:checkbox').length == $('.itemlist:visible').find('input:checked').size()) {
							$('.checkboxall').prop('checked', true);
						} else {
							$('.checkboxall').prop('checked', false);
						}
						priceall(); //取消选项，重算总和。
					});
					
					
					//6.数量的改变
					//改变商品数量++
					$('.number-input .plus').on('click', function() {
					    var $count = $(this).parents('.itemlist').find('.number-input input').val();//值
					    $count++;
					    if ($count >= 99) {
					        $count = 99;
					    }
					   	$(this).parents('.itemlist').find('.number-input input').val($count);
					    $(this).parents('.itemlist').find('.itempricesum').find('font').html(singlegoodsprice($(this)));//改变后的价格
					    console.log($(this).parents('.itemlist').find('.number-input input').val())
					    priceall();
					    setcookie($(this));
					
					});
					//改变商品数量--
					$('.number-input .disable').on('click', function() {
					    var $count = $(this).parents('.itemlist').find('.number-input input').val();
					    $count--;
					    if ($count <= 1) {
					        $count = 1;
					    }
					    $(this).parents('.itemlist').find('.number-input input').val($count);
					    $(this).parents('.itemlist').find('.itempricesum').find('font').html(singlegoodsprice($(this)));//改变后的价格
					    priceall();
					    setcookie($(this));
					});
					
					//直接输入改变数量
					$('.number-input input').on('input', function() {
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
					    $(this).parents('.itemlist').find('.itempricesum').find('font').html(singlegoodsprice($(this)));//改变后的价格
					    priceall();
					    setcookie($(this));
					});
					
					//7.计算数量改变后单个商品的价格
					function singlegoodsprice(obj) { //obj:当前元素
					    var $dj = parseFloat(obj.parents('.itemlist').find('.itemprice').find('font').html());//单价
					    var $cnum = parseInt(obj.parents('.itemlist').find('.number-input input').val());//数量
					    return ($dj * $cnum).toFixed(2);//结果
					}
					
					//8.将改变后的数量的值存放到cookie
					//点击按钮将商品的数量和id存放cookie中
					var arrsid=[]; //商品的id
					var arrnum=[]; //商品的数量
					//提前获取cookie里面id和num
					function cookietoarray(){
						if($.cookie('cookiesid') && $.cookie('cookienum')){
							arrsid=$.cookie('cookiesid').split(',');  
							arrnum=$.cookie('cookienum').split(',');
						}
					}
					function setcookie(obj) {
						cookietoarray();
					    var $index = obj.parents('.itemlist').find('img').attr('sid');
					    arrnum[$.inArray($index,arrsid)] = obj.parents('.itemlist').find('.number-input input').val();
					    $.cookie('cookienum', arrnum.toString(), {expires:7});
					}
					
					//9.删除操作
					//删除cookie
					function delgoodslist(sid, arrsid) {
						var $index = -1;
						$.each(arrsid, function(index, value) {
							if(sid == value) {
								$index = index; 
							}
						});
						arrsid.splice($index, 1); 
						arrnum.splice($index, 1);
						$.cookie('cookiesid', arrsid.toString(), 7);
						$.cookie('cookienum', arrnum.toString(), 7);
					}

					//删除单个商品的函数(委托)
					$('.item').on('click', '.del', function(ev) {
						cookietoarray();
						if(confirm('你确定要删除吗？')) {
							$(this).first().parents('.itemlist').remove();
						}
						delgoodslist($(this).first().parents('.itemlist').find('img').attr('sid'), arrsid);
						priceall();
					});

					//删除全部商品的函数
					$('.batch-delete').on('click', function() {
						cookietoarray();
						if(confirm('你确定要全部删除吗？')) {
							$('.itemlist:visible').each(function() {
								if($(this).find('input:checkbox').is(':checked')) {
									$(this).remove();
									delgoodslist($(this).find('img').attr('sid'), arrsid);
								}
							});
							priceall();
						}
					});
		
				});
			}(),
		}
	});
});