const themeToggleBtn = document.querySelector('.switch-mode');

let flag = true;
let intervalRet;

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('discord');
    clearInterval(intervalRet);

    flag = !flag;
    if (flag == false) {
        document.getElementById("title").innerHTML = "Discord";
        document.getElementById("about-me").style.backgroundColor = "black";
        document.getElementById("emoji-line").innerHTML = "👹👹👹👹👹👹👹👹👹👹👹👹👹👹👹👹👹👹👹";

        document.getElementById("name-1").innerHTML = "Decode - Paramore";
        document.getElementById("name-2").innerHTML = "Duvet - Bôa";
        document.getElementById("name-3").innerHTML = "Who's Gonna Save U Now? - Rina Sawayama";
        document.getElementById("name-4").innerHTML = "Kathleen - Catfish And The Bottlemen";
        document.getElementById("name-5").innerHTML = "Hang On Me - St. Vincent";
        document.getElementById("name-6").innerHTML = "Raison Detre - Eve";
        document.getElementById("name-7").innerHTML = "Thnks fr th Mmrs - Fall Out Boy";
        document.getElementById("name-8").innerHTML = "&ltmaybe it's my fault&gt - WILLOW";
        
        
        function randomiseOffset() {
            const panels = document.querySelectorAll(".panel");
            panels.forEach((panel) => {
                let xOffset = (Math.random() - Math.random()) * 40;
                let yOffset = (Math.random() - Math.random()) * 40;
                panel.style.setProperty("--x-offset", xOffset + "px");
                panel.style.setProperty("--y-offset", yOffset + "px");
            });

            const navs = document.querySelectorAll(".nav-links");
            navs.forEach((nav) => {
                let xOffset = (Math.random() - Math.random()) * 20;
                let yOffset = (Math.random() - Math.random()) * 20;
                nav.style.setProperty("--x-offset", xOffset + "px");
                nav.style.setProperty("--y-offset", yOffset + "px");
            });
        }
        
        intervalRet = setInterval(randomiseOffset, 80);
        
    } else {
        document.getElementById("title").innerHTML = "Harmony";
        document.getElementById("emoji-line").innerHTML = "🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓";

        document.getElementById("name-1").innerHTML = "Evergreen - CIDER GIRL";
        document.getElementById("name-2").innerHTML = "Kesshou - Ryokuoushoku Shakai";
        document.getElementById("name-3").innerHTML = "Tek it - Cafuné";
        document.getElementById("name-4").innerHTML = "Change Your Mind - The Killers";
        document.getElementById("name-5").innerHTML = "Jet Lag - Simple Plan ft Natasha Bedingfield";
        document.getElementById("name-6").innerHTML = "Koshaberi Biyori - FantasticYouth";
        document.getElementById("name-7").innerHTML = "Koi - Gen Hoshino";
        document.getElementById("name-8").innerHTML = "Talk - Beabadoobee";
        
        const panels = document.querySelectorAll(".panel");
        panels.forEach((panel) => {
            panel.style.setProperty("--x-offset", "0px");
            panel.style.setProperty("--y-offset", "0px");
        });

        const navs = document.querySelectorAll(".nav-links");
        navs.forEach((nav) => {
            nav.style.setProperty("--x-offset", "0px");
            nav.style.setProperty("--y-offset", "0px");
        });
    }
});

