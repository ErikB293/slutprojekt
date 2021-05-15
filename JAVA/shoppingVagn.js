let total = 0;

function rensa() {
    let tabell = document.getElementById("vagn");
    tabell.innerHTML = "<tr><td>Name</td><td>Pris</td></tr>";
    total = 0;
    updateElements(total);

}
function betala() {
    if (total != 0) {
        rensa();
        alert('Allt är betalat');
    }
}

function vagnAktiv() {

    let x = document.getElementById("informationShoppingVagn");
    console.log("Hello sucker")
    if (x.style.display != "block") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function add2Cart(obj) {


    let namn = obj.innerHTML;
    let pris = parseInt(obj.value);

    console.log(namn + " kostar " + pris + " SEK");

    let tabell = document.getElementById("vagn");
    let rad = tabell.insertRow();
    let cell1 = rad.insertCell();
    cell1.innerHTML = namn;
    let cell2 = rad.insertCell();
    cell2.innerHTML = pris + " SEK";

    total += pris;

    updateElements(total);


    console.log(obj);
    console.log(obj.value);
    console.log(obj.innerHTML);
}

function updateElements(total) {
    document.getElementById("Summa").innerHTML = "Total: " + total + " SEK";
}