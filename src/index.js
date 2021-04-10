let apiInstance = new ApiService();

document.addEventListener("DOMContentLoaded", function (event) {
  apiInstance.getFacts().then((facts) => {
    facts.map((fact) => {
      const newFacts = new Facts(fact);

      newFacts.createRootDomElement();
    });
  });
});
