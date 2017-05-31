// allows participant to advance to next page by pressing spacebar
that=this;
$(document).on('keydown',function (e){
	if(e.keyCode === 13){
		that.clickNextButton();
	}
	else{}
});