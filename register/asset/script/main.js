const reg_form = [
    {
        type: "text",
        placeholder: "Input your Firstname & LastName",
        name: "fullname",
        required: true,
        className: "form-control mt-2 w-75 mx-auto",
        id: 'fullname'
      },
    {
      type: "email",
      placeholder: "Input your email",
      name: "user-details",
      required: true,
      className: "form-control mt-2 w-75 mx-auto",
      id: 'email'
    },
    {
        type: "text",
        placeholder: "Input your username",
        name: "username",
        required: true,
        className: "form-control mt-2 w-75 mx-auto",
        id: 'username'
      },
    {
      type: "password",
      placeholder: "Input your password",
      name: "password",
      required: true,
      className: "form-control mt-2 w-75 mx-auto",
      id: 'password'
    },
    {
      type: "select",
      placeholder: "Input your gender",
      name: "gender",
      required: true,
      className: "form-control mt-2 w-75 mx-auto",
      id: "gender",
      option: ["Male", "Female"],
    },
      {
        type: "number",
        placeholder: "initial deposit",
        name: "amount",
        required: true,
        className: "form-control mt-2 w-75 mx-auto",
        id: 'amount',
        pattern:"[0-9]{3}" 
      },
  ];
  const loginForm = document.querySelector("#registrationForm");
const loginData = { fullname: "", email: "", username: "", password: "", gender: "",amount: "",};

// const createInputElement = ( ele, required, type, placeholder, name, className, id 
//     ) => {
//   const element = document.createElement(ele);
//   element.required = required;
//   element.type = type;
//   element.placeholder = placeholder;
//   element.name = name;

//   element.className = `${className}`;
//   element.id = id
//   return element;
// };
reg_form.forEach(
    ({ name, placeholder, required, type, className, id }, index) => {
      loginForm.append(
        createInputElement("input", required, type, placeholder, name, className,  id)
      );
    }
  );
  const btn = document.createElement("button");
btn.innerText = "Register";
btn.id = "reg";
regForm.append(btn);
btn.className = "btn btn-primary mt-3 w-25 mx-auto d-block mb-3";
btn.type = "button";

let allUsers = [];
const submitBtn = document.getElementById("reg");
submitBtn.addEventListener("click", () => {
  const reg_data = {
    name: `${document.getElementById("f-name").value} ${
      document.getElementById("l-name").value
    }`,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    initDeposit: document.getElementById("deposit").value,
    gender: document.getElementById("gender").value,
    phone: document.getElementById("phone").value,
  };

  if (initDeposit <= 500){
    console.log(reg_data.gender);
    allUsers.push(reg_data);
    localStorage.setItem("reg_data", JSON.stringify(allUsers));
    console.log(JSON.stringify(allUsers));
    const data = JSON.parse(localStorage.getItem("reg_data"));
    console.log(data);

  }

  alert('you cant deposit amount lesser than 500')
});