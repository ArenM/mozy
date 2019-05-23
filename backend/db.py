from flask_mongoengine import MongoEngine
from flask_login import UserMixin

db = MongoEngine()


class Role(db.Document):
    """
    Mongo datastructure for user roles
    """
    name = db.StringField(max_length=80, uniqui=True)
    description = db.StringField(max_length=255)


class User(db.Document, UserMixin):
    """
    Mongo datastructure for users
    """
    email = db.StringField(max_length=255)
    password = db.StringField(max_length=255)
    active = db.BooleanField(default=True)
    confirmed_at = db.DateTimeField()
    roles = db.ListField(db.ReferenceField(Role), default=[])
