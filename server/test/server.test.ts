import supertest from "supertest";
import testApp from "../src/app";

const request = supertest(testApp);
describe("GET /planets", () => {
    test("GET /", async () => {
        const response = await request.get("/").expect(200);

        expect(response.body).toEqual({ msg: "Hello Develhope" });
    });
});

test("GET /planets", async () => {
    const response = await request.get("/planets").expect(200);

    expect(response.body).toEqual([]);
});

describe("POST /planets", () => {
    test("Valid request", async () => {
        const planet = {
            name: "Mercury",
            diameter: 1234,
            moons: 12,
        };
        const response = await request
            .post("/planets")
            .send(planet)
            .expect(201)
            .expect("Content-Type", "application/json; charset=utf-8");

        expect(response.body).toEqual(planet);
    });

    test("Invalid request", async () => {
        const planet = {
            diameter: 1234,
            moons: 12,
        };
        const response = await request
            .post("/planets")
            .send(planet)
            .expect(422)
            .expect("Content-Type", "application/json; charset=utf-8");

        expect(response.body).toEqual({ error: "bad thing happened" });
    });
});
