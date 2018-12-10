// $(function(){
// 	$.ajax({
// 		method: "get",
// 		url:"https://www.googleapis.com/youtube/v3/search" +
// 		"?id=7lCDEYXw3mM" +
// 		"&key=AIzaSyCdneX94mOBMdempM9biapI8xj9Su60XTg" +
// 		"&part=snippet" +
// 		"&q=joemanchannel"+
// 		"&type=video" +
// 		"&videoCaption=closedCaption",
// 	})
// 		.done(function( msg ) {
// 			console.log(msg);
		
// 			let length = msg.items.length
// 		console.log(msg.items[0].snippet.channelId);
			

// 			for(var i=0;i<length ;i++){
// 				let Title = msg.items[i].snippet.channelTitle;
// 				$("#container").append('<p class="pp'+i+'"></p>');
// 				$(".pp"+i).text(Title);
// 			}
// 		});
// })



$(function(){


// var ids = ["UCLW_SzI9txZvtOFTPDswxqg","UCj_z-Zeqk8LfwVxx0MUdL-Q","UCPRWWKG0VkBA0Pqa4Jr5j0Q"];

// var count = 0;
//  $('#next').click(function(){
// 		clearInterval(first);
// 		if(lastInt){
// 			clearInterval(lastInt);
// 		}
		
// 		count = count + 1;
// 		if(count > 2 ){
// 			count=0;
// 		}
// 		console.log(count);
// 		updata(ids[count]);
// 		function nextInt(){
// 			updata(ids[count]);
// 		}
// 		var nextInt = setInterval(nextInt, 1000);
// 		console.log(nextInt);
	
	
// });
// $('#last').click(function(){
// 	clearInterval(first);
// 		count = count - 1;
// 		if(count < 0 ){
// 			count=2;
// 		}
// 		console.log(count);
// 		updata(ids[count]);
// 		function lastInt(){
// 			updata(ids[count]);
// 		}
// 		var lastInt = setInterval(lastInt, 1000);
	
// });

	function updata(id){
		$.ajax({
			method: "get",
			url:"https://www.googleapis.com/youtube/v3/channels" +
			"?id=UCLW_SzI9txZvtOFTPDswxqg" +
			"&key=AIzaSyCta64_vT9ZB43rGLB4Hhtf2hErNFojh0M" +
			"&part=snippet,contentDetails,statistics",
		})
			.done(function( msg ) {
				console.log(msg);
				let channelName = msg.items[0].snippet.title;
				let trackNum = msg.items[0].statistics.subscriberCount;
				let watchNump = msg.items[0].statistics.viewCount;
				let videoNum = msg.items[0].statistics.videoCount;
				let contentText = msg.items[0].snippet.description;
				let pic = msg.items[0].snippet.thumbnails.medium.url;
				let textWidth = $(".chennelBg").width();
				

				function setMoney(num){
					return parseFloat(num).toLocaleString();
					
				}
				let liveNum=setMoney(trackNum);
				
				$(".chennelName.one").text(channelName);
				$(".watchNum.one").text(liveNum );
				$(".chennelBg.one img").attr("src",pic);
				
			});
			$.ajax({
				method: "get",
				url:"https://www.googleapis.com/youtube/v3/channels" +
				"?id=UCj_z-Zeqk8LfwVxx0MUdL-Q" +
				"&key=AIzaSyCta64_vT9ZB43rGLB4Hhtf2hErNFojh0M" +
				"&part=snippet,contentDetails,statistics",
			})
				.done(function( obj ) {
					console.log(obj);
					let channelName2 = obj.items[0].snippet.title;
					let trackNum = obj.items[0].statistics.subscriberCount;
					let watchNum2 = obj.items[0].statistics.viewCount;
					let pic2 = obj.items[0].snippet.thumbnails.medium.url;
					
	
					function setMoney(num){
						return parseFloat(num).toLocaleString();
						
					}
					let liveNumf=setMoney(trackNum);
					
					$(".chennelName.two").text(channelName2);
					$(".watchNum.two").text(liveNumf );
					$(".chennelBg.two img").attr("src",pic2);
				});
				$.ajax({
					method: "get",
					url:"https://www.googleapis.com/youtube/v3/channels" +
					"?id=UCPRWWKG0VkBA0Pqa4Jr5j0Q" +
					"&key=AIzaSyCta64_vT9ZB43rGLB4Hhtf2hErNFojh0M" +
					"&part=snippet,contentDetails,statistics",
				})
					.done(function( objtr ) {
						console.log(objtr);
						let channelNamejo = objtr.items[0].snippet.title;
						let trackNum = objtr.items[0].statistics.subscriberCount;
						let watchNum3 = objtr.items[0].statistics.viewCount;
						let pic3 = objtr.items[0].snippet.thumbnails.medium.url;
						
		
						function setMoney(num){
							return parseFloat(num).toLocaleString();
							
						}
						let liveNumg=setMoney(trackNum );
						
						$(".chennelName.three").text(channelNamejo);
						$(".watchNum.three").text(liveNumg );
						$(".chennelBg.three img").attr("src",pic3);
					});

			// $(".videoBtn").click(function (){
			// 	$.ajax({
			// 		method: "get",
			// 		url:"https://www.googleapis.com/youtube/v3/playlists" +
			// 		"?id=UCPRWWKG0VkBA0Pqa4Jr5j0Q" +
			// 		"&key=AIzaSyCta64_vT9ZB43rGLB4Hhtf2hErNFojh0M" +
			// 		"&part=snippet,contentDetails,statistics",
			// 	})
			// 		.done(function( msg ) {
					
			// 			let channelName = msg.items[0].snippet.title;
			// 			let trackNum = msg.items[0].statistics.subscriberCount;
			// 			let watchNum = msg.items[0].statistics.viewCount;
			// 			let videoNum = msg.items[0].statistics.videoCount;
			// 			let contentText = msg.items[0].snippet.description;
			// 			let pic = msg.items[0].snippet.thumbnails.medium.url;
					
			
			// 			$(".chennelName").text(channelName);
			// 			$(".trackNum").text(trackNum);
			// 			$(".watchNum").text(watchNum);
			// 			$(".videoNum").text(videoNum);
			// 			$(".contentText").text(contentText);
			// 			$(".chennelBg").css("background-image","url("+pic+")")
						
			// 		});
			// })
			
	}
	updata();
	setInterval(updata, 1000);

		var left = 50;
		$('.channelwarp').click(function(){
			
			left += 420 *-1;
			if(left < -790){
				left = 50;
			}
			console.log(left);
			$('.containerWapr').css("left",left);
		})
})
