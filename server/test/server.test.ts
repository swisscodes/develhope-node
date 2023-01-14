import supertest from "supertest";
import testApp from "../src/app";
import { prismaMock } from "../prisma/prismaSingleton";

const request = supertest(testApp);
describe("GET /", () => {
    test("GET /", async () => {
        const response = await request.get("/").expect(200);

        expect(response.body).toEqual({ msg: "Hello Develhope" });
    });
});

// test("GET /planets", async () => {
//     const response = await request.get("/planets").expect(200);

//     expect(response.body).toEqual([]);
// });

describe("POST /planets", () => {
    test("Valid request", async () => {
        const planet = {
            id: 33,
            name: "Mercury",
        };

        prismaMock.planet.create.mockResolvedValue(planet);
        const response = await request
            .post("/planets")
            .send({
                name: "Mercury",
            })
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

        expect(response.body).toEqual({
            error: "bad thing happened no panick send the right data type",
        });
    });
});

describe("POST /planets/:id", () => {
    test("Valid request", async () => {
        const planet = {
            id: 1,
            name: "Mercury",
        };

        prismaMock.planet.findUnique.mockResolvedValue(planet);
        const response = await request
            .get("/planets/1")
            .send({
                id: 1,
                name: "Mercury",
            })
            .expect(200)
            .expect("Content-Type", "application/json; charset=utf-8");

        expect(response.body).toEqual(planet);
    });

    test("invalid request", async () => {
        prismaMock.planet.findUnique.mockResolvedValue(null);
        const response = await request
            .get("/planets/999")
            .send({
                id: 1,
                name: "Mercury",
            })
            .expect(404)
            .expect("Content-Type", "application/json; charset=utf-8");

        expect(response.body).toEqual({ error: "bad thing happened" });
    });
});

describe("PUT /planets/:id", () => {
    test("Valid request", async () => {
        const planet = {
            id: 1,
            name: "Mercury",
        };

        prismaMock.planet.update.mockResolvedValue(planet);
        const response = await request
            .put("/planets/1")
            .send({
                id: 1,
                name: "Mercury",
            })
            .expect(200)
            .expect("Content-Type", "application/json; charset=utf-8");

        expect(response.body).toEqual(planet);
    });

    test("invalid request", async () => {
        prismaMock.planet.findUnique.mockResolvedValue(null);
        const response = await request
            .put("/planets/999")
            .send({
                id: 1,
                name: "Mercury",
            })
            .expect(422)
            .expect("Content-Type", "application/json; charset=utf-8");

        expect(response.body).toEqual({ error: "bad thing happened" });
    });
});

describe("DELETE /planets/:id", () => {
    test("Valid request", async () => {
        const planet = {
            id: 1,
            name: "Mercury",
        };

        prismaMock.planet.update.mockResolvedValue(planet);
        const response = await request
            .put("/planets/1")
            .send({
                id: 1,
                name: "Mercury",
            })
            .expect(200)
            .expect("Content-Type", "application/json; charset=utf-8");

        expect(response.body).toEqual(planet);
    });

    test("invalid request", async () => {
        prismaMock.planet.findUnique.mockResolvedValue(null);
        const response = await request
            .put("/planets/999")
            .send({
                id: 1,
                name: "Mercury",
            })
            .expect(422)
            .expect("Content-Type", "application/json; charset=utf-8");

        expect(response.body).toEqual({ error: "bad thing happened" });
    });
});
