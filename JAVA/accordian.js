

function openPanel(y) {
   
    let x = document.getElementById("avAcc" + y.id);

    
        if (x.style.height == "39vh") {
            x.style.height = "21.5vh";
            console.log("den är ihopdragen");
        } else {
            x.style.height = "39vh";
            console.log("Ut dragen");
        }
    
    
}
