import flask_login
from backend import db
import flask_praetorian


class Auth:
    """
    Auth
    @param app
    """
    def __init__(self, app):
        self.login_manager = flask_login.LoginManager()
        login_manager.init_app(app)

        guard = flask_praetorian.Praetorian()

