function mobileNavbarCollpase() {
    $(".navbar-nav li a").click(function () {
        if (!$(this).parent().hasClass('dropdown'))
            $(".navbar-collapse").collapse('hide');
    });
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