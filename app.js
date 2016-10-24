(function(){
	console.log('hello world');

$("#recup").click(function(){

var url= "http://192.168.1.21:3000/places";


$.ajax(url).done(ajaxDone).fail(ajaxFailed)

});


function ajaxDone( response,status){
console.log("done",status);
var places= response.places;


for (var i=0, i< places.length, 1++){

	
}

}



}







});
