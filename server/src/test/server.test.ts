import supertest from "supertest";
import testApp from "../app";

const request = supertest(testApp);

test("GET /", async () => {
    const response = await request.get("/").expect(200);

    expect(response.body).toEqual({ msg: "Hello Develhope" });
});
