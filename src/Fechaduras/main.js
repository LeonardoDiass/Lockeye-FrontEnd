function cadastraUsuario () {
    
    request = Request.Request();
    request.method("POST");
    usuario = document.getElementById("usuario");
    senha = document.getElementById("senha");
    
    url = '127.0.0.1:5000/login'
    myobj = {usuario : senha}

    x = requests.post(url, data = myobj)
    alert(x)
}

alert(cadastraUsuario());
sessionStorage.setItem("username", "John");
// Pega os dados
alert( "username = " + sessionStorage.getItem("username"));