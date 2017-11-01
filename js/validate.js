var elUsername = document.getElementbyId('username');
var usernameMsg = 'Username must be more than 5 characters.';
var elEmail = document.getElementbyId('email');
var emailMsg = 'Email address should contain the @ symbol.';

// 2. Define functions

/* 
 * Function: validateField
 * ------------------------
 *	This function validates the text of an HTML input element
 *	and generates success/error messages. In this script it is called by event listeners attached to
 *  'elUsername' and 'elEmail'.
 *	fieldElem:  a DOM element that represents a single form text field
 *	infoMessage: a string that gives a human-readable description of the field's requirements
 *	validateFn: a function that returns true if the field validates, and false if it doesn't
 *
 *	returns: none
 */ 
function validateField(fieldElem, infoMessage, validateFn) {

	// create a variable that stores the value of fieldElem.nextSibling (this is where the span tag will be)
	var previousSpan = fieldElem.nextSibling; 
	if (previousSpan != null) {	
		// if there is a previous span tag (e.g., previousSpan != null), 
		//	remove the previous span by calling the 'removeChild()' function on the previous span's parent 
		// 	(hint: see Duckett 2014, p. 225)
		var containerEl = previousSpan.parentNode;

		containerEl.removeChild(previousSpan);
	}

	// adding an element to the DOM tree (hint: see Duckett 2014, p. 223)
	// create a new span element  
	var newEl = document.createElement('span');

	// create a new textnode whose content is the value of 'infoMessage' 
	var newText = document.createTextNode(infoMessage);

	// append your text node to the span element
	newEl.appendChild(newText);

	// if nothing is entered into the text box (fieldElem.value.length == 0)
	// hide the span by setting its '.style.display' property 
	if (fieldElem.value.length == 0) {
		newEl.style.display = "none";
	}
	else {
		if (validateFn() == true) {
			newText.nodeValue = "OK";
			newEl.className = 'ok';
		}
		else {
			newEl.className = 'error';
			newEl.display = 'initial';
		}
	}
	// else 
	// 	if validateFn() is true (either checkUsername() or checkEmail() returned true)
	//		change the content of your new text node to 'OK'
	//		apply the 'ok' style to the new span element
	//	else 
	//		change the content of your new text node to the data stored in the 'infoMessage' variable
	//		apply the 'error' style to the new span element
 	//	show the new span element by setting its '.style.display' property
 	
	// append the new span element to the DOM tree by calling 'appendChild()' on fieldElem's parentNode
	fieldElem.parentNode.appendChild(newEl);
}

/* 
 * Function: checkUsername
 * -----------------------
 *	This function checks whether text entered into the username text field is 5 or more characters long
 *  Bonus: For extra credit toward your Assignments average, check if it also only contains letter or numbers.
 *	returns: true if it is; false if it isn't
 */ 

function checkUsername(minLength) {
	if (elUsername.value.length <= 5) {
		//Set the error message
		return false;
	} else {
		elMsg.innerHTML='Okay';
		return true;
	}
}

elUsername.addEventListener('blur', function() {
	validateField(elUsername, usernameMsg, checkUsername);
}, false);

function checkEmail() {
	if (elEmail.value.contains('@')) {
		//Set the error message
		return true;
	} else {
		elMsg.innerHTML='Okay';
		return false;
	}
}

elEmail.addEventListener('blur', function() {
	validateField(elEmail, emailMsg, checkEmail);
}, false);
