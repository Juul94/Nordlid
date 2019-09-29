

//**************************************************************************************************//
//********** WHEN TYPING IN THE INPUT THE LABEL MOVES - IF INPUT HAVE A VALUE IT STAYS UP **********//
//**************************************************************************************************//

var floatContainer_name = document.querySelector('#floatContainer_name');
var floatContainer_email = document.querySelector('#floatContainer_email');
var floatContainer_phone = document.querySelector('#floatContainer_phone');

var nameInput = document.querySelector('#input_name');
var emailInput = document.querySelector('#input_email');
var phoneInput = document.querySelector('#input_phone');		

// NAME

nameInput.onfocus = function() {
	floatContainer_name.classList.add('active_label');
};

nameInput.onblur = function() {
	if(nameInput.value.length === 0) {
	   floatContainer_name.classList.remove('active_label');
	}
};

// EMAIL

emailInput.onfocus = function() {
	floatContainer_email.classList.add('active_label');
};

emailInput.onblur = function() {
	if(emailInput.value.length === 0) {
	   floatContainer_email.classList.remove('active_label');
	}
};

// PHONE

phoneInput.onfocus = function() {
	floatContainer_phone.classList.add('active_label');
};

phoneInput.onblur = function() {
	if(phoneInput.value.length === 0) {
	   floatContainer_phone.classList.remove('active_label');
	}
};