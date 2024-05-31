window.onload = function () {
    khoiTao();

    // thêm tags (từ khóa) vào khung tìm kiếm
    var tags = ["Samsung", "iPhone", "Huawei", "Oppo", "Mobi"];
    for (var t of tags) addTags(t, "index.html?search=" + t);
}

function nguoidung() {
    // kiểm tra họ tên
    var hoten = document.forms["formlh"]["ht"].value;
    var dienthoai = document.forms["formlh"]["sdt"].value;
    var valid = true;

    // Xóa lỗi cũ
    clearErrors();

    // kiểm tra họ tên
    if (!checkName(hoten)) {
        showError('ht', 'Họ tên không phù hợp.');
        valid = false;
    }

    // kiểm tra số điện thoại
    if (!checkPhone(dienthoai)) {
        showError('sdt', 'Số điện thoại không phù hợp.');
        valid = false;
    }

    if (valid) {
        addAlertBox('Gửi thành công. Chúng tôi chân thành cảm ơn những góp ý từ bạn.', '#5f5', '#000', 5000); // cám ơn
    }

    return valid;
}

function checkName(str) {
    var special = '~!@#$%^&*()_+=-`./*{}[]|\'<>?;"';
    for (var i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) || special.indexOf(str[i]) !== -1) {
            return false;
        }
    }
    return true;
}

function checkPhone(phone) {
    for (var i = 0; i < phone.length; i++) {
        if (phone.charAt(i) < "0" || phone.charAt(i) > "9") {
            return false;
        }
    }
    return true;
}

function showError(fieldId, message) {
    var field = document.getElementById(fieldId);
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

function addAlertBox(message, bgColor, textColor, duration) {
    var alertBox = document.createElement("div");
    alertBox.style.position = "fixed";
    alertBox.style.bottom = "10px";
    alertBox.style.right = "10px";
    alertBox.style.backgroundColor = bgColor;
    alertBox.style.color = textColor;
    alertBox.style.padding = "10px";
    alertBox.style.borderRadius = "5px";
    alertBox.innerText = message;

    document.body.appendChild(alertBox);

    setTimeout(function () {
        document.body.removeChild(alertBox);
    }, duration);
}
