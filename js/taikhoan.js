function logIn(form) {
    clearErrors();

    var username = form.username.value;
    var password = form.pass.value;
    var valid = true;

    if (username.trim() === "") {
        showError(form.username, "Tên đăng nhập không được để trống.");
        valid = false;
    }

    if (password.trim() === "") {
        showError(form.pass, "Mật khẩu không được để trống.");
        valid = false;
    }

    return valid;
}

function signUp(form) {
    clearErrors();

    var ho = form.ho.value;
    var ten = form.ten.value;
    var email = form.email.value;
    var newUser = form.newUser.value;
    var newPass = form.newPass.value;
    var confirmPass = form.ComfirmPass.value; // Sửa lại thành ComfirmPass
    var valid = true;

    if (ho.trim() === "") {
        showError(form.ho, "Họ không được để trống.");
        valid = false;
    }

    if (ten.trim() === "") {
        showError(form.ten, "Tên không được để trống.");
        valid = false;
    }

    if (email.trim() === "" || !validateEmail(email)) {
        showError(form.email, "Email không hợp lệ.");
        valid = false;
    }

    if (newUser.trim().length < 5) {
        showError(form.newUser, "Tên đăng nhập phải có ít nhất 5 ký tự.");
        valid = false;
    }

    if (newPass.trim() === "") {
        showError(form.newPass, "Mật khẩu không được để trống.");
        valid = false;
    }

    if (newPass !== confirmPass) {
        showError(form.ComfirmPass, "Mật khẩu xác nhận không khớp.");
        valid = false;
    }

    return valid;
}


function showError(field, message) {
    field.classList.add('error-border');
    

    var errorElement = document.createElement('div');
    errorElement.classList.add('error-message');
    errorElement.innerText = message;
    field.parentNode.appendChild(errorElement);
}

function clearErrors() {
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (message) {
        message.remove();
    });

    var errorFields = document.querySelectorAll('.error-border');
    errorFields.forEach(function (field) {
        field.classList.remove('error-border');
    });
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
