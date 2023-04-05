const select = document.getElementById("users");
const tableBody = document.getElementById("tbody");
const search = document.getElementById("search");

//degiskenler
var usersInformation = [];
var searchStr = "";
var tempUser = [];

const getUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}; //jsonplaceholder

window.addEventListener("load", async () => {
  const { data } = await getUsers();
  usersInformation = data;//kullanici bilgileri

  data.forEach((user) => {
    const option = document.createElement("option");
    option.value = user.id;
    option.innerHTML = user.name;
    select.appendChild(option);
  }); 
});

const getUserInformation = async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return data;
};
console.log(getUserInformation(3));

const makeList = (user) => {
  tableBody.innerHTML = "";

  const tr = document.createElement("tr");
  tableBody.appendChild(tr);

  const tdName = document.createElement("td");
  tr.appendChild(tdName);
  tdName.textContent = user.name;

  const tdUSerName = document.createElement("td");
  tr.appendChild(tdUSerName);
  tdUSerName.textContent = user.username;

  const tdPhone = document.createElement("td");
  tr.appendChild(tdPhone);
  tdPhone.textContent = user.phone;

  const tdEmail = document.createElement("td");
  tr.appendChild(tdEmail);
  tdEmail.textContent = user.email;

  const tdAddress = document.createElement("td");
  tr.appendChild(tdAddress);
  tdAddress.textContent = `${user.address.street} ${user.address.suite} ${user.address.city}`;
}; //username,phone, email, adress sütunlari

//select kismi
select.addEventListener("change", async (e) => {
  const user = await getUserInformation(e.target.value);
  tempUser = user;
  makeList(user);
});



//search kismi

search.addEventListener("input", (e) => {
  searchStr = e.target.value;
  searchUSer(searchStr);
});

const searchUSer = (searchStr) => {
  const temp = usersInformation.filter((item) => item.name.includes(searchStr));
  console.log(temp);
  if (!searchStr == "") {
    makeListSearch(temp);
  } else {
    makeList(tempUser);
  }
};

const makeListSearch = (users) => {
  tableBody.innerHTML = "";
  users.map((user) => {
    const tr = document.createElement("tr");
    tableBody.appendChild(tr);

    const tdName = document.createElement("td");
    tr.appendChild(tdName);
    tdName.textContent = user.name;

    const tdUSerName = document.createElement("td");
    tr.appendChild(tdUSerName);
    tdUSerName.textContent = user.username;

    const tdPhone = document.createElement("td");
    tr.appendChild(tdPhone);
    tdPhone.textContent = user.phone;

    const tdEmail = document.createElement("td");
    tr.appendChild(tdEmail);
    tdEmail.textContent = user.email;

    const tdAddress = document.createElement("td");
    tr.appendChild(tdAddress);
    tdAddress.textContent = `${user.address.street} ${user.address.suite} ${user.address.city}`;
  });
};