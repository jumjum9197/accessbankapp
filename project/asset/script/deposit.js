allUsers=[]
const current=JSON.parse(localStorage.getItem("current_session"));
allUsers=[...current]
document.getElementById("depositbalance").innerHTML=allUsers[0].deposit;


