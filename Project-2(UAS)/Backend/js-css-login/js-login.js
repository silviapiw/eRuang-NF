function kirim() {
    let inp_nama = document.getElementById("user").value;
    let inp_pass = document.getElementById("pass").value;
    let form = document.getElementById("form")

    if (inp_nama == "Admin" && inp_pass == "admin") {
        form.setAttribute("action","daftar-ruangan.html");
        alert("Login Berhasil");
    }else {
        alert("Login Gagal");
    }
}