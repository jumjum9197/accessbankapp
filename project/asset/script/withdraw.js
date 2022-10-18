

// withdraw

const decrement = document.getElementById('removeMoney');
decrement.addEventListener('click', () => {
    const removeMoney = document.getElementById('mywithdraw').value
  
    const loggedInUser = JSON.parse(localStorage.getItem("current_session"))
    var parsed = parseFloat(loggedInUser[0].deposit)
    if (removeMoney> parsed){
        alert("insufficient funds")
        return;
    }else
    parsed -= parseFloat(removeMoney);

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
   })