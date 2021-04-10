class Facts {
  constructor({ source, status, text, type, id }) {
    this.source = source;
    (this.status = status), (this.text = text);
    this.type = type;
  }

  createRootDomElement() {
    let createRootElement = document.createElement("div");
    createRootElement.setAttribute("id", "root");

    document.body.appendChild(createRootElement);
    this.createContainer();
  }

  createContainer() {
    let grabRoot = document.getElementById("root");

    let createContainer = document.createElement("div");
    createContainer.classList.add("cats-facts__facts-container");
    grabRoot.appendChild(createContainer);
    this.putDataIntoDom();
  }

  putDataIntoDom() {
    let grabRoot = document.getElementById("root");
    const factsDiv = document.createElement("div");
    factsDiv.setAttribute("id", this.id);
    const factsText = document.createElement("span");
    factsText.textContent = this.text;
    factsDiv.appendChild(factsText);
    grabRoot.appendChild(factsDiv);

    console.log(this);
  }
}
