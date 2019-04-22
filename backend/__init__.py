from flask import Flask
from flask_mongoengine import MongoEngine
from flask_security import Security, MongoEngineUserDatastore, UserMixin, RoleMixin, roles_required
from backend.db import db, User, Role
import os

def create_app():
    app = Flask(__name__, instance_relative_config=True)

    # app.config.from_pyfile('config.py')

    app.config['SECRET_KEY'] = 'dev'
    app.config['WTF_CSRF_ENABLED'] = False
    app.config['MONGODB_SETTINGS'] = {
        'db': 'mozy',
        'host': 'db',
        # 'port': 2071,
        'username': 'mozy',
        'password': 'mozy',
        'authentication_source': 'mozy'
    }
    app.config['SECURITY_PASSWORD_SALT'] = 'dev'

    db = MongoEngine(app)
    # db.init_app(app)
    user_datastore = MongoEngineUserDatastore(db, User, Role)
    security = Security(app, user_datastore)

    if not os.path.isdir(app.instance_path):
        os.makedirs(app.instance_path)

    @app.before_first_request
    def create_user():
        user_datastore.create_user(email='rn@peacevolution.org', password='password', roles=['user'])

    @app.route('/')
    @roles_required('user')
    def root():
        return "Hello World"

    @app.after_request
    def after_request_cors(resp):
        resp.headers.set('Access-Control-Allow-Origin', "http://localhost:3000")
        resp.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        resp.headers.set('Access-Control-Allow-Headers', 'Content-Type')
        return resp

    return app
