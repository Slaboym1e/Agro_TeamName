from flask import Flask
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from config import config, configBD

app = Flask(__name__)

engine = create_engine(configBD.SQLALCHEMY_DATABASE_URI, convert_unicode=True)
Base = declarative_base()

import app