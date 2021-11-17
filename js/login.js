var myModal = new bootstrap.Modal(document.getElementById('divModal'));

function validarLogin() {
    usr = document.getElementById("usuario");
    pwd = document.getElementById("contrasena");
    
    if (usr.value == "admin" && pwd.value == "12345") {
        location.href= "dashboard.html";
    }else {
        p = document.getElementById("divModalP");
        p.innerText = "Nombre de usuario o contraseña incorrecta.";
        myModal.show();

    }
}