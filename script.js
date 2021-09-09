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
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function(response){
    return response.json()
  })
  .then((response) =>{
    var result = document.getElementById('result')
    var item = ''
    console.log (response)
    response.forEach(element => {

      result.innerHTML = 'User Id:' + element.userId + "Id:" + element.id + "title:" + element.title + "completed:" + element.completed + "<br><br>"
  
    });
    
    
   })
}

function request1(){
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then(function(response){
      return response.json()
    })
    .then((response) =>{
      var result = document.getElementById('result1')
      var item = ''
      console.log (response)
      response.forEach(element => {
  
        result.innerHTML = 'User Id:' + element.userId + "Id:" + element.id + "title:" + element.title + "completed:" + element.completed + "<br><br>"
    
      });
      
      
     })
  }

  function request2(){
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(function(response){
        return response.json()
      })
      .then((response) =>{
        var result = document.getElementById('result2')
        var item = ''
        console.log (response)
        response.forEach(element => {
    
          result.innerHTML = 'User Id:' + element.userId + "Id:" + element.id + "title:" + element.title + "completed:" + element.completed + "<br><br>"
      
        });
        
        
       })
    }