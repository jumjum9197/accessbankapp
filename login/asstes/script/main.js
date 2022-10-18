const login_form = [
  {
    type: "email",
    placeholder: "Input your email/username",
    name: "user-details",
    required: true,
    className: "form-control mt-2 w-75 mx-auto",
    id: 'email'
   
  },
  {
    type: "password",
    placeholder: "Input your password",
    name: "password",
    required: true,
    className: "form-control color-red mt-2 w-75 mx-auto",
    id: 'password',
  
  },
];
const loginForm = document.querySelector("#loginForm");
const loginData = {
  email: "",
  password: "",
};
const createInputElement = (
  ele,
  required,
  type,
  placeholder,
  name,
  className,
  id,
  pattern
) => {
  const element = document.createElement(ele);
  element.required = required;
  element.type = type;
  element.placeholder = placeholder;
  element.name = name;
  element.className = `${className}`;
  element.id = id

  
  return element;
};

login_form.forEach(
  ({ name, placeholder, required, type, className, id }, index) => {
    loginForm.append(
      createInputElement("input", required, type, placeholder, name, className,  id)
    );
  }
);
const btn = document.createElement("button");
btn.innerText = "Login";
btn.id = 'login'
loginForm.append(btn);
btn.className = "btn btn-primary mt-3 w-25 mx-auto d-block mb-3";


const submitBtn = document.getElementById('login')
submitBtn?.addEventListener('click', ()=>{
    const emailData = document.getElementById('email').value
    const passwordData = document.getElementById('password').value
    loginData.email = emailData
    localStorage.setItem('login_data', JSON.stringify(loginData))
    console.log(JSON.stringify(loginData));
    const data = JSON.parse(localStorage.getItem('login_data'))
    console.log(data);
})