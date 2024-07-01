import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const planetsCollection = process.env.MONGO_DB_PLANETS;
const charactersCollection = process.env.MONGO_DB_CHARACTERS;
const filmsCollection = process.env.MONGO_DB_FILMS;
const filmsCharactersCollection = process.env.MONGO_DB_FILMS_CHARACTERS;
const filmsPlanetsCollection = process.env.MONGO_DB_FILMS_PLANETS;

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
const PORT = 3000;

app.get('/characters', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(charactersCollection);
        const characters = await collection.find({}).toArray();
        res.json(characters);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No planets for you! ☹");
    }
});

app.get('/films/:id', async (req, res) => {
    try {
        const { id } = req.params
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(filmsCollection);
        const films = await collection.find({ _id: new ObjectId(id) }).toArray();
        res.json(films);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No planets for you! ☹");
    }
});

app.get('/films/:id/characters', async (req, res) => {
    try {
        const { id } = req.params
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(filmsCharactersCollection);
        const filmsCharacters = await collection.find({ _id: new ObjectId(id) }).toArray();
        res.json(filmsCharacters);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No planets for you! ☹");
    }
});

app.get('/characters/:id/films', async (req, res) => {
    try {
        const { id } = req.params
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(filmsCharactersCollection);
        const filmsCharacters = await collection.find({ _id: new ObjectId(id) }).toArray();
        res.json(filmsCharacters);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No planets for you! ☹");
    }
});

app.get('/planets/:id/characters', async (req, res) => {
    try {
        const { id } = req.params
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(filmsCharactersCollection);
        const filmsCharacters = await collection.find({ _id: new ObjectId(id) }).toArray();
        res.json(filmsCharacters);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No planets for you! ☹");
    }
});

app.get('/planets', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const planets = await collection.find({}).toArray();
        res.json(planets);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No planets for you! ☹");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
