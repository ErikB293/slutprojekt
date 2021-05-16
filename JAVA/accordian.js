

function openPanel(y) {
   
    let x = document.getElementById("avAcc" + y.id);

    
        if (x.style.height == "37vh") {
            x.style.height = "21.5vh";
            console.log("den är ihopdragen");
        } else {
            x.style.height = "37vh";
            console.log("Ut dragen");
        }
    
    
}
