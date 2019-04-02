from flask import Flask
from flask_mongoengine import MongoEngine
from flask_security import Security, MongoEngineUserDatastore, UserMixin, RoleMixin, login_required
from backend.db import db, User, Role
import os

def create_app():
    app = Flask(__name__, instance_relative_config=True)

    # app.config.from_pyfile('config.py')

    app.config['SECRET_KEY'] = 'dev'
    app.config['MONGODB_SETTINGS'] = {
        'db': 'mozy',
        'host': 'db',
        # 'port': 2071,
        'username': 'root',
        'password': 'root'
    }

    db = MongoEngine(app)
    # db.init_app(app)
    user_datastore = MongoEngineUserDatastore(db, User, Role)
    security = Security(app, user_datastore)

    try:
        os.makedirs(app.instance_path)
    except FileExistsError:
        pass

    @app.before_first_request
    def create_user():
        user_datastore.create_user(email='rn@peacevolution.org', password='password')

    @app.route('/')
    # @login_required
    def root():
        return "Hello World"

    return app
