import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import env from "dotenv";

const app = express();

env.config();

app.use(cors());

app.use(bodyParser.json());

app.listen("3080", () => console.log("Port 3080 works!!!"));

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const generationConfig = {
  stopSequences: ["red"],
  maxOutputTokens: 2048,
  temperature: 0.9,
  topP: 1,
  topK: 1,
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", async (req, res) => {
  const { message } = req.body;
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
    const chat = model.startChat({
      history: [],
      generationConfig,
      safetySettings,
    });
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const answer = response.text();
    res.json({ message: answer });
  } catch (error) {
    console.log(error);
    res.send(error).status(400);
  }
});
