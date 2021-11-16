

function atualizarFechaduras () {
    
    const data = { token: localStorage.getItem("username")};
    fetch('http://127.0.0.1:5000/listaFechadura', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
     },
     body: JSON.stringify(data),
    })
    .then((response) => response.json())
    //Then with the data from the response in JSON...
    .then((data) => {
         if (data['sucess']){
            alert("OK")
         }
    })
    //Then with the error genereted...
    .catch((error) => {
    console.error('Error:', error);
    });
    }


function abrirFechadura(numero){
    const data = { token: localStorage.getItem("username"), codigo: numero};
    fetch('http://127.0.0.1:5000/abrirFechadura', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
     },
     body: JSON.stringify(data),
    })
    .then((response) => response.json())
    //Then with the data from the response in JSON...
    .then((data) => {
         if (data['sucess']){
            alert("ABRINDO")
         }
    })
    //Then with the error genereted...
    .catch((error) => {
    console.error('Error:', error);
    });
    }


alert( "username = " + localStorage.getItem("username"));
atualizarFechaduras();
// Pega os dados
