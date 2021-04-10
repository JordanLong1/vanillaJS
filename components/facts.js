class Facts {
  //     source: "user"
  // status: {verified: true, sentCount: 1}
  // text: "Wikipedia has a recording of a cat meowing, because why not?"
  // type: "cat"
  constructor({ source, status, text, type }) {
    this.source = source;
    (this.status = status), (this.text = text);
    this.type = type;
  }

  createRootDomElement() {
    let createRootElement = document.createElement("div");
    createRootElement.setAttribute("id", "root");

    document.body.appendChild(createRootElement);
    this.createDataElements();
  }

  createDataElements() {
    let grabRoot = document.getElementById("root");
  }
}
