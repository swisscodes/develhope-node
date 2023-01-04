import app from "./app";

const port = process.env.PORT;
//@ts-ignore

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
