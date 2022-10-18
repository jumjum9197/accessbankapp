if (document.querySelector("#loginForm")) {
  const login_form = [
    {
      type: "email",
      placeholder: "Input your email/username",
      name: "user-details",
      required: true,
      className: "form-control mt-2 w-75 mx-auto",
      id: "email",
    },
    {
      type: "password",
      placeholder: "Input your password",
      name: "password",
      required: true,
      className: "form-control mt-2 w-75 mx-auto",
      id: "password",
    },
  ];
  const loginForm = document.querySelector("#loginForm");
  const loginData = {
    email: "",
    password: "",
  };
  // const createInputElement = (
  //   ele,
  //   required,
  //   type,
  //   placeholder,
  //   name,
  //   className,
  //   id
  // ) => {
  //   const element = document.createElement(ele);
  //   element.required = required;
  //   element.type = type;
  //   element.placeholder = placeholder;
  //   element.name = name;
  //   element.className = `${className}`;
  //   element.id = id;
  //   return element;
  // };

  login_form.forEach(
    ({ name, placeholder, required, type, className, id }, index) => {
      loginForm.append(
        createInputElement(
          "input",
          required,
          type,
          placeholder,
          name,
          className,
          id
        )
      );
    }
  );
  const btn = document.createElement("button");
  btn.innerText = "Login";
  btn.id = "login";
  loginForm.append(btn);
  btn.className = "btn btn-primary mt-3 w-25 mx-auto d-block mb-3";

  const submitBtn = document.getElementById("login");
  submitBtn.addEventListener("click", () => {
    const emailData = document.getElementById("email").value;
    const passwordData = document.getElementById("password").value;
    loginData.email = emailData;
    loginData.password = passwordData;
    localStorage.setItem("login_data", JSON.stringify(loginData));
    console.log(JSON.stringify(loginData));
    const data = JSON.parse(localStorage.getItem("login_data"));
    console.log(data);
  });
}

// ===================register javascript side=================

const reg_form = [
  {
    type: "text",
    placeholder: "Input your first name",
    name: "first-name",
    required: true,
    className: "form-control mt-2 w-75 mx-auto",
    id: "f-name",
  },
  {
    type: "text",
    placeholder: "Input your last name",
    name: "last-name",
    required: true,
    className: "form-control mt-2 w-75 mx-auto",
    id: "l-name",
  },
  {
    type: "email",
    placeholder: "Input your email/username",
    name: "user-details",
    required: true,
    className: "form-control mt-2 w-75 mx-auto",
    id: "email",
  },
  {
    type: "password",
    placeholder: "Input your password",
    name: "password",
    required: true,
    className: "form-control mt-2 w-75 mx-auto",
    id: "password",
  },
  {
    type: "tel",
    placeholder: "Input your phone number",
    name: "phone",
    required: true,
    className: "form-control mt-2 w-75 mx-auto",
    id: "phone",
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
    placeholder: "Input your initial deposit",
    name: "deposit",
    required: true,
    className: "form-control mt-2 w-75 mx-auto",
    id: "deposit",
  },
  {
    type: "number",
    placeholder: "enter your bvn",
    name: "bvn",
    required: true,
    className: "form-control mt-2 w-75 mx-auto",
    id: "bvn",
  },
];

const createInputElement = ({
  type,
  name,
  required,
  className,
  id,
  option,
  placeholder,
}) => {
  let inputType = "select";
  const inputCheck = ["text", "email", "number", "password", "tel"];
  if (inputCheck.indexOf(type) !== -1) {
    inputType = "input";
  }
  if (inputType === "select") {
    const selectElement = document.createElement(inputType);
    selectElement.required = required;
    selectElement.className = className;
    selectElement.name = name;
    selectElement.id = id;
    option?.forEach((gender, index) => {
      const optionElement = document.createElement("option");
      optionElement.value = gender;
      optionElement.innerText = gender;
      selectElement.append(optionElement);
    });
    return selectElement;
  }
  const element = document.createElement(inputType);
  element.id = id;
  element.className = className;
  element.type = type;
  element.name = name;
  element.required = required;
  element.placeholder = placeholder;
  return element;
};
const regForm = document.querySelector("#regForm");

// reg_form.map(
//   ({ className, id, name, placeholder, required, type, option }) => {
//     return createInputElement({
//       type,
//       placeholder,
//       name,
//       required,
//       className,
//       id,
//       option,
//     });
//   }
// )
reg_form.forEach(
  ({ className, id, name, placeholder, required, type, option }) => {
    regForm.append(
      createInputElement({
        type,
        placeholder,
        name,
        required,
        className,
        id,
        option,
      })
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
    bvn: document.getElementById("bvn").value
  };
if (reg_data.initDeposit >= 500 && reg_data.bvn){
  console.log(reg_data.initDeposit)
  console.log(reg_data.gender);
  allUsers.push(reg_data);
  localStorage.setItem("reg_data", JSON.stringify(allUsers));
  console.log(JSON.stringify(allUsers));
  const data = JSON.parse(localStorage.getItem("reg_data"));
  console.log(data);

}
 else {
  alert('you cant deposit less than 500')
 }
});


const data = JSON.parse(localStorage.getItem("reg_data"));
allUsers = [...data]
allUsers.filter(({email, password})=>{
  if(email === '' && password === ''){
    localStorage.setItem('current_session', email)
    location.assign('')
  }
})

// const login = (email, password) => {
//   allUsers.filter(({email, password})=>{
//     if(email === '' && password === ''){
//       localStorage.setItem('current_session', email)
//       location.assign('index.html')
//     }
//     alert('user does not exist')
//   })
// }

// login.addEventListener('', () =>{
//   const emailData = document.getElementById("email").value;
//   const passwordData = document.getElementById("password").value;
//   login(emailData,passwordData)
// })