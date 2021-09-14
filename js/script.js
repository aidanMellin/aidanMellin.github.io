const container = document.querySelector('.container');
const toBlogButton = document.querySelector('.blogBtn');
const toAboutButton = document.querySelector('.aboutBtn');
const toProjButton = document.querySelector('.projBtn')
const toHomeBtns = document.querySelectorAll('.toHome');

window.addEventListener("load", () => {
  loadHome();
  requestProfile();

  // document.getElementById("ret").innerHTML=

});

function requestProfile() {
  var request = new XMLHttpRequest();
  request.onload = getRepos;
  request.open('get', 'https://api.github.com/users/aidanMellin/repos', true)
  request.send()
}

function getRepos() {
  var responseObj = JSON.parse(this.responseText);
  var repoCount = responseObj.length;
  var i;
  var repo;
  var repoName;
  var repoSize;
  var repoDict = {}

  for (i = 0; i < repoCount; i++) {
    repo = responseObj[i];

    repoName = repo.name;
    repoSize = repo.size;
    if (repo.stargazers_count >= 1) {
      repoDict[repoName] = repo;
    }
  }

  var tabled = tablefyRepo(repoDict);
  console.log(tabled);
  return tabled;
}

function tablefyRepo(repoDict) {
  table = []
  var formattedString = "<table><tr><th>Name</th><th>Star Count</th><th>Size of Repo</th></tr>";
  Object.entries(repoDict).forEach(([key, value]) => {
    table.push([key, value.stargazers_count, value.size])
  });

  var i, j;
  for (i = 0; i < table.length; i++) {
    formattedString += "<tr>";
    for (j = 0; j < table[i].length; j++) {
      formattedString += "<td>";
      if (j == 0) {
        formattedString += "<a href='https://github.com/aidanMellin/" + table[i][j] + "'>";
        formattedString += table[i][j];
        formattedString += "</a>";
      }
      else
        formattedString += table[i][j];
      formattedString += "</td>";
    }
    formattedString += "</tr>";
  }
  formattedString += "</table>"
  return formattedString;
}

function toHome() {
  container.classList.remove('toProj', 'toBlog', 'toAbout');
  console.log("toHome")
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