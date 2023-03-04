function calculate(num1, num2, callback) {
    let result = num1 + num2;
    callback(result);
  }
  
  function displayResult(result) {
    console.log("The result is: " + result);
  }
  
  calculate(5, 10, displayResult);

const todos= [
    {title:'todo1'},
    {title:'todo2'}
];


function todolist(){
    setTimeout(() =>{
        todos.forEach((item)=>{
            console.log(item);})
        },2000)
    }

function newTodo(newTodo, callback){
    setTimeout(()=>{
        todos.push(newTodo);
        callback();
        
    },3000);
}


newTodo(
    {title:'todo3'}, todolist,
);
console.log("============================");
const isWatchwordTrue = true;
const isThereMoneyInYourAccount = true;
const youCanWithdraw = true;

const promise_1= ()=>{
    const result= new Promise((resolve, reject)=>{
        if (isWatchwordTrue){
            resolve("login successful");
        }else{
            reject("login failed..!");
        }
    });
    return result;
}
const promise_2=()=>{
    const result = new Promise((resolve, reject) => {
        if(isThereMoneyInYourAccount){
            resolve("Your account has money");
        }else{
            reject("There is no money");
        }
    });
    return result;
}

const promise_3=()=>{
    const result =new Promise((resolve, reject) => {
        if(youCanWithdraw){
            resolve("Money can be withdrawn");
        }else{
            reject("Money can't be withdrawn");
        }
    });
    return result;
}

promise_1()
    .then((sonuc)=>{
        console.log(sonuc);
        promise_2()
        .then((sonuc)=>{
            console.log(sonuc);
            promise_3()
            .then((sonuc)=>{
                console.log(sonuc);
            })
            .catch((error)=>{
                console.log(error);
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    })
    .catch((error)=>{
        console.log(error);
    })

const data=[];
const durum= true;
const users=['Salih'];
const dataLoader=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            data.push(users);
            if(durum){
                resolve();
            }else{
                reject("Hata var.. Data yuklenemedi..!!")
            }
        }, 3000);
    });
};

const dataPrinter=()=>{
    setTimeout(()=>{
        data.forEach(i=> console.log(i))
    },2000);
};

async function islemAkisi(){
    await dataLoader();
    dataPrinter();
};

islemAkisi();
