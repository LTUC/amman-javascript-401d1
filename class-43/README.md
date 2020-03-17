# ![cf](http://i.imgur.com/7v5ASc8.png) Class 43: Python Flask

## Learning Objectives

- Students will understand basics of Flask module
- Students will be able to create a backend server that returns HTML and JSON Data
- Students will understand how SQLalchemy works

## Setup

- pipenv shell
- pip install flask
- pip freeze > requirements.txt
- touch server.py


## Server

``` python

from flask import Flask

app = Flask(__name__)

app.secret_key = "ABC"


if __name__ == "__main__":
	app.run(port=5000, host='0.0.0.0', debug=True)

```

### Add Routes:

```python
from flask import jsonify

@app.route("/", methods=['GET'])
def home():
    return "<h1>Hello Class</h1>"
```