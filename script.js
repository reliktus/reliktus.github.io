// Mail script variables
var mail_user = 'jaworski.inf';
var domain ='gmail.com';
var mScript1 ="mailto:";
var mScript2 ="@";

//Projects Image and follow Styler Query
function imgStyler() {
    $(".projectImg").addClass("img-responsive img-rounded ");
    $(".follow").addClass("btn btn-default btn-lg").attr('target','_blank');
}

// Smooth scrool to anchor query
function smoothScroll() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
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

// Skills list
function skillsList() {
    var skillsArr = ["HTML","CSS","JavaScript","jQuery","JSON","API","Bootstrap","Batch","GIT","Intellij","Eclipse",
        "Active Directory","IBM iSeries","Thin Compute","VBA","RDP","Nagios","IT Support","Data Restoration","VNC","DLNA"];
    var skillsHTML="";
    for (var i = 0; i < skillsArr.length; i++) {
        skillsHTML += "<div style=\"display:inline-block;\"><b>{</b> " + skillsArr[i] + " <b>}</b></div>";
        if (i < skillsArr.length - 1) {
            skillsHTML += " / "
        }
    }
    document.write(skillsHTML);
}