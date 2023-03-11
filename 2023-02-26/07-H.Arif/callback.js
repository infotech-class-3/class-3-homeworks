const todos= [
    { title: "Todo 1", description : "go job"},
    { title: "Todo 2", description : "eat food"},
    { title: "Todo 3", description : "do homework"}
];

function todolist () {
    setTimeout(() => { todos.forEach((item) => {
        console.log(item)
    }
        )    
    }, 1000);
}

function newTodo (todo, callback) {
    setTimeout(() => {  todos.push(todo); 
        callback()}, 2000); 
}

newTodo ( { title: "Todo 4", description : "go to sleep"}, todolist);