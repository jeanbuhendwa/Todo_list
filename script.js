var button = document.getElementById("button");
var input = document.getElementById("inputtext");
var ul = document.querySelector("ul");

button.addEventListener("click", function(){
    var li = document.createAttribute("li");
    // li.appendChild(document.createTextNode(input.value));
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
})