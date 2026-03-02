import express from "express";
import userRoutes from "./user/user.routes";
import cors from "cors";
import * as dotenv from 'dotenv';
import deckRoutes from "./deck/deck.routes";
import themeRoutes from "./theme/theme.routes";
import languageRoutes from "./languages/language.routes";
import cardRoutes from "./card/card.routes";
import {checkJWT} from "./jwt/jwt.middleware";



const app = express();
const PORT = 3000;
dotenv.config();

console.log(process.env.DATABASE_URL)

app.use(express.json());
/*app.use(cors({
    origin: [process.env.AUTHORIZED_URL!]
}));*/
app.use(cors());


app.use('/api/users', userRoutes);
app.use('/api/languages', languageRoutes);
app.use('/api/themes', themeRoutes);
app.use('/api/decks', deckRoutes);
app.use('/api/cards', cardRoutes);

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
