from flask import Flask
from sqlalchemy.orm import scoped_session, sessionmaker
from flask import render_template, url_for, jsonify, abort
app = Flask(__name__)

@app.route('/')
def index():
    return 'AgroHacaton 2021!'

@app.route('/map')
def create_map():
    return render_template("map.html")