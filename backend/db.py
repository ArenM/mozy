from flask_mongoengine import MongoEngine
import pdb

db = MongoEngine()


class Role(db.Document):
    """
    Mongo datastructure for user roles
    """
    name = db.StringField(max_length=80, unique=True)
    description = db.StringField(max_length=255)


class User(db.Document):
    """
    Mongo datastructure for users
    """
    email = db.StringField(max_length=255, unique=True)
    password = db.StringField(max_length=255)
    active = db.BooleanField(default=True)
    confirmed_at = db.DateTimeField()
    roles = db.ListField(db.ReferenceField(Role), default=[])

    @classmethod
    def lookup(cls, email):
        for user in cls.objects(email=email):
            return user
        return None

    @property
    def rolenames(self):
        return self.roles

    @property
    def identify(self, id):
        return self.objects(_id=id)[0]

    @property
    def identity(self):
        return str(self.id)

class Trip(db.Document):
    start = db.PointField()
    end = db.PointField()
