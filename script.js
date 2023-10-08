window.addEventListener('load', (event) => {

    const sections = Array.from(document.getElementsByTagName('section'));
    const nav = document.getElementById('nav');
    let navLinks = [];

    // Create nav links
    sections.forEach((section, index) => {
        const a = document.createElement('a');
        a.textContent = section.id;
        a.classList.add('nav-link');
        a.href = '#' + section.id;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
        nav.appendChild(a);
        navLinks.push(a);

        // Initially, set all links inactive except the first one
        if (index === 0) {
            a.classList.add('active');
        } else {
            a.classList.remove('active');
        }
    });

    requestProfile();

    // Set up intersection observer
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // If the section is in the viewport, set the corresponding nav link as active
                let activeLink = navLinks.find(link => link.textContent === entry.target.id);
                activeLink.classList.add('active');
            } else {
                // If the section is not in the viewport, set the corresponding nav link as inactive
                let inactiveLink = navLinks.find(link => link.textContent === entry.target.id);
                inactiveLink.classList.remove('active');
            }
        });
    }, { threshold: 0.5 });

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
});

/**
 * Use the Github API to get my repos and information.
 * @returns 
 */
function requestProfile() {
    var request = new XMLHttpRequest();
    var tabled;
    request.onload = getRepos;
    request.open('get', 'https://api.github.com/users/aidanMellin/repos', true);
    request.send();
    tabled = request;
    return tabled;
}

/**
* Take the github request and send the individuals into a table.
*/
function getRepos() {
    var responseObj = JSON.parse(this.responseText);
    var repoCount = responseObj.length;
    var i;
    var repo;
    var repoName;
    var repoSize;
    var repoDict = []
    console.log(responseObj);

    for (i = 0; i < repoCount; i++) {
        repo = responseObj[i];

        if (repo.stargazers_count >= 1) {
            repoDict.push(repo);
        }
    }

    // Sort based on star count then size of repo
    repoDict.sort((a, b) => parseFloat(b.stargazers_count) - parseFloat(a.stargazers_count)) || parseFloat(b.size) - parseFloat(a.size);

    //iterate through repoDict and remove all repos that are not starred
    repoDict = repoDict.filter(repo => repo.stargazers_count >= 1);

    this.tabled = tablefyRepo(repoDict);
}

/**
 * Turn returned request from github of repo information into a table string and append to Document.
 * @param {*} repoDict 
 * @returns 
 */
function tablefyRepo(repoDict) {
    table = []
    var formattedString = "<table style='padding-left: 125px;'><tr><th>Name</th><th>Description</th></tr>";
    repoDict.forEach(x => {
        formattedString += `
        <tr>
            <td>
            <a class=\"underline\" href='https://github.com/aidanMellin/${x.name}' target='_blank'> ${x.name} </a>
            </td>
        <td>
            ${x.description}
        </td>
        </tr>
        `});
    formattedString += "</table>"
    document.getElementById("githubTable").innerHTML = formattedString;
    return formattedString;
}

