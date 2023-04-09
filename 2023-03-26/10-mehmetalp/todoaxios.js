//-jsonplaceholder dan users ları alarak select ile liste oluşturmak.
const select = document.querySelector("#users");

const getUsers = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users")
}

console.log(getUsers());

// sayfa acilir acilmaz bilgileri yüklenmesini istiyoruz.
window.addEventListener("load", async () =>{// bilgiler Promise dönmesi nedeniyle bilgileri görmek icin async ve await kullanilmasi gerekir.
    const { data } = await getUsers();// bilgilrden hangisini almak istenirse, { } arasina yazilmasi gerekir.
    console.log(data);

    data.forEach((user) => {
        const option = document.createElement("option");
        option.value = user.id;
        option.textContent = user.name;
        select.appendChild(option)
    });
    
});

//-seçilen user ın name, username, email, address.city, phone, website, company.name leri tablo ile gösterilsin.
const getTodos = async (userId) => {
    const todos =  await axios.get(
        `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
        );

    console.log(todos);
    return todos;
    
}


getTodos(4);








//-tablo arasından da search yapılabilsin.
