import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { Iplanet } from "./planetTypes";
import { initMulterMiddleware } from "../middleware/multer";

const route = Router();
const prisma = new PrismaClient();
const upload = initMulterMiddleware();

function planetsRoute(mainRoute: Router) {
    mainRoute.use("/planets", route);
    route.get("/", async (req, res) => {
        const result = await prisma.planet.findMany();

        res.status(200).json(result);
    });
    route.get("/:id(\\d+)", async (req, res) => {
        const planetId = Number(req.params.id);
        const result = await prisma.planet.findUnique({
            where: { id: planetId },
        });

        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ error: "bad thing happened" });
        }
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
            res.status(422).json({
                error: "bad thing happened no panick send the right data type",
            });
        }
    });

    route.put("/:id(\\d+)", async (req, res) => {
        const planetId = Number(req.params.id);
        const bodyData = req.body;

        try {
            const result = await prisma.planet.update({
                where: { id: planetId },
                data: bodyData,
            });
            res.status(200).json(result);
        } catch (e) {
            res.status(422).json({ error: "bad thing happened" });
        }
    });

    route.delete("/:id(\\d+)", async (req, res) => {
        const planetId = Number(req.params.id);

        try {
            const result = await prisma.planet.delete({
                where: { id: planetId },
            });
            res.status(200).json(result);
        } catch (e) {
            res.status(422).json({ error: "bad thing happened" });
        }
    });

    //upload
    route.post("/:id(\\d+)/photo", upload.single("photo"), async (req, res) => {
        if (!req.file) {
            res.status(400);
        }
        const uploadFilename = req.file?.filename;

        res.status(201).json({ uploadFilename });
    });
}

export default planetsRoute;
