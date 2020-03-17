from flask import Flask, jsonify, request, redirect
from model import db, Todo

app = Flask(__name__)

app.secret_key = 'ABC'

# Create a route
# Decorator
@app.route('/', methods=['GET'])
def home():
    return '<h1>Hello Class</h1>'

@app.route('/data.json', methods=['GET'])
def get_data():
    # if method == get ==> do something
    # elif method == post ===> something else
    data = {
        'name' : 'Ahmad',
        'cats' : ['Instance', 'Cherry'],
        'age' : 18
    }

    return jsonify(data)

    # Dictionary > json > js object

@app.route('/add', methods=['GET'])
def add_item():
    item = request.args.get('item')
    todo_item = Todo(item_name=item)
    db.session.add(todo_item)
    db.session.commit()
    return redirect('/all.json')


@app.route('/all.json', methods=['GET'])
def get_all():
    all_items = Todo.query.all()
    all_items_list = [ i.item_name for i in all_items ]
    # In javascript: all_items_list = all_items.map( i => i.name)
    return jsonify(all_items_list)


if __name__ == "__main__":
    from model import connect_to_db
    connect_to_db(app)
    app.run(port=5000, host='0.0.0.0', debug=True)
