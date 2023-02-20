// // const button = document.getElementById('button');
// const idusuario = document.getElementById("userid").value;
// const contrasena = document.getElementById("pass").value;

// var url = 'http://localhost:8000/api/v1/credenciales';
// var data = {
//   username: document.getElementById('userid').value,
//   password: document.getElementById("pass").value
// };



// async function enviar() {
//   var Iusuario = document.querySelector(".userid");
//   var Icontra = document.querySelector(".pwd");

//   console.log(Iusuario);
//   console.log(Icontra);
  
//   await fetch(url, {
//     mode: "no-cors",
//     method: 'POST', // or 'PUT'
//     body: JSON.stringify({
//       username: Iusuario.value,
//       password: Icontra.value
//     }), // data can be `string` or {object}!
    
//     headers:{
//       'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/json'
//     }
//   }).then(res => console.log(res))
//   .catch(error => console.error('Error:', error))
//   .then(response => console.log('Success:', response));
// }





// button.addEventListener('click', () => {

//     // var data = {
//     //     idUsuario: document.getElementById('userid').value,
//     //     password: document.getElementById("pass").value
//     // };

//     // var url = 'http://localhost:8080/user';

//     // fetch(url, {
//     //     method: 'POST', // or 'PUT'
//     //     body: JSON.stringify(data), // data can be `string` or {object}!
//     //     headers:{
//     //       'Content-Type': 'application/json'
//     //     }
//     //   }).then(res => res.json())
//     //   .catch(error => console.error('Error:', error))
//     //   .then(response => console.log('Success:', response));

//     // axios({
//     //     method: 'POST',
//     //     url: 'http://localhost:8080/user',
//     //     data: {
//     //         idUsuario: document.getElementById('userid').value,
//     //         password: document.getElementById("pass").value
//     //     }
//     // }).then(res => console.log(res.data))
//     // .catch(err => console.log(err))

//     // axios.post('http://localhost:8080/user', postData, axiosConfig)
//     // .then((res) => {
//     //   console.log("RESPONSE RECEIVED: ", res);
//     // })
//     // .catch((err) => {
//     //   console.log("AXIOS ERROR: ", err);
//     // })


// })


