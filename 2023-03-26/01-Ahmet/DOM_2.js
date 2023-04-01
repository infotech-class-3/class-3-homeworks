const select = document.querySelector("#users");
const tableElement = document.querySelector("#tbody");
const search = document.querySelector("#search");

let userInfos = [];
let str = "";

const getUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

window.addEventListener("load", async () => {
  const { data } = await getUsers();
  data.forEach((user) => {
    const option = document.createElement("option");
    option.value = user.id;
    option.textContent = user.id;
    select.appendChild(option);
  });
});

const getInfos = async (userId) => {
  const infos = await axios.get(
    `https://jsonplaceholder.typicode.com/users?id=${userId}`
  );
  userInfos = infos.data;
  return infos;
};

const makeList = (infos) => {
  tableElement.innerHTML = "";

  infos.forEach((info) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = info.name;
    tr.appendChild(td);
    tableElement.appendChild(tr);

    const tr1 = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerHTML = info.username;
    tr1.appendChild(td1);
    tableElement.appendChild(tr1);
    
    const tr2 = document.createElement("tr");
    const td2 = document.createElement("td");
    td2.innerHTML = info.email;
    tr2.appendChild(td2);
    tableElement.appendChild(tr2); 
   
  });
};

select.addEventListener("change", async (e) => {
  const { data } = await getInfos(e.target.value);

  makeList(data);
});

const searchInfos = (str) => {
  const temp = userInfos.filter((item) => item.title.includes(str));

  makeList(temp);
};

search.addEventListener("input", (e) => {
  str = e.target.value;

  searchInfos(str);
});