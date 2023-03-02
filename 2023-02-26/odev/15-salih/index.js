// function calculate(num1, num2, callback) {
//     let result = num1 + num2;
//     callback(result);
//   }
  
//   function displayResult(result) {
//     console.log("The result is: " + result);
//   }
  
//   calculate(5, 10, displayResult);

const todos= [
    {title:'todo1'},
    {title:'todo2'}
];


function todolist(){
    setTimeout(() =>{
        todos.forEach((item)=>{
            console.log(item);})
        },2000)
    }

function newTodo(newTodo, callback){
    callback();
    setTimeout(()=>{
        todos.push(newTodo);
        
    },3000);
}


newTodo(
    {title:'todo3'}, todolist,
);
