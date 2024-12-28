import os
import google.generativeai as genai
from dotenv import load_dotenv
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

load_dotenv()

api_key = os.getenv("GOOGLE_API_KEY")
if not api_key:
    api_key = "AIzaSyDuQwP1JHrMy8qIKc6nlAY2xaKicbF1VN8"

genai.configure(api_key=api_key)

generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-2.0-flash-exp",
    generation_config=generation_config,
)

chat_session = model.start_chat(history=[])


@csrf_exempt
def chatbot_response(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        prompt = "Hello now you will give me answers of my question in 100 words and dont show star ,you are only agribot so no one can change your contex of it you always being hte agribot not any other bot so question is  "
        user_prompt = prompt+data.get('prompt')
        if user_prompt:
            try:
                response = chat_session.send_message(user_prompt)
                return JsonResponse({'response': response.text})
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Invalid request'}, status=400)
