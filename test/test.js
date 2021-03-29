const request = require("supertest");
const server = require("../server");

describe("GET /", () => {
  it("respond with Hello World", (done) => {
    request(server).get("/").expect("Server running", done);
  })
});