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


var ids = ["UCLW_SzI9txZvtOFTPDswxqg","UCj_z-Zeqk8LfwVxx0MUdL-Q","UCPRWWKG0VkBA0Pqa4Jr5j0Q"];

var count = 0;
$('#next').click(function(){
	count = count + 1;
	if(count > 2 ){
		count=0;
	}
	console.log(count);
	updata(ids[count]);
});
$('#last').click(function(){
	count = count - 1;
	if(count < 0 ){
		count=2;
	}
	console.log(count);
	updata(ids[count]);
});

	function updata(id){
		$.ajax({
			method: "get",
			url:"https://www.googleapis.com/youtube/v3/channels" +
			"?id="+id+"" +
			"&key=AIzaSyCta64_vT9ZB43rGLB4Hhtf2hErNFojh0M" +
			"&part=snippet,contentDetails,statistics",
		})
			.done(function( msg ) {
			
				let channelName = msg.items[0].snippet.title;
				let trackNum = msg.items[0].statistics.subscriberCount;
				let watchNum = msg.items[0].statistics.viewCount;
				let videoNum = msg.items[0].statistics.videoCount;
				let contentText = msg.items[0].snippet.description;
				let pic = msg.items[0].snippet.thumbnails.medium.url;
			
	
				$(".chennelName").text(channelName);
				$(".trackNum").text(trackNum);
				$(".watchNum").text(watchNum);
				$(".videoNum").text(videoNum);
				$(".contentText").text(contentText);
				$(".chennelBg").css("background-image","url("+pic+")")
			});

			$(".videoBtn").click(function (){
				$.ajax({
					method: "get",
					url:"https://www.googleapis.com/youtube/v3/playlists" +
					"?id=UCPRWWKG0VkBA0Pqa4Jr5j0Q" +
					"&key=AIzaSyCta64_vT9ZB43rGLB4Hhtf2hErNFojh0M" +
					"&part=snippet,contentDetails,statistics",
				})
					.done(function( msg ) {
					
						let channelName = msg.items[0].snippet.title;
						let trackNum = msg.items[0].statistics.subscriberCount;
						let watchNum = msg.items[0].statistics.viewCount;
						let videoNum = msg.items[0].statistics.videoCount;
						let contentText = msg.items[0].snippet.description;
						let pic = msg.items[0].snippet.thumbnails.medium.url;
					
			
						$(".chennelName").text(channelName);
						$(".trackNum").text(trackNum);
						$(".watchNum").text(watchNum);
						$(".videoNum").text(videoNum);
						$(".contentText").text(contentText);
						$(".chennelBg").css("background-image","url("+pic+")")
					});
			})
	}

updata(ids[0]);

		// $.ajax({
		// 	method: "PUT",
		// 	url:"https://www.googleapis.com/youtube/v3/channels" +
		// 	"?id=UCPRWWKG0VkBA0Pqa4Jr5j0Q" +
		// 	"&key=AIzaSyCta64_vT9ZB43rGLB4Hhtf2hErNFojh0M" +
		// 	"&part=brandingSettings,statistics"+"&onBehalfOfContentOwner=''"+
		// 	"",
		// })
		// 	.done(function( msg ) {
		// 		console.log(msg);
			
		// 	});
})
