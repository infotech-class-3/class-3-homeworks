const select = document.querySelector("#users");
const tableElement = document.querySelector("#tbody");
const search = document.querySelector("#search");

let usersInfo = [];
let searchStr = "";

const getUsers = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  };

  window.addEventListener("load", async () => {
    const { data } = await getUsers();
    usersInfo = data

    data.forEach((user) => {
        const option = document.createElement("option");
        option.value = user.id;
        option.textContent = user.name;

        select.appendChild(option);
  });
});

const getUsers = async (userId) => {
    const userInfo = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
    );
    userInfo = user.data;
    return info;
  };


  // henuz bitiremedim. tamamlanip tekrar guncellenecek 