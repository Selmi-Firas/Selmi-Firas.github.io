/*
    This script handles the content assignment of project data
*/

const ProjectNames = 
[
    "soc_lab",
    "ztna",
    "siem",
    "sdn_quantum",
    "selks_ids",
    "ansible_deploy",
    "snort_pfsense"
]

let ProjectText = [];

let projTextArea = document.getElementById("project_data_area");

/* Adds the included text data into the array of text. */
for(let i = 0; i < ProjectNames.length; ++i)
{
    ProjectText.push("");
    fetch("./Data/pages/projects/" + ProjectNames[i] + ".html")
    .then( r => r.text() )
    .then( t => ProjectText[i] = t )
}

let bLock = false;
let prevBtnIndex = -1; 

function LoadProject(button, btnIndex)
{
    var activeButtons = document.getElementsByClassName("active-proj");

    if(button.classList.contains("active-proj")) /* clicking the already-active button — close it */
    {
        button.classList.remove("active-proj");
        projTextArea.innerHTML = "";
        projTextArea.style.opacity = 0;
    }
    else
    {
        /* Deactivate any currently active button */
        if(activeButtons.length != 0)
        {
            activeButtons[0].classList.remove("active-proj");
            projTextArea.innerHTML = "";
            projTextArea.style.opacity = 0;
        }

        /* Activate the clicked button and show its content */
        button.classList.add("active-proj");
        projTextArea.innerHTML = ProjectText[btnIndex];
        projTextArea.style.opacity = 1;
    }
}
