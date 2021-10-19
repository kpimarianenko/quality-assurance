import os
import random
import string

from flask import Flask, send_from_directory, abort
app = Flask(__name__)

dir_name = 'serverdata'
dir_path = f'./{dir_name}/'
file_name = 'data.txt'
data_path = dir_path + file_name

if not os.path.exists(dir_path):
    os.mkdir(dir_path)

size = 1024
dictionary = string.ascii_letters + string.digits + string.punctuation
text_data = ''.join(random.choice(dictionary) for _ in range(size))

f = open(data_path, 'w+')
f.write(text_data)
f.close()


@app.route('/')
def get_file():
    try:
        return send_from_directory(dir_path, file_name)
    except FileNotFoundError:
        abort(404)


port = 3000
host = '0.0.0.0'
app.run(host, port)
