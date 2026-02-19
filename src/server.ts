import express from "express";
import userRoutes from "./user/user.routes";
import cors from "cors";
import * as dotenv from 'dotenv';
import deckRoutes from "./deck/deck.routes";


const app = express();
const PORT = 3000;
dotenv.config();

console.log(process.env.DATABASE_URL)

app.use(express.json());
app.use(cors({
    origin: [process.env.AUTHORIZED_URL!]
}));


app.use('/api/users', userRoutes);
app.use('/api/decks', deckRoutes);

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
