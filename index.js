let input= document.getElementById("inputBox")
let  buttons = document.querySelectorAll("button")

let  string = "  "
let arr =  Array.from(buttons);

arr.forEach(button=>{
    button.addEventListener("click",
    (e)=>{
        if(e.target.innerHTML == "ENTER" || e.target.innerHTML == "ans")
        {
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == "del")
        {
               string = string.substring(0 , string.length-1);
               input.value = string;
        }
        else if(e.target.innerHTML == "clear")
        {
             string = " ";
             input.value=string;
        }

        else{
            string = string+ e.target.innerHTML
            input.value = string
        }
    })
})