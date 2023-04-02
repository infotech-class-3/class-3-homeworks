const select = document.getElementById("users");
const search = document.getElementById("search");
const table = document.getElementById("tbody");

let userTodos = [];
let userBox = [];
let searchStr = ""

const getUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

window.addEventListener("load", async () => {
  const { data } = await getUsers();
  
  userTodos = data

  data.forEach((user) => {
    const option = document.createElement("option");
    option.value = user.id;
    option.innerHTML = user.name;
    select.appendChild(option);
  });

  // console.log(data);
});



const getTodos = async (userId) => {
  const {data} = await axios.get(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
  );
  // userTodos = todos.data;

  return data;
};

console.log(getTodos(1));







const makeListUser = (user) => {
  table.innerHTML = "";  
  //herbir değişimde üzerine yazmaması için table ı sıfırlayarak başlattık...  
  
  const tr = document.createElement("tr");
  const tdName = document.createElement("td");
  const tdUsername = document.createElement("td");
  const tdEmail = document.createElement("td");

  //tablonun iç elemanlarını oluşturduk

  table.appendChild(tr);
  tr.appendChild(tdName);
  tr.appendChild(tdUsername);
  tr.appendChild(tdEmail);

  // tablonun elemanlarını append ettik

  tdName.textContent = user.name;
  tdUsername.textContent = user.username;
  tdEmail.textContent = user.email;
};

select.addEventListener("change", async (e) => {
  const user = await getTodos(e.target.value);

  userBox = user;
  makeListUser(user);
});



search.addEventListener("input", (e) => {
  searchStr = e.target.value;

  searchUser(searchStr)
});

const searchUser = (searchStr) => {
  const temp = userTodos.filter ((item) => item.name.includes(searchStr))


  console.log(temp);
  if (!searchStr == "") {
    makeListSearch(temp)
  } else {
    console.log("");
    makeListUser(userBox)
  }
}



const makeListSearch = (users) => {
  table.innerHTML = "";

  users.forEach((user) => {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdUsername = document.createElement("td");
    const tdEmail = document.createElement("td");

    table.appendChild(tr);
    tr.appendChild(tdName);
    tr.appendChild(tdUsername);
    tr.appendChild(tdEmail);

    tdName.textContent = user.name;
    tdUsername.textContent = user.username;
    tdEmail.textContent = user.email;
  });
};
