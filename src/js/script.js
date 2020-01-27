// Form validation
$(function () {
    $("nameMessageError").hide();
    $("phoneMessageError").hide();
    $("emailMessageError").hide();
    $("passwordMessageError").hide();
    $("repeatPasswordMessageError").hide();

    var errorName = false;
    var errorPhone = false;
    var errorEmail = false;
    var errorPassword = false;
    var errorRepeatPassword = false;


    $("#inputName").focusout(function () {
        checkName();
    });
    $("#inputPhone").focusout(function () {
        checkPhone();
    });
    $("#inputEmail").focusout(function () {
        checkEmail();
    });
    $("#inputPassword").focusout(function () {
        checkPassword();
    });
    $("#inputRepeatPassword").focusout(function () {
        checkRepeatPassword();
    });

    // First name required
    function checkName() {
        var nameLenght = $("#inputName").val().length;

        if (nameLenght == "") {
            $("#nameMessageError").html("Please, insert First Name.");
            $("#nameMessageError").show;
            errorName = true;
        } else {
            $("nameMessageError").hide();
        }
    }

    //Phone required
    function checkPhone() {
        var phoneLenght = $("#inputPhone").val().length;

        if (phoneLenght == "") {
            $("#phoneMessageError").html("Please, insert Phone.");
            $("#phoneMessageError").show;
            errorPhone = true;
        } else {
            $("phoneMessageError").hide();
        }
    }

    // E-mail validation with regex
    function checkEmail() {
        var pattern = new RegExp (/^[+a-zA-z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]/);

        if (pattern.test($("#inputEmail").val())) {
            $("#emailMessageError").hide();
        } else {
            $("#emailMessageError").html("Invalid E-mail. Please, try again.");
            $("#emailMessageError").show();
            errorEmail = true;
        }
    }

    // Password - Minimum 8 character
    function checkPassword() {
        var passwordLength = $("#inputPassword").val().length;

        if (passwordLength < 8) {
            $("#passwordMessageError").html("At least 8 characters. Please, type again.");
            $("#passwordMessageError").show();
            errorPassword = true;
        } else {
            $("#passwordMessageError").hide();
        }
    }

    // Password - Validation of password match
    function checkRepeatPassword() {
        var password = $("#inputPassword").val();
        var repeatPassword = $("#inputRepeatPassword").val();

        if (password != repeatPassword) {
            $("#repeatPasswordMessageError").html("The passwords don't match. Please, type again.");
            $("#repeatPasswordMessageError").show();
            errorRepeatPassword = true;
        } else {
            $("#repeatPasswordMessageError").hide();
        }
    }

    // Conditionals for submit
    $("#register").submit(function () {
        errorName = false;
        errorPhone = false;
        errorEmail = false;
        errorPassword = false;
        errorRepeatPassword = false;

        var x1 = document.getElementById('inputName').value;
        var x2 = document.getElementById('inputPhone').value;
        var x3 = document.getElementById('inputEmail').value;

        checkName();
        checkPhone();
        checkEmail();
        checkPassword();
        checkRepeatPassword();

        if (errorName == false && errorPhone == false && errorEmail == false && errorPassword == false && errorRepeatPassword == false) {
            alert("Name: " + x1 + "\nPhone: " + x2 + "\nE-mail Address: " + x3)
            return true;
        }
        return false;
    });
});