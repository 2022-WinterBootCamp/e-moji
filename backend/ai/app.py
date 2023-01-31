from flask import Flask, jsonify, make_response, request
from uuid import uuid4
from flask import Response
from detect import ai_detect

app = Flask(__name__)

@app.route("/")
def main():
    return "testing"

@app.route('/api/v1/images/', methods = ['POST'])
def ai_server():
    req = request.json
    user_id = req['user_id']
    emoji_id = req['emoji_id']
    image = req["image"]

    result_img = ai_detect(image)
    
    result = jsonify(
        user_id = user_id,
        result_img = result_img
    )

    return result

app.run('0.0.0.0', port=8000, debug=True)