function toggleDiv() {
  if(document.getElementById("exemplo1").style.display == 'none') {
      document.getElementById("exemplo1").style.display = 'block';
        document.getElementById("exemplo2").style.display = 'none';
  } else {
    document.getElementById("exemplo1").style.display = 'none';
      document.getElementById("exemplo2").style.display = 'block';
  } 
}

function toggleDiv2() {
  if(document.getElementById("exemplo1").style.display == 'none') {
      document.getElementById("exemplo1").style.display = 'block';
        document.getElementById("exemplo3").style.display = 'none';
  } else {
    document.getElementById("exemplo1").style.display = 'none';
      document.getElementById("exemplo3").style.display = 'block';
  } 
}

function toggleDiv3() {
  if(document.getElementById("exemplo1").style.display == 'none') {
      document.getElementById("exemplo1").style.display = 'block';
        document.getElementById("exemplo4").style.display = 'none';
  } else {
    document.getElementById("exemplo1").style.display = 'none';
      document.getElementById("exemplo4").style.display = 'block';
  } 
}

function toggleDiv4() {
  if(document.getElementById("exemplo2").style.display == 'none') {
      document.getElementById("exemplo2").style.display = 'block';
        document.getElementById("exemplo1").style.display = 'none';
  } else {
    document.getElementById("exemplo2").style.display = 'none';
      document.getElementById("exemplo1").style.display = 'block';
  } 
}

function toggleDiv5() {
  if(document.getElementById("exemplo3").style.display == 'none') {
      document.getElementById("exemplo3").style.display = 'block';
        document.getElementById("exemplo1").style.display = 'none';
  } else {
    document.getElementById("exemplo3").style.display = 'none';
      document.getElementById("exemplo1").style.display = 'block';
  } 
}

function toggleDiv6() {
  if(document.getElementById("exemplo4").style.display == 'none') {
      document.getElementById("exemplo4").style.display = 'block';
        document.getElementById("exemplo1").style.display = 'none';
  } else {
    document.getElementById("exemplo4").style.display = 'none';
      document.getElementById("exemplo1").style.display = 'block';
  } 
}

function request(){
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(function(response){
    return response.json()
  })
  .then((response) =>{
    console.log (response)
    var result = document.getElementById('result')
    result.innerHTML = 'User Id:' + response.userId + "Id:" + response.id + "title:" + response.title + "completed:" + response.completed
   })
}