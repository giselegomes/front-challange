function validacao() {
	if(document.formuser.nome.value == "") {
	 	alert("Please, type in your First Name.");
		document.formuser.nome.focus();
		return false;
	}

	if(document.formuser.phone.value == "") {
	 	alert("Please, type in your Phone.");
		document.formuser.phone.focus();
		return false;
	}

	if(document.formuser.email.value == "") {
	 	alert("Please, type in your E-mail.");
		document.formuser.email.focus();
		return false;
	}

	if(document.formuser.email.value.indexOf('@') ==-1 || document.formuser.email.value.indexOf('.') == -1) {
	alert("E-mail invalid. Please, try again.");
	document.formuser.email.focus();
	return false;
}

	if(document.formuser.password.value == "") {
	 	alert("Please, type in a Password.");
		document.formuser.password.focus();
		return false;
	}

	if(document.formuser.password.value.length < 8) {
	 	alert("The password must contain at least 8 characters. Please, try again.");
		document.formuser.password.focus();
		return false;
	}

	if(document.formuser.password2.value == "") {
		alert("Please, repeat your Password.");
		document.formuser.password2.focus();
		return false;
	}

	if(document.formuser.password2.value != document.formuser.password.value) {
		alert("The passwords do not match. Please, try again.");
		document.formuser.password.focus();
		return false;
	}
 }

	function myfun(){

		var x1=document.getElementById('nome').value;
		var x2=document.getElementById('telefone').value;
		var x3=document.getElementById('email').value;
		alert("Name: "+x1+"\nPhone: "+x2+"\nE-mail Address: "+x3);
}
