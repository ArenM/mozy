from flask import Flask
import os

def create_app():
    app = Flask(__name__, instance_relative_config=True)

    # app.config.from_pyfile('config.py')

    try:
        os.makedirs(app.instance_path)
    except FileExistsError:
        pass

    @app.route('/')
    def root():
        return "Hello World"

    return app
