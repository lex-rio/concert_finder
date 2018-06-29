#!/usr/bin/env python
from flask import Flask, render_template, request
import requests
import json

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")
baseUrl = "http://rest.bandsintown.com"
app_id = "foo"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/getConcerts")
@app.route("/getConcerts/<path:band>")
def get_concert(band="Skrillex"):
    # location = request.args.get('location') or "New York"
    result = requests.get('{0}/artists/{1}/events'.format(baseUrl, band), {'app_id': app_id})
    return json.dumps(result.json())


def calc_distance():
    return 1


@app.route("/hello")
def hello():
    return "Hello World!"


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
