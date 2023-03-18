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

function newTodo (todo) {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {  todos.push(todo);
            const e =false;
            if(!e) {
                resolve(todos);
            } else {
                reject("Error!...");
            }
        }, 2000); 
    })    
}

newTodo ( { title: "Todo 4", description : "go to sleep"})
.then (response => {
    console.log("New List", response);
    todolist();
})
.catch(e => {
    console.log(e);
})
