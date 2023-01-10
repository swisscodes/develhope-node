import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { Iplanet } from "./planetTypes";

const route = Router();
const prisma = new PrismaClient();

function retrieveRoute(mainRoute: Router) {
    mainRoute.use("/planets", route);
    route.get("/", async (req, res) => {
        const result = await prisma.planet.findMany();

        res.status(200).json(result);
    });

    route.post("/", async (req, res) => {
        //@ts-ignore
        const { name, diameter, moons, description } = req.body;

        if (
            name &&
            typeof name === "string" //&&
            // diameter &&
            // typeof diameter === "number" &&
            // moons &&
            // typeof moons === "number" &&
            // (typeof description === "string" ||
            //     typeof description === "undefined")
        ) {
            const postedData: Iplanet = req.body;
            const planet = await prisma.planet.create({ data: postedData });
            res.status(201).json(planet);
        } else {
            res.status(422).json({ error: "bad thing happened" });
        }
    });
}

export default retrieveRoute;
