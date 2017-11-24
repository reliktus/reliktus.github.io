function mobileNavbarCollpase() {
    $(".navbar-nav li a").click(function () {
        if (!$(this).parent().hasClass('dropdown'))
            $(".navbar-collapse").collapse('hide');
    });
}
function imgStyler() {
    $(".projectImg").addClass("img-responsive img-rounded ");
    $(".follow").addClass("btn btn-default btn-lg").attr('target', '_blank');
}
function smoothScroll() {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;

            }
        }
    });
}
function skillsList() {
    let about = '<p><h5 style="font-size: 16px; line-height: 22px;">' +
        'Software Engineer with a passion for understanding things at a fundamental level.<br>' +
        'Fascinated about Front-end development and JavaScript frameworks.</h5></p><br>';
    let skillsArr = [
        "HTML5 + CSS 3", "JavaScript ES6", "jQuery", 'TypeScript', 'Angular 4 + CLI', "Sass / SCSS", "Webpack", "RWD: Bootstrap", "NPM", "PHP", "GIT", 'XAMPP', "Batch", "Core JAVA", "IDE: Intellij + Eclipse", "Active Directory", "VBA"

    ];
    let me = '<div class="col-centered"><img class="img-thumbnail img-responsive " id="myFace" width="200px" src="img/me.jpg"></div>';
    let skillsHTML = "<div style=\'display: inline-block\' >let skillsArray = [ </div> ";
    for (let i = 0; i < skillsArr.length; i++) {
        skillsHTML += "<div style=\'display: inline-block\'>\"" + skillsArr[i];
        if (i < skillsArr.length - 1) {
            skillsHTML += "</b>\",</div> ";
        } else {
            skillsHTML += "\" </b>];</div>"
        }
    }


    document.write(me + about + skillsHTML);
}
function projectList() {
    let projectHTML = "";
    let x;
    let projectsData = {
        "xero_lublin": {
            pname: "Stamps SPA for Xero-Lublin",
            tec: "[ JS + jQuery + php ]",
            plink: "http://xerolublin.pl/stamps/",
            pimg: "img/stamps_order2.png"
        },
        "chodzki": {
            pname: "Webpage for CMCHODZKI",
            tec: "[ CMS + GFX ]",
            plink: "http://cmchodzki.pl",
            pimg: "img/chodzki.png"
        },
        "weather": {
            pname: "Simple weather app",
            tec: "[ JS + jQuery + API + Bootstrap ]",
            plink: "http://codepen.io/relikt/full/XMxGoW/",
            pimg: "img/weather_app_thumb.png"
        },
        "fotobudka": {
            pname: "Page for ILoveFotobudka.pl",
            tec: "[ PHP, RWD, GFX ]",
            plink: "http://ilovefotobudka.pl/",
            pimg: "img/foto_budka.png"
        },
        "wiki": {
            pname: "Wikipedia search",
            tec: "[ JS + jQuery + API: ]",
            plink: "http://codepen.io/relikt/full/NpoaaQ/",
            pimg: "img/wiki_codepen.png"
        },
        "Random quote": {
            pname: "Random quote",
            tec: " [ JS + jQuery +API ]",
            plink: "http://codepen.io/relikt/full/xqjQOL/",
            pimg: "img/quote_app.png"
        },
        "Twitch": {
            pname: "Twitch preview",
            tec: "[ JS + jQuery + API + Bootstrap ]",
            plink: "http://codepen.io/relikt/full/dWawzm/",
            pimg: "img/twitch_app.png"
        },
        "Algorithm scripting": {
            pname: "Algorithms",
            tec: "[ JS + jQuery ]",
            plink: "https://codepen.io/relikt/full/BZQKyJ/",
            pimg: "img/algorithms.png"
        },
        "Calculator": {
            pname: "Calculator",
            tec: "[ JS + jQuery ]",
            plink: "https://codepen.io/relikt/full/qjKJbQ/",
            pimg: "img/calc.png"
        }
    };
    for (x in projectsData) {
        if (projectsData.hasOwnProperty(x)) {
            projectHTML +=
                "<div class=\"wow zoomIn col-sm-4 col-centered projectContainer\" data-wow-delay=\"0.3s\">" +
                projectsData[x].pname +
                "<p>" + projectsData[x].tec + "</p>" +
                "<a href=\"" + projectsData[x].plink + "\" target=\"_blank\">" +
                "<img class=\"projectImg\" src=\"" + projectsData[x].pimg + "\" alt=\"" + projectsData[x].pname + "\" ></a>" +
                "</div>";
        }
    }
    document.write(projectHTML)
}
function followList() {
    let followHTML = "";
    let x;
    let followData = {
        "1": {
            fname: "Linkedin",
            flink: "https://www.linkedin.com/in/rafa%C5%82-jaworski-528437a1/",
            iclass: "fa-linkedin-square"
        },
        "2": {fname: "Facebook", flink: "https://www.facebook.com/reliktus", iclass: "fa-facebook-square"},
        "3": {fname: "GitHub", flink: "https://github.com/reliktus", iclass: "fa-github-square"},
        "4": {fname: "Codepen", flink: "http://codepen.io/relikt/", iclass: "fa-codepen"},
        "5": {fname: mFull, flink: mFullLink, iclass: "fa-envelope"}
    };
    for (x in followData) {
        if (followData.hasOwnProperty(x)) {
            followHTML +=
                "<a href=\"" + followData[x].flink + "\" class=\"follow wow zoomIn\" data-wow-delay=\"0.3s\">" +
                "<i class=\"fa " + followData[x].iclass + "\"></i> " + followData[x].fname + "</a>"
        }
    }
    document.write(followHTML)
}
function linkList() {
    let linkHTML = "";
    let x;
    let linkData = {
        "0": {lname: "Dev.js", laddr: "http://devjs.org/"},
        "1": {lname: "Stackoverflow", laddr: "http://stackoverflow.com/"},
        "3": {lname: "Font Awesome", laddr: "http://fontawesome.io/"},
        "4": {lname: "GitHub", laddr: "https://github.com/"},
        "5": {lname: "Animate.css", laddr: "https://daneden.github.io/animate.css/ "},
        "6": {lname: "JSFiddle", laddr: "https://jsfiddle.net/"},
        "7": {lname: "CODEPEN", laddr: "http://codepen.io/"},
        "8": {lname: "4programmers.NET", laddr: "https://4programmers.net/"},
        "9": {lname: "Norton Power Eraser", laddr: "https://security.symantec.com/nbrt/npe.aspx"},
        "10": {lname: "Babel.js", laddr: "https://babeljs.io/"},
        "11": {lname: "Node.js", laddr: "https://nodejs.org"}
    };
    for (x in linkData) {
        if (linkData.hasOwnProperty(x)) {
            linkHTML +=
                "<div style=\"display:ruby \" class=\"wow zoomIn\" data-wow-delay=\"0.3s\">" +
                "<a href=\"" + linkData[x].laddr + "\" class=\"linkItem \">" + linkData[x].lname + "</a>" +
                "</div>"

        }
    }
    document.write(linkHTML)
}
let mUser = 'jaworski.inf';
let mDomain = 'gmail.com';
let mH1 = "mailto:";
let mH2 = "@";
let mFull = mUser + mH2 + mDomain;
let mFullLink = mH1 + mFull;