function cadastraUsuario () {
    
    const data = { user: 'Leonardo', pass: '1234'};
    fetch('http://127.0.0.1:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
     },
     body: JSON.stringify(data),
    })
    .then((response) => response.json())
    //Then with the data from the response in JSON...
    .then((data) => {
         localStorage.setItem("username", data['token']);
         if (data['sucess']){
            window.location.href = "http://127.0.0.1/Fechaduras/fechaduras.html";
         }
    })
    //Then with the error genereted...
    .catch((error) => {
    console.error('Error:', error);
    });
    }

cadastraUsuario();
// Pega os dados
alert( "username = " + localStorage.getItem("username"));