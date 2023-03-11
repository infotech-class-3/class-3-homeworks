
function userGet(callback){
    
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(json => console.log(json));
        
        setTimeout(() => { 
            callback();
     }, 2000);
 }
 
 function Post(){
    
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    .then(response => response.json())
    .then(json => console.log(json));

}
userGet(Post);