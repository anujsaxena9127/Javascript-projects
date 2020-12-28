const add_user=document.getElementById("add-user");    
const double_money=document.getElementById("double-money");

 const millionare=document.getElementById("millionare");
 const sort=document.getElementById("sort");
 const wealth=document.getElementById("wealth");
 const main=document.getElementById('main');
console.log("hello world");
 //getRandomUser();
 //getRandomUser();
 getRandomUser();
 let data=[];
 async function getRandomUser(){
     const res= await fetch('https://randomuser.me/api/');
     const data=await res.json();
     const user=data.results[0];
    const newUser={
        name:`${user.name.first} ${user.name.last} `,
          money:Math.floor(Math.random()*1000000)
     }
     
     addData(newUser);
 }
 // double money of user
function doubleMoney(){
    data=data.map(user=>{
          return{...user, money: user.money*2}
    });
     updateDOM();  
     console.log(data);
}
//sort by richest
function sortRichest(){
    data.sort(function(a,b){
        return b.money-a.money;
    })
    updateDOM();
}
//filter only millionares
function millionarePeople()
{
 data=   data.filter(function(user){
       return user.money>1000000;
    })
    updateDOM();
    console.log("click")
}
//total wealth
function totalWealth()
{
  const wealt=data.reduce((acc,user)=>
    (acc+=user.money),0)
  ;
  const element1 = document.createElement('div');
      element1.classList.add('person');
      element1.innerHTML = `<strong>Total wealth is =</strong>         <strong>${formatMoney(wealt)}</strong> `;
    main.appendChild(element1)
}


function addData(obj){
    data.push(obj);
    updateDOM();

}
function updateDOM(providedData = data) {
    // Clear main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
  
    providedData.forEach(item => {
      const element = document.createElement('div');
      element.classList.add('person');
      element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
        item.money
      )}`;
      main.appendChild(element);
    });
  }
  function formatMoney(number) { 
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  } 

  //all event listener

  add_user.addEventListener("click",getRandomUser);
  double_money.addEventListener("click",doubleMoney);
  sort.addEventListener("click",sortRichest);
  millionare.addEventListener("click",millionarePeople);
  wealth.addEventListener("click",totalWealth);

 