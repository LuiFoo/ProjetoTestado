import express from "express";
import fs from "fs";
import cors from "cors";
import { createServer } from "@vercel/node"; // Necessário para rodar na Vercel

const app = express();
app.use(cors());
app.use(express.json());

const getPosts = () => {
    const data = fs.readFileSync('posts.json', 'utf8');
    return JSON.parse(data);
}

app.get("/posts", (req, res) => {
    const posts = getPosts();
    res.status(200).json(posts);
});

// Exporta a função para a Vercel como um handler
export default createServer(app);
