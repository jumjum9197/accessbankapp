const currentUser = JSON.parse(localStorage.getItem("current_session"));
document.getElementById('depositbalance').innerHTML = currentUser[0].deposit;
console.log(currentUser)

const addMoney = document.getElementById('myDeposit').value

 const increment = document.getElementById('addMoney');
 increment.addEventListener('click', () => {
     const addMoney = document.getElementById('myDeposit').value
     console.log(addMoney)
     const loggedInUser = JSON.parse(localStorage.getItem("current_session"))
     var parsed = parseFloat(loggedInUser[0].deposit)
     parsed += parseFloat(addMoney);

     document.getElementById('depositbalance').innerHTML = parsed;

     const allUsers = JSON.parse(localStorage.getItem('all_users_data'));
     console.log(allUsers)
     const updateUserDeposit = allUsers.findIndex(obj => {
         return obj.email === loggedInUser[0].email
     })
     console.log(updateUserDeposit);
    
     loggedInUser[0].deposit = parsed
     console.log(loggedInUser)
     localStorage.setItem('current_session', JSON.stringify(loggedInUser))
     console.log(JSON.stringify(loggedInUser))

     allUsers[updateUserDeposit].deposit = parsed
     console.log(allUsers);
     localStorage.setItem('all_users_data', JSON.stringify(allUsers))
     console.log(JSON.stringify(allUsers))

    //  const date = new Date();
    //  let day = date.getDate();
    //  let month = date.getMonth();
    //  let year = date.getFullYear();
    //  let currentDate = `${day}-${month}-${year}`;
    //  document.getElementById('dater').innerHTML = currentDate;
    //  console.log(date)
    
    //  document.getElementById('cAmount').innerHTML = addMoney;
    //  document.getElementById('cBalance').innerHTML = parsed;
 });
 var loggedInUser = JSON.parse(localStorage.getItem("current_session"))
 var greeting = document.getElementById("username");
 const hour = new Date().getHours();
 const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
 let welcomeText = "";
 
 if (hour < 12) welcomeText = welcomeTypes[0];
 else if (hour < 18) welcomeText = welcomeTypes[1];
 else welcomeText = welcomeTypes[2];
 
 greeting.innerHTML = welcomeText +" " +loggedInUser[0].name;
// greeting.innerHTML="dear " +loggedInUser[0].name

 const logout =document.getElementById("logout")
 logout.addEventListener('click', () => {
    localStorage.removeItem("current_session")
    location.assign('login.html')
 })

