from flask import Flask 

def create_app():
    app = Flask(__name__)

    app.config.from_pyfile('settings.py')

    @app.route('/')
    def index():
        return '<h1>Hey There!</h1>'

    return app