var elUsername = document.getElementbyId('username');
var elMsg = document.getElementbyId('feedback');
var elEmail = document.getElementbyId('email');

/* function validateField(fieldElem, infoMessage, validateFn) */

function checkUsername(minLength) {
	if (elUsername.value.length < minLength) {
		//Set the error message
		elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
	} else {
		elMsg.innerHTML='';
	}
}

elUsername.addEventListener('blur', function() {
	checkUsername(5);
}, false);