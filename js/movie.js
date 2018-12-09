$(function () {
	var cont=0;
	$.ajax({
		method: "get",
		url:"https://api.themoviedb.org/3/trending/movie/week?api_key=71660fbe32d785dee5f86fddf9af16f9",
	}).done(function( msg ) {
		console.log(msg);
		var movieRow = [];
		
		var num = msg.results.length;
		var Hotresults = msg.results;
		
		var data = msg.results[0].release_date;
		var description = msg.results[0].overview;
		Hotresults.forEach((movie) => {

			var id =[];
			id.push(movie.id);


			let shell = document.createElement('div');
			$('.output').append(shell);

			
			shell.classList.add('movieWrap');

			let url = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+ movie.poster_path;

			shell.innerHTML = '<div class="picWarp data">'+
			'<img src="'+url+'">'+
			'</div>'+
			'<div class="movieWrap__content">'+
				'<div class="titile">'+
						'<h2 class="movieName">'+movie.original_title+'</h2>'+
						'<p class="date">上映日期：'+data+'</p>'+
				'</div>'+

				'<div class="description">'+
					'<h3>簡介</h3>'+
					'<p class="description__content">'+description+'</p>'+'<div class="view">官網資訊</div>'+
'<input class="movieId" type="hidden" value="'+movie.id+'">'+
				'</div>'+
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


	
// https://image.tmdb.org/t/p/w185_and_h278_bestv2/