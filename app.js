let input = document.getElementById("input");
let generate = "0123456789abcdef"
let change = "";

function Generate(){
    let input = document.getElementById("input");
    change = '';
   for (let i = 0; i <= 3; i++) {
         let randomNumber = generate[Math.floor(Math.random() * generate.length)]
         change += randomNumber;
        
     }
     input.value = `#${change}`;
}

function apply(){
    let input = document.getElementById("input");
    let body =  document.querySelector("body");
    body.style.backgroundColor = `${input.value}`;
}