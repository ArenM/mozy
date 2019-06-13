import json
import os
import flask_praetorian
import flask
from flask import Flask
from backend.auth import Auth
from backend.db import db, User, Role, Trip


def create_app():
    app = Flask(__name__, instance_relative_config=True)

    # app.config.from_pyfile('config.py')

    app.config['SECRET_KEY'] = 'dev'
    app.config['WTF_CSRF_ENABLED'] = False
    app.config['MONGODB_SETTINGS'] = {
        'db': 'mozy',
        'host': 'db',
        'username': 'mozy',
        'password': 'mozy',
        'authentication_source': 'mozy'
    }
    app.config['SECURITY_PASSWORD_SALT'] = 'dev'
    app.config['SECURITY_REGISTERABLE'] = 'dev'

    db.init_app(app)
    auth = Auth(app)

    if not os.path.isdir(app.instance_path):
        os.makedirs(app.instance_path)

    with app.app_context():
        default = {'email': 'rn@peacevolution.org', 'password': 'pass'}
        if not User.lookup("rn@peacevolution.org"):
            User(email=default['email'],
                 password=auth.guard.encrypt_password(
                     default['password'])).save()

    #@flask_praetorian.roles_required('user')
    @app.route('/route', methods=['POST'])
    def post_route():
        req = flask.request.get_json()
        start = req.get('start')
        end = req.get('end')
        t = Trip(start=[int(start['lon']),
                        int(start['lat'])],
                 end=[int(end['lon']), int(end['lat'])])
        t.save()
        print(end)
        return ""

    @app.route('/route', methods=['GET'])
    def get_route():
        ret = {
            'type': "FeatureCollection",
            'features': []
        }
        for trip in Trip.objects:
            ts = {"properties": {}, "type": "Feature", "geometry": trip['start']}
            #ret['features'].append(trip['start'])
            ret['features'].append(ts)

        return flask.jsonify(ret)

    @app.route('/login', methods=['POST'])
    def login():
        """
        Logs a user in by parsing a POST request containing user credentials and
        issuing a JWT token.
        {
          "username": "username",
          "password": "password"
        }
        """
        req = flask.request.get_json(force=True)
        username = req.get('username', None)
        password = req.get('password', None)
        user = auth.guard.authenticate(username, password)
        ret = {'access_token': auth.guard.encode_jwt_token(user), 'status_code': 200}
        return (flask.jsonify(ret), 200)
    
    @app.route('/register', methods=['POST'])
    def register():
        """
        Registers a user from post request
        {
          "username": "username",
          "password": "password"
        }
        """
        req = flask.request.get_json(force=True)
        username = req.get('username', None)
        password = req.get('password', None)

        success, data = auth.register(username, password)

        if not success:
            return (flask.jsonify({'message': data, 'status_code': 409}), 409)

        user = auth.guard.authenticate(username, password)
        ret = {'access_token': auth.guard.encode_jwt_token(user), 'status_code': 200}
        return (flask.jsonify(ret), 200)
    
    @app.after_request
    def after_request_cors(resp):
        resp.headers.set('Access-Control-Allow-Origin', "*")
        resp.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        resp.headers.set('Access-Control-Allow-Headers', 'Content-Type')
        return resp

    return app
