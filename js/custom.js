$(document).ready(function(){

})


function appbrowserlink(){
$('a.applink').each(function(){
	$(this).click(function(e){
e.preventDefault();
	var b=$(this).attr('href');
	 window.open(b,'_system');
})
})

}
