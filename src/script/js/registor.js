define(['config'], function() {
	require(['jquery'], function() {
		return{
			footer:function () {
				$('.footer1').load('footer.html .copyright');
			}(),
			formregistor:! function () {
				require(['jqvalidate'], function() {
					$(function(){
						$(function(){
							$.validator.addMethod("isMobile", function(value, element) {
								var length = value.length;
								var mobile = /^1[34578]\d{9}$/;
								return this.optional(element) || (length == 11 && mobile.test(value));
							}, '<em class="err">请正确填写您的手机号码</em>');

							$('#form1').validate({
								rules:{
									tel:{
										required:true,
										minlength:11,
										maxlength:11,
										isMobile:true,
										remote:{
											type:'post',
											url:'http://10.31.155.108/wanmei/php/registor.php'
										}
									},
									password:{
										required:true,
										minlength:6
									},
									repass:{
										required:true,
										equalTo:'#password'
									},
									username:{
										required:true,
										minlength:2,
										maxlength:20
										
									},
									userid:{
										required:true,
										minlength:18
									}
								},
								messages:{
									tel:{
										required:'<em class="err">手机号不能为空</em>',
										minlength:'<em class="err">你输入的号码长度有误</em>',
										maxlength:'<em class="err">你输入的号码长度有误</em>',
										remote:'<em class="err">手机号已存在</em>'
									},
									password:{
										required:'<em class="err">密码不能为空</em>',
										minlength:'<em class="err">密码不能小于6位</em>'
									},
									repass:{
										required:'<em class="err">密码重复不能为空</em>',
										equalTo:'<em class="err">密码不匹配</em>'
									},
									username:{
										required:'<em class="err">用户名不能为空</em>',
										minlength:'<em class="err">用户名不能小于2</em>',
										maxlength:'<em class="err">用户名不能大于10</em>',
									},
									userid:{
										required:'<em class="err">身份证不能为空</em>',
										minlength:'<em class="err">你输入的身份证长度有误</em>'
									}
								}
								
							});
						});
						$.validator.setDefaults({
						    success: function(label){
						        label.text('√').css('color','green').addClass('valid');
						    }
						});
					});
				})
			}(),
		}
	})
})
