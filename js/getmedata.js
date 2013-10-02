window.fbAsyncInit = function () {
	FB.init({
		appId: 439600129493865,
		cookie: true,
		oauth: true
	});
	
	//ログイン状態のチェック
	FB.getLoginStatus(function (resp) {
		if (resp.authResponse) {
			//ログイン済みの場合の処理
			getdata();
		} else {
			//未ログインの場合
			$("#result").text("ボタンを教えてログイン！");
		}
		
	});
	
	//ログイン処理
	$("#login").click(function () {
		FB.login(function (resp) {
			if (resp.authResponse) {
				//ログイン済み
				getdata();
			} 
		});
	});
	
	var getdata = function () {
		$("#login").remove();
		FB.api('/me', function (resp) {
			console.log(resp);
			var htm = "<img src=\"https://graph.facebook.com/" + resp.id + "/picture\">";
			htm += '<br/>名前：' + resp.name;
			$("#result").html(htm);
		});
	};
	
	var getxfbml = function () {
		FB.api('/me', function (resp) {
			console.log(resp);
			var htm = '<br/>名前：' + resp.name;
			$("#result").html(htm);
		});
	};
};

$(function () {
	(function () {
		var e = document.createElement('script');
		e.src = document.location.protocol + '//connect.facebook.net/ja_jp/all.js';
		e.async = true;
		document.getElementById('fb-root').appendChild(e);
	} ());
});
