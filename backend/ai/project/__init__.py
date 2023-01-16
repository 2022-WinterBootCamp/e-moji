from flask import Flask, jsonify


app = Flask(__name__)


@app.route("/api/v1/test")
def hello_world():
    return jsonify(hello="world")