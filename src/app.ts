import express, {Application, Request, Response} from "express" ;

const PORT = process.env.PORT || 4545;

const app: Application = express();

app.get("/ping", async (_req : Request, res: Response) => {
    res.json({
    message: "hello from Dan" 
    });
});

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
    });
