import { GoogleGenerativeAI } from "@google/generative-ai";
const gptResult = async (text) => {
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `You work like a movie recommendation system and suggect me 5 movies which is ${text}. The result of the movies are comma seperated, for example: raaz, bhootnath, sholey, angoor, damini`;
  const result = await model.generateContent(prompt);
  return result.response.text();
};

export default gptResult;
