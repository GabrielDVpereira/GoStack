import api from "./api";

class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.querySelector("#repo-form");
    this.repoList = document.querySelector("#repo-list");

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  async addRepository(event) {
    event.preventDefault();
    try {
      const loadingMessage = document.createTextNode("loading...");
      this.repoList.appendChild(loadingMessage);

      let inputEl = document.querySelector("input[name=repository]");
      let repoName = inputEl.value;

      if (repoName.length === 0) throw { message: " type in the repo's name" };

      const response = await this.searchRepo(repoName);

      const {
        name,
        description,
        html_url,
        owner: { avatar_url }
      } = response.data;

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url
      });

      inputEl.value = "";
      this.render();
    } catch (error) {
      alert(error.message || "Repository not found...");
      this.repoList.innerHTML = "";
    }
  }

  async searchRepo(repoName) {
    try {
      const repoFound = await api.get(`/repos/${repoName}`);

      if (repoFound) return repoFound;
    } catch (error) {
      console.warn(error);
    }
  }

  render() {
    this.repoList.innerHTML = "";

    this.repositories.forEach(repo => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);

      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement("p");
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("href", repo.html_url);
      linkEl.setAttribute("target", "_blank");
      linkEl.appendChild(document.createTextNode("acess"));

      let liEl = document.createElement("li");
      liEl.appendChild(imgEl);
      liEl.appendChild(titleEl);
      liEl.appendChild(descriptionEl);
      liEl.appendChild(linkEl);

      this.repoList.appendChild(liEl);
    });
  }
}

new App();
