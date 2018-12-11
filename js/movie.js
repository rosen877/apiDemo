$(function () {
	var cont=0;
	$.ajax({
		method: "get",
		url:"https://api.themoviedb.org/3/movie/popular?api_key=71660fbe32d785dee5f86fddf9af16f9&language=zh-tw&page=1",
	}).done(function( msg ) {
		console.log(msg);
		let num = msg.results.length;
		let Hotresults = msg.results;
		let data = msg.results[0].release_date;
		Hotresults.forEach((movie) => {
			var id =[];
			id.push(movie.id);
			let shell = document.createElement('div');
			$('.output').append(shell);
			shell.classList.add('movieWrap');
			let url = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+ movie.poster_path;

			shell.innerHTML = '<div class="picWarp">'+
		'	<img src="'+url+'">'+
		'	<div class="videoWarp__content">'+
			'  <div class="titile">'+
				'<h2 class="movieName">'+movie.original_title+'</h2>'+
				'<p class="date">上映日期：'+data+'</p>'+
				'<div class="description">'+
				'  <h3>簡介</h3>'+
				 ' <p class="description__content">'+movie.overview+'</p>'+
				 ' <div class="view">官網資訊</div>'+
				  '<input class="movieId" type="hidden" value="'+movie.id+'">'+
				'</div>'+
			'  </div>'+
			'</div>'+
		 ' </div>'+
		'</div>';
			$('.videoWarp').html(shell);
	
		});
		$('.view').click(function (){
			let val = this.nextSibling.value;
			let a_url = "https://www.themoviedb.org/movie/"+val;
			document.location.href= a_url;
		})
		});


})

function search(){

}
$(".searchWarp input").keydown(function (event) {
	if (event.which == 13) {
		$('.hotTitle').text('搜尋結果');
		var searchContent = $(".searchWarp input").val();
		$.ajax({
			method: "get",
			url:"https://api.themoviedb.org/3/search/movie?api_key=71660fbe32d785dee5f86fddf9af16f9&language=zh-tw&query="+searchContent+"&page=1&include_adult=false",
		}).done(function( msg ) {
			console.log(msg);
			$(".output").children().remove();
			let num = msg.results.length;
			let Hotresults = msg.results;
			let data = msg.results[0].release_date;
			Hotresults.forEach((movie) => {
				var id =[];
				id.push(movie.id);
				let shell = document.createElement('div');
				$('.output').append(shell);
				shell.classList.add('movieWrap');
				let url = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+ movie.poster_path;
	
				shell.innerHTML = '<div class="picWarp">'+
			'	<img src="'+url+'">'+
			'	<div class="videoWarp__content">'+
				'  <div class="titile">'+
					'<h2 class="movieName">'+movie.original_title+'</h2>'+
					'<p class="date">上映日期：'+data+'</p>'+
					'<div class="description">'+
					'  <h3>簡介</h3>'+
					 ' <p class="description__content">'+movie.overview+'</p>'+
					 ' <div class="view">官網資訊</div>'+
					  '<input class="movieId" type="hidden" value="'+movie.id+'">'+
					'</div>'+
				'  </div>'+
				'</div>'+
			 ' </div>'+
			'</div>';
				$('.videoWarp').html(shell);
		
			})
			});

			
	}
	})
// https://image.tmdb.org/t/p/w185_and_h278_bestv2/