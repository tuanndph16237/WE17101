function query(string) {
    return document.querySelector(string);
}

function queryAll(string) {
    return document.querySelectorAll(string);
}
var ipKhachHangElement = query('#ip_khach_hang');
var seLoaiHangElement = query('#se_loai_hang');
var ipDonGiaElement = query('#ip_don_gia');
var ipSoLuongElement = query('#ip_so_luong');
var ipThanhTienElement = query('#ip_thanh_tien');
// var ipNoiNhanElement = query('input[name="noi_nhan"]:checked');
var ipPhiElement = query('#ip_phi');

function onChangeCate() {
    var loaiHang = +seLoaiHangElement.value;
    switch (loaiHang) {
        case 1:
            ipDonGiaElement.value = 500000;
            break;
        case 2:
            ipDonGiaElement.value = 300000;
            break;
        case 3:
            ipDonGiaElement.value = 100000;
            break;

        default:
            ipDonGiaElement.value = 0;
            break;
    }
}

onChangeCate();

var noiNhan = 0;

function onCheck(current) {
    noiNhan = +current.value;
    switch (noiNhan) {
        case 1:
            ipPhiElement.value = 0;
            break;
        case 2:
            ipPhiElement.value = 30000;
            break;
        default:
            ipPhiElement.value = 0;
            break;
    }
}

function onValidate() {
    var flag = false;
    var inputs = queryAll('input');
    for (i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var spanError = input.parentElement.querySelector('span');
        console.log(spanError);
        if (input.value) {
            spanError.innerHTML = '';
        } else {
            spanError.innerHTML = 'Bat buoc nhap';
            flag = true;
        }
    }
    return flag;
}

function onBuy() {
    if (onValidate()) {
        return;
    }

    var thanhTien = ipDonGiaElement.value * ipSoLuongElement.value;
    ipThanhTienElement.value = thanhTien;
}