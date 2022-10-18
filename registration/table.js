const data = [
    {names:"jummy", age:"30", language:"php"},
    {names:"jummy", age:"30", language:"php"},
    {names:"jummy", age:"30", language:"php"},
    {names:"jummy", age:"30", language:"php"},

    ]
   
    
    
   const main= document.getElementById("main");
   const ddd = (({names,age,language })=>{

    return `<div class="row">
    <div class="col" >name</div>
    <div class="col" >age</div>
    <div class="col" >language</div>
    </div>
    `  
   });
   data.forEach(day=>{
    main.innerHTML += ddd({...day})
   });
 