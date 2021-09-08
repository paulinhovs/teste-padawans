fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => {
    const div = document.getElementById("conteudo");
    div.innerText = JSON.stringify(json.title);

})

function request() {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function(response){
        return response.json()
    })
    .then((response) => {
        var result = document.getElementById('result')
        var item = ''
        console.log(response)
        response.forEach(element => {
            item = 'User Id:' + element.userId + "Id:" + element.id + "title:" + element.title + "completed:" + element.completed + "<br><br>"
            
            console.log(item)

            result.append(item)

        });
       
        
    })
}
