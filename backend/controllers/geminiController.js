const { asyncErrorHandler, HttpError } = require("../models/Model")
const { GoogleGenerativeAI } = require("@google/generative-ai");

// 1. Configuration
const api_key = 'AIzaSyADJNXPFcAxBiYSCMyCIyb534isnzBWYu0';
const genAI = new GoogleGenerativeAI(api_key);
const generationConfig = { temperature: 0.9, topP: 1, topK: 1, maxOutputTokens: 4096 };

// 2. Initialise Model
const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig });


const askQuestion = asyncErrorHandler(async (req, res, next) => {
    const { question } = req.body;

    async function generateContent(question) {
        try {
            const prompt = question
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            return text
        } catch (error) {
            console.error('Error generating content:', error);
        }
    }

    const result = await generateContent(question)
    if (!result) {
        throw new HttpError("Something went wrong", 500)
    }

    res.status(201).json({ response: result });
})


exports.askQuestion = askQuestion