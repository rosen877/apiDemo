$(function(){
	$.ajax({
		method: "get",
		url:"https://api.unsplash.com/photos/?client_id=812193ef71ca946e361ed541979a0cfd91e9419a19235fd05f51ea14233f020a&per_page=30",
	})
		.done(function( msg ) {
			console.log(msg);
			var num = msg.length/3;
			for (var i = 0; i < msg.length; i++) {
					if( i < num){
						$('.item.one').append('<img class="pic'+i+'">');
						$('.pic'+i).attr("src",msg[i].urls.thumb);
					}else if(i < num*2){
						$('.item.two').append('<img class="pic'+i+'">');
						$('.pic'+i).attr("src",msg[i].urls.thumb);
					}else{
						$('.item.three').append('<img class="pic'+i+'">');
						$('.pic'+i).attr("src",msg[i].urls.thumb);
					}
			};
		});
		$("#search").keydown(function (event) {
			if (event.which == 13) {
				 var text = $("#search").val();
				$.ajax({
					method: "get",
					url:"https://api.unsplash.com/search/photos?client_id=812193ef71ca946e361ed541979a0cfd91e9419a19235fd05f51ea14233f020a&query="+text+"&per_page=30",
				})
					.done(function( ser ) {
						var searchArr = ser.results.length;
						for (var i = 0; i < searchArr; i++) {
							let num = searchArr / 3;
								if( i < num){
									$('.item.one').append('<img class="pic'+i+'">');
									$('.pic'+i).attr("src",ser.results[i].urls.thumb);
								}else if(i < num*2){
									$('.item.two').append('<img class="pic'+i+'">');
									$('.pic'+i).attr("src",ser.results[i].urls.thumb);
								}else{
									$('.item.three').append('<img class="pic'+i+'">');
									$('.pic'+i).attr("src",ser.results[i].urls.thumb);
								}
						};

					});
				$("#search").val("");
			}
		});
	});




