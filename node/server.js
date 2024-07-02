import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const planetsCollection = process.env.MONGO_DB_PLANETS;
const filmsCollection = process.env.MONGO_DB_FILMS;
const charactersCollection = process.env.MONGO_DB_CHARACTERS;
const filmsPlanetsCollection = process.env.MONGO_DB_FILMS_PLANETS;
const filmsCharactersCollection  = process.env.MONGO_DB_FILMS_CHARACTERS;

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
const PORT = 3000;

app.get('/api/characters', async (req, res) => {
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

app.get('/api/films/:id', async (req, res) => {
    try {
        const id = req.params.id
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(filmsCollection);
        const films = await collection.find({ id:parseInt(id) }).toArray();
        res.json(films);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No planets for you! ☹");
    }
});

app.get('/api/films/:id/characters', async (req, res) => {
    try {
        const id = req.params.id;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(filmsCharactersCollection);
        const filmsCharacters = await collection.find({ id: parseInt(id) }).toArray();
        res.json(filmsCharacters);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No planets for you! ☹");
    }
});

app.get('/api/characters/:id/films', async (req, res) => {
    try {
        const { id } = req.params
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(filmsCharactersCollection);
        const filmsCharacters = await collection.find({ id: parseInt(id) }).toArray();
        res.json(filmsCharacters);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No planets for you! ☹");
    }
});

app.get('/api/planets/:id/characters', async (req, res) => {
    try {
        const { id } = req.params
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(filmsCharactersCollection);
        const filmsCharacters = await collection.find({id: parseInt(id)}).toArray();
        res.json(filmsCharacters);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No planets for you! ☹");
    }
});

app.get('/api/planets', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(planetsCollection);
        const planets = await collection.find({}).toArray();
        res.json(planets);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No planets for you! ☹");
    }
});

app.get('/api/characters/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(filmsCollection);
        const characters = await collection.find({ id: parseInt(id) }).toArray();
        res.json(characters);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No planets for you! ☹");
    }
});

app.get('/api/planets/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(planetsCollection);
        const planets = await collection.find({ id: parseInt(id) }).toArray();
        res.json(planets);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No planets for you! ☹");
    }
});


app.get('/api/films', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(filmsCollection);
        const films = await collection.find({}).toArray();
        res.json(films);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No planets for you! ☹");
    }
});

app.get('/api/films/:id/planets', async (req, res) => {
    try {
        const id = req.params.id;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(filmsPlanetsCollection);
        const planets = await collection.find({ id: parseInt(id) }).toArray();
        res.json(planets);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No planets for you! ☹");
    }
});

app.get('/api/planets/:id/films', async (req, res) => {
    try {
        const id = req.params.id;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(filmsPlanetsCollection);
        const planets = await collection.find({ id: parseInt(id)}).toArray();
        res.json(planets);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No planets for you! ☹");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
