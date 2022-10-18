


let allUsers = [];
const allData= JSON.parse(localStorage.getItem("Users"))
if(allData ===null){
  localStorage.setItem("Users",JSON.stringify([]))
}


const submitBtn = document.getElementById("Register");
submitBtn?.addEventListener("click", () => {
  const reg_data = {
    name: `${document.getElementById("FistName").value} ${
      document.getElementById("MiddleName").value 
    } ${document.getElementById("LastName").value}`,
    Phonenum: document.getElementById("Phonenum").value,
    Email: document.getElementById("Email").value,
    deposit: document.getElementById("deposit").value,
    dob: document.getElementById("dob").value,
    Password: document.getElementById("Password").value,
 
  
  };


  if(reg_data.Password !==reg_data.CPassword){
    alert("password not match")
  }else
 if(reg_data.deposit >=500 ){
  
    const data = JSON.parse(localStorage.getItem("Users"));
    allUsers = [...data]
    let result=allUsers.filter((object)=>{
      if(object.Email===reg_data.Email){
        return object;
      }
    })
    console.log(result);
    if(result.length ===0){
      allUsers.push(reg_data);
      allUsers=JSON.stringify(allUsers);
      localStorage.setItem("Users",allUsers);
      
  
    }
    else{alert("user already exist")}
  }
   else{
     alert('please use amount equal to or greater than 500 to register')
   }
 
  


});




