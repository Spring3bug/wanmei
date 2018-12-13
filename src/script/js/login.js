define(['config'], function() {
	require(['jquery'], function() {
		return{
			login:! function () {
				var $dl1=$('.login .dl1');
				var $telname=$('.login .tel');
				var $pass=$('.login .password');
				var $logboxwrong=$('.login .logboxwrong');
				$dl1.on('click',function () {
					$.ajax({
						type:'post',
						url:'http://10.31.155.108/wanmei/php/login.php',
						data:{
							tel:$telname.val(),
							pass:$pass.val()
						},
					}).done(function (data) {
						console.log(data);
						if(!data){
							$logboxwrong.show();
							$telname.val('');
							$pass.val('');
						}else{
							window.location.href='http://10.31.155.108/wanmei/src/index.html';
							require(['jquery'], function() {
								$.cookie('username',$telname.val());
							})
						}
					});
				});
				$telname.on('focus',function () {
					$logboxwrong.hide()
				})
				require(['jqcookie'], function() {
					
				})
				
			}(),
		}
	});
});