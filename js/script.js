function validacao() {
	if(document.formuser.nome.value == "") {
	 	alert("Por favor, insira um nome.");
		document.formuser.nome.focus();
		return false;
	}

	if(document.formuser.phone.value == "") {
	 	alert("Por favor, insira um telefone.");
		document.formuser.phone.focus();
		return false;
	}

	if(document.formuser.email.value == "") {
	 	alert("Por favor, insira um e-mail.");
		document.formuser.email.focus();
		return false;
	}

	if(document.formuser.email.value.indexOf('@') ==-1 || document.formuser.email.value.indexOf('.') == -1) {
	alert("E-mail inválido. Por favor, tente novamente");
	document.formuser.email.focus();
	return false;
}

	if(document.formuser.password.value == "") {
	 	alert("Por favor, digite uma senha.");
		document.formuser.password.focus();
		return false;
	}

	if(document.formuser.password.value.length < 8) {
	 	alert("A senha precisa ter no mínimo, 8 carateres. Por favor, tente novamente");
		document.formuser.password.focus();
		return false;
	}

	if(document.formuser.password2.value == "") {
		alert("Por favor, repita sua senha.");
		document.formuser.password2.focus();
		return false;
	}

	if(document.formuser.password2.value != document.formuser.password.value) {
		alert("As senhas não conferem. Por favor, tente novamente");
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
