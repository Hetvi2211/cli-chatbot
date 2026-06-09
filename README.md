# 🤖 CLI Chatbot — Powered by Anthropic Claude
A command-line chatbot built with Node.js and the Anthropic Claude API. Conversations are preserved across sessions using a local `history.json` file.
---
## ✨ Features
- 💬 Chat with Claude directly in your terminal
- 🧠 Persistent conversation history (survives restarts)
- 🔐 Secure API key management via `.env`
- ⚡ ES Modules + modern async/await patterns
- 🛡️ Graceful error handling for common API issues
---
## 📋 Prerequisites
|
 Requirement 
|
 Version  
|
 How to Check         
|
|
-------------
|
----------
|
----------------------
|
|
 Node.js     
|
 ≥ 18.0.0 
|
`node --version`
|
|
 npm         
|
 ≥ 8.0.0  
|
`npm --version`
|
|
 Anthropic API Key 
|
 Any 
|
[
console.anthropic.com
](
https://console.anthropic.com/settings/keys
)
|
---
## 🚀 Quick Start
### 1. Install dependencies
```bash
npm install
```
### 2. Add your API key
Open `.env` and replace the placeholder:
```
ANTHROPIC_API_KEY=sk-ant-your-real-key-here
```
### 3. Run the chatbot
```bash
npm start
```
---
## 💻 Usage
```
══════════════════════════════════════════════════
  🤖  CLI Chatbot powered by Claude
  Type your message and press Enter.
  Type "exit", "quit", or "/exit" to stop.
══════════════════════════════════════════════════
You: Hello!
Claude: Hi there! How can I help you today?
You: Explain what React is in 2 sentences.
Claude: React is a JavaScript library developed by Meta for building
user interfaces, particularly single-page applications. It uses a
component-based architecture and a virtual DOM to efficiently update
and render UI elements based on changing data.
You: exit
👋  Goodbye! Your conversation has been saved.
```
### Exit Commands
|
 Command  
|
 Works? 
|
|
----------
|
--------
|
|
`exit`
|
 ✅ Yes 
|
|
`quit`
|
 ✅ Yes 
|
|
`/exit`
|
 ✅ Yes 
|
|
`EXIT`
|
 ✅ Yes (case-insensitive) 
|
---
## 📁 Project Structure
```
cli-chatbot/
├── app.js          ← Main application logic
├── package.json    ← Project metadata & dependencies
├── .env            ← 🔐 Your secret API key (never commit this!)
├── .gitignore      ← Tells Git what to ignore
├── history.json    ← Conversation history (auto-managed)
└── README.md       ← This file
```
---
## 🔧 Configuration
Edit these constants at the top of `app.js` to customize behavior:
|
 Constant     
|
 Default           
|
 Description                          
|
|
--------------
|
-------------------
|
--------------------------------------
|
|
`MODEL`
|
`claude-opus-4-5`
|
 Claude model to use                  
|
|
`MAX_TOKENS`
|
`1024`
|
 Max length of Claude's response      
|
### Available Claude Models
|
 Model               
|
 Speed    
|
 Cost   
|
 Best For               
|
|
---------------------
|
----------
|
--------
|
------------------------
|
|
`claude-opus-4-5`
|
 Slower   
|
 Higher 
|
 Complex reasoning      
|
|
`claude-sonnet-4-5`
|
 Balanced 
|
 Medium 
|
 General use            
|
|
`claude-haiku-3-5`
|
 Fastest  
|
 Lower  
|
 Quick, simple tasks    
|
---
## ⚠️ Common Issues & Fixes
|
 Error 
|
 Cause 
|
 Fix 
|
|
-------
|
-------
|
-----
|
|
`Authentication Error`
|
 Wrong API key 
|
 Check 
`.env`
 file 
|
|
`Cannot find module`
|
 Missing 
`"type": "module"`
|
 Check 
`package.json`
|
|
`Rate Limit`
|
 Too many requests 
|
 Wait 60 seconds and retry 
|
|
`ENOTFOUND`
|
 No internet connection 
|
 Check your network 
|
|
`history.json malformed`
|
 Manual edit gone wrong 
|
 Delete file, it auto-recreates 
|
---
## 🔮 Optional Improvements
1. **Streaming Responses** — Display Claude's reply word-by-word as it generates (using `client.messages.stream()`)
2. **System Prompt** — Give Claude a custom persona or instructions (e.g., "You are a helpful cooking assistant")
3. **Clear History Command** — Add a `/clear` command to reset conversation history
4. **Colorized Output** — Use the `chalk` npm package to color `You:` in blue and `Claude:` in green
---
## 📖 Learning Resources
- [Anthropic API Docs](https://docs.anthropic.com/)
- [Node.js readline Docs](https://nodejs.org/api/readline.html)
- [dotenv npm package](https://www.npmjs.com/package/dotenv)
- [ES Modules in Node.js](https://nodejs.org/api/esm.html)
---
## 📄 License
MIT