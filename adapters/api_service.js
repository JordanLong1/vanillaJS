class ApiService {
  constructor() {
    this.baseUrl = "https://cat-fact.herokuapp.com";
  }

  getFacts() {
    return fetch(`${this.baseUrl}/facts`).then((resp) => resp.json());
  }
}
