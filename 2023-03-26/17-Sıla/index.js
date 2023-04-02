const select=document.querySelector("select")
const tbody=document.querySelector("tbody")
let str=""
let bilgi_katılımcı=[]
const getUsers = async() => {
    const bilgiler= await axios.get("https://jsonplaceholder.typicode.com/users");
    bilgi_katılımcı=bilgiler.data
    return bilgiler
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

  const makeList = (bilgiler) => {
      const tr = document.createElement("tr");
      const td_1 = document.createElement("td");
      const td_2 = document.createElement("td");
      const td_3 = document.createElement("td");
      tr.appendChild(td_1);
      tr.appendChild(td_2);
      tr.appendChild(td_3);
      tbody.appendChild(tr);
    bilgiler.forEach((bilgi)=>{
        td_1.innerText = bilgi.name
      td_2.innerText=bilgi.email
      td_3.innerText=bilgi.address.city
    })};

  select.addEventListener("change", async (e) => {
    const { data } = await getUsers(e.id);
    makeList(data);
  });

  const searchBilgi = (str) => {
    const a = bilgi_katılımcı.filter((item) => item.name.includes(str));
    
    makeList(a);
  };
  
  search.addEventListener("input", (e) => {
    str = e.target.value;
  
    searchBilgi(str);
  });
