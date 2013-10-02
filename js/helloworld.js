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
			echotext();
			console.log(resp);
		} else {
			//未ログインの場合
			$("#result").text("ボタンを教えてログイン！");
			console.log(resp);
		}
		
	});
	
	//ログイン処理
	$("#login").click(function () {
		FB.login(function (resp) {
			if (resp.authResponse) {
				//ログイン済み
				echotext();
			} 
		});
	});
	
	var echotext = function () {
		$("#login").remove();
		$("#result").html('hello world!');
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
