from flask import Flask, jsonify, request
from detect import ai_emoji

app = Flask(__name__)

@app.route("/")
def main():
    return "testing"

@app.route('/api/v1/images/', methods = ['POST'])
def ai_server():
    req = request.json
    user_id = req['user_id']
    image = req['image']
    emoji_data = req['emoji']

    result_img = ai_emoji(image, emoji_data)
    
    result = jsonify(
        user_id = user_id,
        result_img = result_img
    )

    return result

app.run('0.0.0.0', port=8000, debug=True)