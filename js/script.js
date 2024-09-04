const themeToggleBtn = document.querySelector('.switch-mode');

let flag = true;

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('discord');
    flag = !flag;
    if (flag == false) {
        document.getElementById("title").innerHTML = "Discord";
        document.getElementById("about-me").style.backgroundColor = "black";

        document.getElementById("name-1").innerHTML = "Decode - Paramore";
        document.getElementById("name-2").innerHTML = "Duvet - Bôa";
        document.getElementById("name-3").innerHTML = "Hang On Me - St. Vincent";
        document.getElementById("name-4").innerHTML = "Kathleen - Catfish And The Bottlemen";
        document.getElementById("name-5").innerHTML = "&ltmaybe it's my fault&gt - WILLOW";
        document.getElementById("name-6").innerHTML = "Raison Detre - Eve";
        document.getElementById("name-7").innerHTML = "Thnks fr th Mmrs - Fall Out Boy";
        document.getElementById("name-8").innerHTML = "Who's Gonna Save U Now? - Rina Sawayama";        
    } else {
        document.getElementById("title").innerHTML = "Harmony";

        document.getElementById("name-1").innerHTML = "Evergreen - CIDER GIRL";
        document.getElementById("name-2").innerHTML = "Kesshou - Ryokuoushoku Shakai";
        document.getElementById("name-3").innerHTML = "Tek it - Cafuné";
        document.getElementById("name-4").innerHTML = "Change your mind - The Killers";
        document.getElementById("name-5").innerHTML = "Jet Lag - Simple Plan ft Natasha Bedingfield";
        document.getElementById("name-6").innerHTML = "Koshaberi Biyori - FantasticYouth";
        document.getElementById("name-7").innerHTML = "Koi - Gen Hoshino";
        document.getElementById("name-8").innerHTML = "Talk - Beabadoobee";
    }
});