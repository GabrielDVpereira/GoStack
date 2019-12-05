const textInput = document.querySelector("input");
const subButton = document.querySelector("button");
const repoList = document.querySelector("ul");

subButton.onclick = searchRepoByName;

async function searchRepoByName() {
  clearRepoList();
  try {
    const repo = textInput.value;
    loadingMessage();

    const reposResponse = await fetch(
      `https://api.github.com/users/${repo}/repos`
    );
    if (reposResponse.ok) {
      const repos = await reposResponse.json();
      clearRepoList();
      createList(repos);
      return;
    } else {
      throw reposResponse;
    }
  } catch (error) {
    if (error.status === 404) errorMessage();
  }
}

function clearRepoList() {
  repoList.innerHTML = "";
}

function loadingMessage() {
  const loadding = document.createElement("li");
  const loaddingText = document.createTextNode("loading");
  loadding.appendChild(loaddingText);
  repoList.appendChild(loadding);
}

function createList(repos) {
  repos.forEach(repo => {
    const li = document.createElement("li");
    const repoName = document.createTextNode(repo.name);
    li.appendChild(repoName);
    repoList.appendChild(li);
  });
}

function errorMessage() {
  clearRepoList();
  const errorLi = document.createElement("li");
  const errorMessage = document.createTextNode("This repo was not found, dear");
  errorLi.appendChild(errorMessage);
  repoList.appendChild(errorLi);
}
