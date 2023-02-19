const container = document.querySelector('.container');
const toBlogButton = document.querySelector('.blogBtn');
const toAboutButton = document.querySelector('.aboutBtn');
const toProjButton = document.querySelector('.projBtn')
const toHomeBtns = document.querySelectorAll('.toHome');


window.addEventListener("load", () => {
  loadHome();
  requestProfile();
  // document.getElementById('tabledOutput').innerHTML = repos;
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

  for (i = 0; i < repoCount; i++) {
    repo = responseObj[i];

    repoName = repo.name;
    repoSize = repo.size;
    if (repo.stargazers_count >= 1) {
      repoDict.push(repo);
    }
  }

  // Sort based on star count then size of repo
  repoDict.sort((a,b) => parseFloat(b.stargazers_count) - parseFloat(a.stargazers_count)) || parseFloat(b.size) - parseFloat(a.size);
  console.log(typeof(repoDict));
  this.tabled = tablefyRepo(repoDict);
}

/**
 * Turn returned request from github of repo information into a table string and append to Document.
 * @param {*} repoDict 
 * @returns 
 */
function tablefyRepo(repoDict) {
  table = []
  var formattedString = "<table><tr><th>Name</th><th>Star Count</th><th>Size of Repo (KB)</th></tr>";
  repoDict.forEach(x => {
    formattedString += `
    <tr>
      <td>
        <a class=\"underline\" href='https://github.com/aidanMellin/${x.name}'> ${x.name} </a>
      </td>
      <td>
        ${x.stargazers_count}
      </td>
      <td>
        ${x.size}
      </td>
    </tr>
    `});
  formattedString += "</table>"
  document.getElementById("githubTable").innerHTML = formattedString;
  return formattedString;
}

/**
 * Head back home
 */
function toHome() {
  container.classList.remove('toProj', 'toBlog', 'toAbout');
}

function loadHome() {
  window.location.href = 'index.html#splashHome'
}

toBlogButton.addEventListener('click', () => {
  container.classList.toggle('toBlog');
})

toAboutButton.addEventListener('click', () => {
  container.classList.toggle('toAbout');
})

toProjButton.addEventListener('click', () => {
  container.classList.toggle('toProj');
})

toHomeBtns.forEach(element => {
  element.addEventListener('click', toHome)
})