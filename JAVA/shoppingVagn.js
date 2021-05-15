let räknare= 0;
let tot = 0;

function rensa() {
    let tabell = document.getElementById("vagn");
    tabell.innerHTML = "<tr><td>Name</td><td>Pris</td></tr>";
    räknare = 0;
     tot = 0;
     updateElements();
    plus1();
   
}

function vagnAktiv() {
   
    let x = document.getElementById("purchaseInfo");
 
    if (x.style.display != "block") {
        x.style.display = "block";
    } else {
        x.style.display =- "none";
    }
}

function add2Cart(namn, pris) {
    console.log(namn + " kostar " + pris + " SEK");

    let tabell = document.getElementById("Cart");
    let rad = tabell.insertRow();
    let cell1 = rad.insertCell();
    cell1.innerHTML = namn;
    let cell2 = rad.insertCell();
    cell2.innerHTML = pris + " SEK";

    total += pris;
    counter++;
    
    updateElements();
    plus1();
}

function updateElements(){
    document.getElementById("totalsum").innerHTML = "Total: " + total + " SEK";
    document.getElementById("counter").innerHTML = counter;
}

function plus1(){
    let x = document.getElementById("counter");
    if(counter >= 1){
        x.style.display = "block";
    }
    else if( counter == 0){
        x.style.display = "none";
    }
    
}