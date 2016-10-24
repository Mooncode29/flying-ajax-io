// console.log('lol');
// (function(){
// 	console.log('hello world');

// 	$("#recup").click(function(){
// 		var url = "http://192.168.1.21:3000/places";
// 		$.ajax(url).done(function(response){
// 			console.log(response);
// 			for (var i = 0; i < response.places.length; i++){
// 				var place = response.places[i];
// 				$('#list').append('<li>'+ place.nom +'</li>');
// 					if(place.nom === "IoT Valley"){
// 					var password = place.password;
// 				}
// 			}
// 		})
// 	})
// })();

// // Faut débugguer , bonne chance ( problème d'accolade)

// 	//function ajaxDone( response,status){
// 	//	console.log(done,status);

(function(){

	$("#meteo").click(function() {
		var url = "http://api.openweathermap.org/data/2.5/weather?q=Toulouse,fr&appid=e05300d9bacf77c059ab39927fd4909d&units=metric";
		$.ajax(url)
		.done(meteoDone)
		.fail(meteoFail)


	});
});



	



