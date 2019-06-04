import flask_login
from backend.db import db, User
import flask_praetorian


class Auth:
    """
    Auth
    @param app
    """
    def __init__(self, app):
        self.app = app
        self.login_manager = flask_login.LoginManager()
        self.login_manager.init_app(app)

        self.guard = flask_praetorian.Praetorian()
        self.guard.init_app(app, User)

    def register(self, email, password):
        if User.lookup(email):
            return (False, "User exists")
        
        else:
            user = User(email=email, password=self.guard.encrypt_password(password))
            user.save()
            return (True, user)

