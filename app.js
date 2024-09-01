document.getElementById("greetButton").addEventListener("click", ()=> {
    var name = prompt("What's your name?");
    
        document.getElementById("greeting").textContent = "Hello " + name + "!";
    
});