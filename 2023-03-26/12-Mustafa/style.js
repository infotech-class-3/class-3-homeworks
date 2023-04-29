const select = document.getElementById("users");
const tableBody = document.getElementById("tbody");
const search = document.getElementById("search");

var bilgiler = [];
var str = "";
var user = [];

//verileri çekmek için axios kullanıyoruz fetch te kullanabiliriz --- bu işlem promis döndürdü bunu da async await ile aşagıda çözdük
const getUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

/*const data şeklinde yapınca gelen verinin içinden data bölümündekilerin hepsini getiriyor ama biz const {data} = await şeklinde yazarsak
sadece data bilgilerini getirir bize o yüzden süslü parantez için içinde yazıyoruz */

window.addEventListener("load", async () => {   // sayfa yüklenir yüklenmez bu işlem gerçekleşecek
  const { data } = await getUsers();
 
  bilgiler = data;

  data.forEach((user) => {
    const option = document.createElement("option"); // select altında optionlar olması gerektigi için option oluşturduk
    option.value = user.id; // valusu gelen verinin user.id sine eşit olsun
    option.innerHTML = user.name; // cextcontent i  gelen verinin name i ne eşit olsun
    select.appendChild(option); // select tin alt option çocuklarına bunu eklesin 
    
  });

  defaultUser(data[0].id);

});
// fonksiyon ile user id sini istedigimiz veriler çekmek için aşagıdaki kodları yazıyoruz
const getUserInformation = async (userId) => { //promis döndügü için async await yapısını kullandık 
  
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}` // .com/ dan sonra yazdıgımız todos?userId=${userId} kodu ile likdeki veriler kullanabilmek için yazdık 
  );

  return data;
};

// tod o  ları alıp listeleme yapacak fonksiyon. ve dinamik bi şekilde kendi satır sütün ve buton oluşturacak
const makeList = (todo) => {
  tableBody.innerHTML = "";

  const tr = document.createElement("tr");  // tr oluşturacak dinamik olark
  tableBody.appendChild(tr); // bu işlemi yapmazsak sayfada gözükmez

  const tdName = document.createElement("td");
  tr.appendChild(tdName);
  tdName.textContent = todo.name; // bu şekilde içerik ekleyebiliyoruz.

  const tdUSerName = document.createElement("td");
  tr.appendChild(tdUSerName);
  tdUSerName.textContent = todo.username;

  const tdPhone = document.createElement("td");
  tr.appendChild(tdPhone);
  tdPhone.textContent = todo.phone;

  const tdEmail = document.createElement("td");
  tr.appendChild(tdEmail);
  tdEmail.textContent = todo.email;

  const tdAddress = document.createElement("td");
  tr.appendChild(tdAddress);
  tdAddress.textContent = `${todo.address.street} ${todo.address.suite} ${todo.address.city}`;
};
//kullanıcı adının değişmesi ile tod o ların de değişmesi istedigimiz için aşagıdaki kodları yazacagız

select.addEventListener("change", async (e) => {
  const todo = await getUserInformation(e.target.value);

 user = todo;
  makeList(todo);
});


const defaultUser = async (firstId) => {
  const defaultShow = await getUserInformation(firstId);

  makeList(defaultShow);
};


search.addEventListener("input", (e) => {
    str = e.target.value;

  searchUSer(str);
});

const searchUSer = (str) => {
  const temp = bilgiler.filter((item) => item.name.includes(str));

  console.log(temp);
  if (!str == "") {
    makeListSearch(temp);
  } else {
    console.log(" Bos Olmayan Kisim")
    makeList(user);
  }
};
 // dinamik olarak yine tr ve td oluşturuyoruz 

const makeListSearch = (users) => {
  tableBody.innerHTML = ""; // içerigini sıfırlıyoruz
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
    tdAddress.textContent = `${user.address.street} ${user.address.suite} ${user.address.city}`; // içerikleri bu bilgilerle dolduruyoruz.  
  });
};
