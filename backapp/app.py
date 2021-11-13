from flask import Flask
from flask import render_template, url_for, jsonify, abort
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/map')
def create_map():
    return render_template("map.html")