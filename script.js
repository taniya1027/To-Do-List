let input = document.getElementById("input");
let to_do = document.getElementById("to_do");
document.getElementById("button").onclick = function(){
   
    var paragraph = document.createElement("p");
    paragraph.classList.add("styling");
    paragraph.innerText = input.value;
    
    to_do.appendChild(paragraph);
    input.value= "";

    paragraph.onclick = function(){
        paragraph.style.textDecoration = "line-through";
    }

    paragraph.ondblclick = function(){
        to_do.removeChild(paragraph);
    }
    
}