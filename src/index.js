let apiInstance = new ApiService();

document.addEventListener("DOMContentLoaded", function (event) {
  apiInstance.getFacts().then((facts) => {
    console.log(facts);
    const newFacts = new Facts(facts);

    newFacts.createRootDomElement();
  });
});
