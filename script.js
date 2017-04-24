function mobileNavbarCollpase() {
    $(".navbar-nav li a").click(function() {
        if (!$(this).parent().hasClass('dropdown'))
            $(".navbar-collapse").collapse('hide');
    });
}
function imgStyler() {
    $(".projectImg").addClass("img-responsive img-rounded ");
    $(".follow").addClass("btn btn-default btn-lg").attr('target','_blank');
}
function smoothScroll() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
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
    var skillsArr = [
        "HTML 5","CSS 3","JavaScript ES6","JQuery","JSON","API","Bootstrap","Batch","GIT","Intellij","Eclipse",
        "Active Directory","IBM iSeries","Thin Compute","VBA","RDP","Nagios","IT Support","Data Restoration","VNC","DLNA"
    ];
    var skillsHTML ="";
    for (var i = 0; i < skillsArr.length; i++) {
        skillsHTML += "<div style=\"display:inline-block;\"><b>{</b> " + skillsArr[i] + " <b>}</b>";
        if (i < skillsArr.length -1) {
            skillsHTML += " /</div> ";
        } else { skillsHTML += "</div>"; }
    }
    document.write(skillsHTML);
}
function projectList() {
    var projectHTML ="";
    var x;
    var projectsData ={
        "weather":{pname:"Simple weather App", plink:"http://codepen.io/relikt/full/XMxGoW/", pimg:"img/weather_app_thumb.png"},
        "wiki":{pname:"Wikipedia search", plink:"http://codepen.io/relikt/full/NpoaaQ/", pimg:"img/wiki_codepen.png"},
        "Random quote":{pname:"Random quote", plink:"http://codepen.io/relikt/full/xqjQOL/", pimg:"img/quote_app.png"}
    };
    for (x in projectsData) {
        if (projectsData.hasOwnProperty(x)) {
            projectHTML +=
                "<div class=\"col-sm-4 \">" +
                    "<p>" + projectsData[x].pname + "</p>" +
                    "<a href=\"" + projectsData[x].plink + "\" target=\"_blank\">" +
                    "<img class=\"projectImg\" src=\"" + projectsData[x].pimg + "\" alt=\"" + projectsData[x].pname + "\" ></a>" +
                "</div>";
        }
    }
    document.write(projectHTML)
}
function followList() {
    var followHTML ="";
    var x;
    var followData ={
        "1":{fname:"Linkedin", flink:"https://www.linkedin.com/in/rafa%C5%82-jaworski-528437a1/", iclass:"fa-linkedin-square"},
        "2":{fname:"Facebook", flink:"https://www.facebook.com/reliktus", iclass:"fa-facebook-square"},
        "3":{fname:"GitHub", flink:"https://github.com/reliktus", iclass:"fa-github-square"},
        "4":{fname:"Codepen", flink:"http://codepen.io/relikt/", iclass:"fa-codepen"},
        "5":{fname:mFull, flink:mFullLink, iclass:"fa-envelope"}
    };
    for (x in followData) {
        if (followData.hasOwnProperty(x)) {
            followHTML +=
                "<a href=\"" + followData[x].flink + "\" class=\"follow\">" +
                "<i class=\"fa " + followData[x].iclass + "\"></i> " + followData[x].fname + "</a>"

        }
    }
    document.write(followHTML)
}
function linkList() {
    var linkHTML ="";
    var x;
    var linkData ={
        "1":{lname:"Stackoverflow", laddr:"http://stackoverflow.com/"},
        "2":{lname:"w3schools", laddr:"https://www.w3schools.com/"},
        "3":{lname:"Font Awesome", laddr:"http://fontawesome.io/"},
        "4":{lname:"GitHub", laddr:"https://github.com/"},
        "5":{lname:"Animate.css", laddr:"https://daneden.github.io/animate.css/ "},
        "6":{lname:"JSFiddle", laddr:"https://jsfiddle.net/"},
        "7":{lname:"CODEPEN", laddr:"http://codepen.io/"},
        "8":{lname:"4programmers.NET", laddr:"https://4programmers.net/}"}
    };
    for (x in linkData) {
        if (linkData.hasOwnProperty(x)) {
            linkHTML +=
                "<div style=\"display:ruby \">" +
                "<a href=\"" + linkData[x].laddr + "\" class=\"linkItem \">" + linkData[x].lname + "</a>" +
                "</div>"

        }
    }
    document.write(linkHTML)
}
var mUser = 'jaworski.inf';
var mDomain ='gmail.com';
var mH1 ="mailto:";
var mH2 ="@";
var mFull = mUser + mH2 + mDomain;
var mFullLink = mH1 + mFull;