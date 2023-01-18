from flask import Flask, jsonify, make_response, request
from uuid import uuid4
from flask import Response

app = Flask(__name__)

def get_img_num(image) :
    return 3


@app.route("/")
def main():
    return "hello"

@app.route("/", methods = ["POST"])
def test1():
    return "hello"


@app.route('/api/v1/images/', methods = ['POST'])
def test():
    req = request.json
    user_id = req['user_id']
    image = req['image']
    
    image_number = get_img_num(image)
    
    result = jsonify(
        user_id = user_id,
        image_number = image_number
    )

    return result

app.run('0.0.0.0', port=8000, debug=True)