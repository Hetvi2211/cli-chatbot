import os
from google import genai

client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))

print("🤖 Gemini Python Chatbot")
print('Type "exit" to quit')

while True:
    user_input = input("You: ")

    if user_input.lower() == "exit":
        break

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=user_input
    )

    print("Gemini:", response.text)