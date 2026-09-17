import express, {Application, Request, Response} from "express" ;
import carRoutes from './routes/cars';

const PORT = process.env.PORT || 4545;
const app: Application = express();

app.use(express.json());
app.use('/api/v1/cars', carRoutes);


app.get("/ping", async (_req : Request, res: Response) => {
    res.json({
    message: "hello from Dan" 
    });
});

app.get('/bananas', async (_req : Request, res: Response) => {
    res.json({
    message: "this is bananas",
    });
});

app.use((req, _res, next) => {  
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
    });
