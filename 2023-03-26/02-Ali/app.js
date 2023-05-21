const select = document.querySelector("#users");
const tableElement = document.querySelector("#tbody");
const search = document.querySelector("#search");

let userTodos =[];
let userData = [];
let str ="";

const getUsers = () => {
   return axios.get('https://jsonplaceholder.typicode.com/users');
};

window.addEventListener("load", async () => {
 const { data } = await getUsers();
 console.log(data);
 userData ={data}.data; 
    data.forEach((user) => {
        const option = document.createElement("option");
        option.value = user.id;
        option.textContent = user.name;
        select.appendChild(option);
    });
});

const getTodos = async (userId) => {
    const todos = await axios.get(
        `https://jsonplaceholder.typicode.com/users?id=${userId}`
        );
    userTodos = todos.data;
    return todos;
};

const makeList = (todos) => {
    tableElement.innerHTML = "";
    todos.forEach((todo) => {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        const td2 = document.createElement("td");
        
        td.innerHTML ="<div class='row'><div class='col-sm-3'> <p class='mb-0'>Ad:</p></div><div class='col-sm-9'>"+todo.name+"</div></td>";
        td.innerHTML +="<div class='row'><div class='col-sm-3'> <p class='mb-0'>Kullanıcı Adı:</p></div><div class='col-sm-9'>"+todo.username+"</div></td>";
        td.innerHTML +="<div class='row'><div class='col-sm-3'> <p class='mb-0'>Email:</p></div><div class='col-sm-9'><a href=mailto:'"+todo.email+"'>"+todo.email+"</a></div></td>";
        td.innerHTML +="<div class='row'><div class='col-sm-3'> <p class='mb-0'>Telefon:</p></div><div class='col-sm-9'>"+todo.phone+"</div></td>";
        td.innerHTML +="<div class='row'><div class='col-sm-3'> <p class='mb-0'>Firma:</p></div><div class='col-sm-9'>"+todo.company.name+"</div></td>";

        td.innerHTML +="</tr></table>";
       
        tr.appendChild(td);
        tr.appendChild(td2);
        
        tableElement.appendChild(tr);
    });
};

select.addEventListener("change", async (e) => {
    const { data } = await getTodos(e.target.value);

    makeList(data);
});

    if (str == "") {
      makeList(userTodos);
    } else {
      searchTodos(str);
    };
  
    const searchTodos = (str) => {
    const temp = userData.filter(o => {return (o.username.includes(str) || o.name.includes(str) || o.email.includes(str))});

    makeList(temp);
  };

  search.addEventListener("input", (e) => {
    str = e.target.value;
  
    searchTodos(str);
  });


