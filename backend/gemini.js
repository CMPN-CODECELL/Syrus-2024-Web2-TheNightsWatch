const { GoogleGenerativeAI } = require("@google/generative-ai");

// 1. Configuration
const api_key = 'AIzaSyADJNXPFcAxBiYSCMyCIyb534isnzBWYu0';
const genAI = new GoogleGenerativeAI(api_key);
const generationConfig = { temperature: 0.9, topP: 1, topK: 1, maxOutputTokens: 4096 };

// 2. Initialise Model
const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig });

// 3. Generate Content
async function generateContent() {
    try {
        const prompt = "Create a Meal plan for today";
        const result = await model.generateContent(prompt);
        const response = await result.response;
        console.log(response.text());
    } catch (error) {
        console.error('Error generating content:', error);
    }
}

// Run the function
generateContent();