const themeToggleBtn = document.querySelector('.switch-mode');

// Tracks which mode the website is on - true=harmony, false=discord
let flag = true;

// Stores the return value for setInterval
let intervalRet;

// When the button is pressed, switch modes
themeToggleBtn.addEventListener('click', () => {
    // Adds/removes the discord class onto the body which overwrites the variables defined at the start
    document.body.classList.toggle('discord');

    // Stops setInterval
    clearInterval(intervalRet);

    // Switches flag
    flag = !flag;

    // Discord mode
    if (flag == false) {
        // Change the title and emoji-line
        document.getElementById("title").innerHTML = "Discord";
        document.getElementById("emoji-line").innerHTML = "👹👹👹👹👹👹👹👹👹👹👹👹👹👹👹👹👹👹👹";

        // Change the text for the songs
        document.getElementById("name-1").innerHTML = "Decode - Paramore";
        document.getElementById("name-2").innerHTML = "Duvet - Bôa";
        document.getElementById("name-3").innerHTML = "Who's Gonna Save U Now? - Rina Sawayama";
        document.getElementById("name-4").innerHTML = "Kathleen - Catfish And The Bottlemen";
        document.getElementById("name-5").innerHTML = "Hang On Me - St. Vincent";
        document.getElementById("name-6").innerHTML = "Raison Detre - Eve";
        document.getElementById("name-7").innerHTML = "Thnks fr th Mmrs - Fall Out Boy";
        document.getElementById("name-8").innerHTML = "&ltmaybe it's my fault&gt - WILLOW";
        
        // Changes the x-offset and y-offset variables for the panels and 
        // navigation bar links which shifts the element
        function randomiseOffset() {
            const panels = document.querySelectorAll(".panel");
            panels.forEach((panel) => {
                // Randomises a random value between -40 and 40
                let xOffset = (Math.random() - Math.random()) * 40;
                let yOffset = (Math.random() - Math.random()) * 40;
                panel.style.setProperty("--x-offset", xOffset + "px");
                panel.style.setProperty("--y-offset", yOffset + "px");
            });

            const navs = document.querySelectorAll(".nav-link");
            navs.forEach((nav) => {
                // Randomises a random value between -20 and 20
                let xOffset = (Math.random() - Math.random()) * 20;
                let yOffset = (Math.random() - Math.random()) * 20;
                nav.style.setProperty("--x-offset", xOffset + "px");
                nav.style.setProperty("--y-offset", yOffset + "px");
            });
        }
        
        // Repeats the function every 80ms, creating a shaking effect when hovered
        intervalRet = setInterval(randomiseOffset, 80);
        
    } else {
        // Resets the title and emoji-line
        document.getElementById("title").innerHTML = "Harmony";
        document.getElementById("emoji-line").innerHTML = "🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓";

        // Resets the song titles
        document.getElementById("name-1").innerHTML = "Evergreen - CIDER GIRL";
        document.getElementById("name-2").innerHTML = "Kesshou - Ryokuoushoku Shakai";
        document.getElementById("name-3").innerHTML = "Tek it - Cafuné";
        document.getElementById("name-4").innerHTML = "Change Your Mind - The Killers";
        document.getElementById("name-5").innerHTML = "Jet Lag - Simple Plan ft Natasha Bedingfield";
        document.getElementById("name-6").innerHTML = "Koshaberi Biyori - FantasticYouth";
        document.getElementById("name-7").innerHTML = "Koi - Gen Hoshino";
        document.getElementById("name-8").innerHTML = "Talk - Beabadoobee";
        
        // Resets offsets for the shaking effect for panels
        const panels = document.querySelectorAll(".panel");
        panels.forEach((panel) => {
            panel.style.setProperty("--x-offset", "0px");
            panel.style.setProperty("--y-offset", "0px");
        });

        // Resets offsets for the shaking effect for navigation bar links
        const navs = document.querySelectorAll(".nav-link");
        navs.forEach((nav) => {
            nav.style.setProperty("--x-offset", "0px");
            nav.style.setProperty("--y-offset", "0px");
        });
    }
});

