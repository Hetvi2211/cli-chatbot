import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import readline from "readline";
import fs from "fs";

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("❌ GEMINI_API_KEY not found in .env");
  process.exit(1);
}

const ai = new GoogleGenAI({
  apiKey: API_KEY,
});

const HISTORY_FILE = "history.json";

function loadHistory() {
  try {
    if (fs.existsSync(HISTORY_FILE)) {
      return JSON.parse(
        fs.readFileSync(HISTORY_FILE, "utf-8")
      );
    }
  } catch (error) {
    console.log("⚠️ Could not load history.");
  }

  return [];
}

function saveHistory(history) {
  fs.writeFileSync(
    HISTORY_FILE,
    JSON.stringify(history, null, 2)
  );
}

const history = loadHistory();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function chatWithGemini(userMessage) {
  history.push({
    role: "user",
    parts: [{ text: userMessage }],
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: history,
  });

  const reply = response.text;

  history.push({
    role: "model",
    parts: [{ text: reply }],
  });

  saveHistory(history);

  return reply;
}

async function main() {
  console.log("\n🤖 CLI Chatbot powered by Gemini");
  console.log('Type "exit" to quit.\n');

  while (true) {
    const userInput = await ask("You: ");

    if (
      userInput.toLowerCase() === "exit" ||
      userInput.toLowerCase() === "quit"
    ) {
      console.log("\n👋 Goodbye!");
      rl.close();
      process.exit(0);
    }

    try {
      const reply = await chatWithGemini(userInput);

      console.log(`\nGemini: ${reply}\n`);
    } catch (error) {
      console.error("\n❌ Error:", error.message);
    }
  }
}

main();