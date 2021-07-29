import { imgStyler } from './imageStyler';
import { skillsList } from './skillsList';
import { projectList } from './projectsList';

document.addEventListener('DOMContentLoaded', function (event) {
    skillsList();
    imgStyler();
    projectList();
});
