var str = 'python';
var counter = 0;
var executed = false;

$(document).ready(function(){
	setInterval ('cursorAnimation()', 850);
	element = $('#command-1');
	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		if(!executed){
    		var temp = scroll;
		}
    if(temp > 250){
    	first();
    };
});
});

function cursorAnimation(){
	$('.cursor').animate({
		opacity:0
	}, 'fast', 'swing').animate({
		opacity:1
	}, 'fast', 'swing')
}

function first(){
	executed = true;
	element.html(str.substr(0, counter++));
	if (counter < str.length + 1){
		setTimeout('first()', 90);
	} 

	else {
		counter = 0;
		str = "f = open('greeting.txt', 'rU')";
		element = $('#command-2');
		setTimeout(function(){
			$('.first').css("visibility","hidden");
			$('#version').css("visibility","visible")
			second();
		}, 1300);
	}
}

function second(){
		element.html(str.substr(0, counter++));
		if (counter < str.length + 1){
			setTimeout('second()', 90);
		}

		else {
		counter = 0;
		str = 'for line in f: ';
		element = $('#file-reading');
		setTimeout(function(){
			$('.second').css("visibility","hidden");
			$('#third-line').css("visibility", "visible");
			third();
		}, 1300);
	}
}

function third(){
	element.html(str.substr(0, counter++));
	if (counter < str.length +1){
		setTimeout('third()', 90);
	}
	else {
		counter = 0;
		str = 'print line ';
		element = $('#file-printing');
		setTimeout(function(){
			$('.third').css("visibility","hidden");
			$('#fourth-line').css("visibility", "visible");
			fourth();
		}, 1300);
	}
}

function fourth(){
	element.html(str.substr(0, counter++));
	if (counter < str.length +1){
		setTimeout('fourth()', 90);
	}
	else{
		counter = 0;
		setTimeout(function(){
			$('#spacer-line').css("visibility", "visible");
			$('.fourth').css("visibility", "hidden");
		}, 1300);
		setTimeout(function(){
			$('.1').css("visibility", "visible");
		}, 1340);
		setTimeout(function(){
			$('.2').css("visibility", "visible");
		}, 1380);
		setTimeout(function(){
			$('.3').css("visibility", "visible");
		}, 1420);
		setTimeout(function(){
			$('.4').css("visibility", "visible");
		}, 1460);
		setTimeout(function(){
			$('.5').css("visibility", "visible");
		}, 1500);
	}
}