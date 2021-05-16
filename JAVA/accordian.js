

function openPanel(y) {
   
    let x = document.getElementById("avAcc" + y.id);

    
        if (x.style.height == "35vh") {
            x.style.height = "21.5vh";
            console.log("Hello world!");
        } else {
            x.style.height = "35vh";
            console.log("den är ihopdragen");
        }
    
    
}