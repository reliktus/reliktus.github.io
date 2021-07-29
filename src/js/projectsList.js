export function projectList() {
    const target = document.querySelector('.js-projects-list');
    let projectHTML = "";
    let x;
    const imgPath = '../assets/img/';
    let projectsData = {
        "xero_lublin": {
            pname: "Stamps SPA for Xero-Lublin",
            tec: "[ JS + jQuery + php ]",
            plink: "http://xerolublin.pl/stamps/",
            pimg: `${imgPath}stamps_order2.png`
        },
        "chodzki": {
            pname: "Webpage for CMCHODZKI",
            tec: "[ CMS + GFX ]",
            plink: "http://cmchodzki.pl",
            pimg: `${imgPath}chodzki.png`
        },
        "weather": {
            pname: "Simple weather app",
            tec: "[ JS + jQuery + API + Bootstrap ]",
            plink: "http://codepen.io/relikt/full/XMxGoW/",
            pimg: `${imgPath}weather_app_thumb.png`
        },
        "fotobudka": {
            pname: "Page for ILoveFotobudka.pl",
            tec: "[ PHP, RWD, GFX ]",
            plink: "http://ilovefotobudka.pl/",
            pimg: `${imgPath}foto_budka.png`
        },
        "wiki": {
            pname: "Wikipedia search",
            tec: "[ JS + jQuery + API: ]",
            plink: "http://codepen.io/relikt/full/NpoaaQ/",
            pimg: `${imgPath}wiki_codepen.png`
        },
        "Random quote": {
            pname: "Random quote",
            tec: " [ JS + jQuery + API + Bootstrap ]",
            plink: "http://codepen.io/relikt/full/xqjQOL/",
            pimg: `${imgPath}quote_app.png`
        },
        "Twitch": {
            pname: "Twitch preview",
            tec: "[ JS + jQuery + API + Bootstrap ]",
            plink: "http://codepen.io/relikt/full/dWawzm/",
            pimg: `${imgPath}twitch_app.png`
        },
        "Algorithm scripting": {
            pname: "Algorithms",
            tec: "[ JS + jQuery ]",
            plink: "https://codepen.io/relikt/full/BZQKyJ/",
            pimg: `${imgPath}algorithms.png`
        },
        "Calculator": {
            pname: "Calculator",
            tec: "[ JS + jQuery ]",
            plink: "https://codepen.io/relikt/full/qjKJbQ/",
            pimg: `${imgPath}calc.png`
        }
    };
    for (x in projectsData) {
        if (projectsData.hasOwnProperty(x)) {
            projectHTML +=
                "<div class=\"wow zoomIn col-sm-4 col-centered projectContainer\" data-wow-delay=\"0.3s\">" +
                projectsData[x].pname +
                "<p>" + projectsData[x].tec + "</p>" +
                "<a href=\"" + projectsData[x].plink + "\" target=\"_blank\">" +
                "<img loading=lazy class=\"projectImg\" src=\"" + projectsData[x].pimg + "\" alt=\"" + projectsData[x].pname + "\" ></a>" +
                "</div>";
        }
    }
    target.innerHTML = projectHTML;
}