

//******************************************************************//
//********** WHEN PRESSING THE TEXT IT MARKS THE CHECKBOX **********//
//******************************************************************//

var accept_text = document.querySelector('.accept_text');
var checkbox = document.querySelector('#r1');

accept_text.onclick = function() {

	if(checkbox.checked === true) {
		checkbox.checked = false;
		checkbox2.style.backgroundColor = "#ffffff";
	}

	else {
		checkbox.checked = true;
		checkbox2.style.backgroundColor = "#e6007e";
	}

};

var checkbox2 = document.querySelector('span#span_checkmark');

checkbox2.onclick = function(){
	
	if(checkbox.checked === true) {
		checkbox.checked = false;
		checkbox2.style.backgroundColor = "#ffffff";
	}

	else {
		checkbox.checked = true;
		checkbox2.style.backgroundColor = "#e6007e";
	}
	
};