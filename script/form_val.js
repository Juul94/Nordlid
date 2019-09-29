// JavaScript Document

var btn_submit = document.querySelector('#btn_submit');

var nameInput = document.querySelector('#input_name');
var emailInput = document.querySelector('#input_email');
var phoneInput = document.querySelector('#input_phone');
var checkbox = document.querySelector('#r1');

var errorMSG_name = document.querySelector('#errorMSG_name');
var errorMSG_email = document.querySelector('#errorMSG_email');
var errorMSG_phone = document.querySelector('#errorMSG_phone');
var errorMSG_checkbox = document.querySelector('#errorMSG_checkbox');

var regex_letters = /^[a-zA-ZæøåÆØÅ ]+$/;
var regex_numbers = /^\d+$/;
var regex_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
var regex_noSpace = /^\S*$/;

function required() {

	// ******************** NAME ******************** //

	// NAME: IF EMPTY
	if (nameInput.value.length === 0) {
		errorMSG_name.innerHTML = 'UPS! Du mangler at udfylde dit navn.';
		nameInput.classList.add('form_control_error');
		
		errorMSG_email.innerHTML = '';
		errorMSG_phone.innerHTML = '';
		errorMSG_checkbox.innerHTML = '';

		return false;
	}
	
	// NAME: IF BELOW 2 LETTERS
	else if(nameInput.value.length < 2) {
		errorMSG_name.innerHTML = 'UPS! Indtast min. 2 bogstaver.';
		nameInput.classList.add('form_control_error');
		
		errorMSG_email.innerHTML = '';
		errorMSG_phone.innerHTML = '';
		errorMSG_checkbox.innerHTML = '';

		return false;
	}

	// NAME: ONLY LETTERS
	else if(!regex_letters.test(nameInput.value)) {
		errorMSG_name.innerHTML = "UPS! Dit navn må kun indeholde bogstaver.";
		nameInput.classList.add('form_control_error');
		
		errorMSG_email.innerHTML = '';
		errorMSG_phone.innerHTML = '';
		errorMSG_checkbox.innerHTML = '';

		return false;
	}

	// NAME: REMOVE ERROR MSG & STYLING
	else {
		errorMSG_name.innerHTML = '';
		nameInput.classList.remove('form_control_error');
	}

	// ******************** EMAIL ******************** //
	
	// EMAIL: IF EMPTY
	if(emailInput.value.length === 0) {		
		errorMSG_email.innerHTML = 'UPS! Du mangler at udfylde din email.';
		emailInput.classList.add('form_control_error');
		
		errorMSG_name.innerHTML = '';
		errorMSG_phone.innerHTML = '';
		errorMSG_checkbox.innerHTML = '';
		
		return false;
	}
	
	// EMAIL: IF SPACE(S)
	else if(!regex_noSpace.test(emailInput.value)) {
		errorMSG_email.innerHTML = "UPS! Emailen må ikke indeholde mellemrum.";
		emailInput.classList.add('form_control_error');
		
		errorMSG_name.innerHTML = '';
		errorMSG_phone.innerHTML = '';
		errorMSG_checkbox.innerHTML = '';
		
		return false;
	}
	
	// EMAIL: IF INVALID
	else if(!regex_email.test(emailInput.value)) {
		errorMSG_email.innerHTML = "UPS! Indtast venligst en gyldig email.";
		emailInput.classList.add('form_control_error');
		
		errorMSG_name.innerHTML = '';
		errorMSG_phone.innerHTML = '';
		errorMSG_checkbox.innerHTML = '';
		
		return false;
	}
	
	// EMAIL: REMOVE ERROR MSG & STYLING
	else {
		errorMSG_email.innerHTML = '';
		emailInput.classList.remove('form_control_error');
	}
	
	// ******************** PHONE ******************** //
	
	// PHONE: IF EMPTY
	if(phoneInput.value.length === 0) {		
		errorMSG_phone.innerHTML = 'UPS! Du mangler at udfylde dit nummer.';
		phoneInput.classList.add('form_control_error');
		
		errorMSG_name.innerHTML = '';
		errorMSG_email.innerHTML = '';
		errorMSG_checkbox.innerHTML = '';
		
		return false;
	}
	
	// PHONE: IF CONTAINING SPACE(S)
	else if(!regex_noSpace.test(phoneInput.value)) {
		errorMSG_phone.innerHTML = "UPS! Dit mobilnr. må ikke indeholde mellemrum.";
		phoneInput.classList.add('form_control_error');
		
		errorMSG_name.innerHTML = '';
		errorMSG_email.innerHTML = '';
		errorMSG_checkbox.innerHTML = '';
		
		return false;
	}
	
	// PHONE: ONLY NUMBERS
	else if(!regex_numbers.test(phoneInput.value)) {
		errorMSG_phone.innerHTML = "UPS! Dit mobilnr. må kun bestå af tal.";
		phoneInput.classList.add('form_control_error');
		
		errorMSG_name.innerHTML = '';
		errorMSG_email.innerHTML = '';
		errorMSG_checkbox.innerHTML = '';
		
		return false;
	}
	
	// PHONE: ONLY 8 DIGITS (NUMBERS)
	else if(phoneInput.value.length !== 8) {
		errorMSG_phone.innerHTML = "UPS! Dit mobilnr. skal bestå af 8 tal.";
		phoneInput.classList.add('form_control_error');
		
		errorMSG_name.innerHTML = '';
		errorMSG_email.innerHTML = '';
		errorMSG_checkbox.innerHTML = '';
		
		return false;
	}
	
	// PHONE: REMOVE MSG ERROR & STYLING
	else {
		errorMSG_phone.innerHTML = '';
		phoneInput.classList.remove('form_control_error');
	}
	
	// ******************** CONDITIONS ******************** //
	
	// CHECKBOX: IF NOT CHECKED (MARKED)
	if(checkbox.checked == false) {
		errorMSG_checkbox.innerHTML = 'UPS! Du mangler at acceptere vores betingelser.';
		return false;
	}
	
	// ******************** SUBMIT FORM ******************** //
	
	// IF ABOVE IS FINE --> SEND FORM
	else {
		return true;
	}
}

