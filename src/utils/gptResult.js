import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API } from "./constants";
const gptResult = async (text) => {
  const genAI = new GoogleGenerativeAI(GEMINI_API);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `You work like a movie recommendation system and suggect me 5 movies which is ${text}. The result of the movies are comma seperated, for example: raaz, bhootnath, sholey, angoor, damini`;
  const result = await model.generateContent(prompt);
  return result.response.text();
};

export default gptResult;
