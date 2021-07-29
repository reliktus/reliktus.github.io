export function skillsList() {
    let target = document.querySelector('.js-skills-list');
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
    target ? (target.innerHTML = me + about + skillsHTML) : console.log(' not found in dom');
}