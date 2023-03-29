const select = document.getElementById("users");
const tableBody = document.getElementById("tbody");
const search = document.getElementById("search");

var usersInformation = [];
var searchStr = "";
var tempUser = [];

const getUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

window.addEventListener("load", async () => {
  const { data } = await getUsers();
  //Butun kullanilarin bilgileri diziye aktariyoruz
  usersInformation = data;

  data.forEach((user) => {
    const option = document.createElement("option");
    option.value = user.id;
    option.innerHTML = user.name;
    select.appendChild(option);
    
  });

  defaultUser(data[0].id);

});

const getUserInformation = async (id) => {
  // gonderilen id e ait kullanicinin bilgilerini veriyor
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
};

select.addEventListener("change", async (e) => {
  //select'ten secilen kullanicin bilgilerini veriyor
  const user = await getUserInformation(e.target.value);

  tempUser = user;
  makeList(user);
});

//Baslangista ilk kullanici ile geliyor
const defaultUser = async (firstId) => {
  const defaultShow = await getUserInformation(firstId);

  makeList(defaultShow);
};


//---------------------------------------------------------
search.addEventListener("input", (e) => {
  // console.log(e.target.value);
  // console.log(usersInformation);
  searchStr = e.target.value;

  searchUSer(searchStr);
});

const searchUSer = (searchStr) => {
  const temp = usersInformation.filter((item) => item.name.includes(searchStr));

  console.log(temp);
  if (!searchStr == "") {
    makeListSearch(temp);
  } else {
    console.log("bursai bos olmayan kisim")
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
