from flask import Flask, jsonify, make_response, request
from flaskext.mysql import MySQL

import boto3
from uuid import uuid4
import os

from settings import AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY

app = Flask(__name__)
app.config['MYSQL_DATABASE_USER'] = os.environ.get('MYSQL_USER', None)
app.config['MYSQL_DATABASE_PASSWORD'] = os.environ.get('MYSQL_PASS', None)
app.config['MYSQL_DATABASE_DB'] = os.environ.get('MYSQL_DB', None)
app.config['MYSQL_DATABASE_HOST'] = os.environ.get('MYSQL_HOST', None)
mysql = MySQL(app)
mysql.init_app(app)
conn = mysql.connect()

def get_img_url(img):
    s3_client = boto3.client(
        's3',
        aws_access_key_id=AWS_ACCESS_KEY_ID,
        aws_secret_access_key=AWS_SECRET_ACCESS_KEY
    )
    image = img
    image_type = "jpg"
    image_uuid = str(uuid4())
    s3_client.put_object(Body=image, Bucket='what-moji', Key=image_uuid + "." + image_type)
    image_url = "http://what-moji.s3.ap-northeast-2.amazonaws.com/" + \
                image_uuid + "." + image_type
    image_url = image_url.replace(" ", "/")
    return image_url


@app.route("/")
def main():
    return "hello"


@app.route('/images/')
def test(req_data, user_id, image):
    req_data = request.json
    user_id = req_data['user_id']
    image = req_data['image']
        
    image_url = get_img_url(image)
    
    return make_response(jsonify({'Result': 'Success', 'image_url': image_url}), 200)

app.run('0.0.0.0', port=8000, debug=True)