window.onload = function () {


    document.querySelector("#carta").addEventListener("click", () => {
         changeClass(random());
    });

}

function changeClass(poke) {
    let a = poke;
    switch (a) {
        case 1:
            document.getElementById("carta").className = "gyarados";
            break;
        case 2:
            document.getElementById("carta").className = "mew";
            break;
        case 3:
            document.getElementById("carta").className = "charizard";
            break;
        case 4:
            document.getElementById("carta").className = "pika";
            break;
            
        default:
            document.getElementById("carta").className = "pika";
            break;


    }

}

function random() {

    let rand = Math.floor(Math.random() * (4 - 1)) + 1;

    return rand;
}