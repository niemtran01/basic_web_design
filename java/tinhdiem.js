
function checkdiem() {
    let hk1 = parseFloat(document.getElementById("hk1").value);
    let hk2 = parseFloat(document.getElementById("hk2").value);

    if (isNaN(hk1) || isNaN(hk2)) {
        alert("Vui lòng nhập số hợp lệ!");
        return;
    }

    let diemTB = (hk1 + hk2) / 2;
    let xl = "";

    if (diemTB >= 9) {
        xl = "Xuất sắc";
    } else if (diemTB >= 8) {
        xl = "Giỏi";
    } else if (diemTB >= 7) {
        xl = "Khá";
    } else if (diemTB >= 5) {
        xl = "Trung bình";
        document.getElementById("xl").style.fontSize = "50px";
    } else {
        xl = "Yếu";
    }

    // document.getElementById("diemTB").textContent = diemTB.toFixed(2);
    // document.getElementById("diemTB").style.color = "red";
    // document.getElementById("diemTB").style.fontSize = "30px";
    // document.getElementById("xl").textContent = xl;
    // document.getElementById("xl").style.color = "yellow";
    // document.getElementById("xl").style.backgroundColor = "white";
}