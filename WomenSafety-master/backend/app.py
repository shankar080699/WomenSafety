from flask import Flask, request, redirect, url_for, flash, jsonify
from flask_cors import CORS
import numpy as np
import json
import pandas as pd
import numpy as np
#import blog as bg
#from flask_mysqldb import MySQL
import pymysql
import base64
db = pymysql.connect("localhost","root","","womensecurity")
cursor = db.cursor()
app = Flask(__name__)
CORS(app)



@app.route('/register',methods=['POST'])
def register():
    aadhar = request.json.get('aadhar_id')
    name = request.json.get('name')
    password = request.json.get('password')
    
    print(aadhar)
    print(name)
    sql = "INSERT INTO users (aadhar_id,name,password) VALUES (%s, %s, %s)"
    val = (aadhar,name,password)
    cursor.execute(sql,val)
    db.commit()
    return jsonify({"status":"Successful"})
# app.config['CORS_HEADERS'] = 'Content-Type'
# CORS(app, resources={r"/api": {"origins": "*"}})

@app.route('/info', methods=['PUT'])
# @crossdomain(origin="*", headers=["Content-Type"])
def blogs():
    data = request.json.get('name')
    cursor.execute("SELECT Name,latitude,longitude from info where name=%s ",data)
    results = cursor.fetchall()
    
    return jsonify(results[0])

@app.route('/hits', methods=['GET'])
# @crossdomain(origin="*", headers=["Content-Type"])
def hits():
    dt=[]
    data=cursor.execute("SELECT * from policestatistics order by hits desc")
    results = cursor.fetchall()
    # mysql.connection.commit()
    # cur.close()
    
    print(results)
    return json.dumps(results)

@app.route('/reporters', methods=['GET'])
# @crossdomain(origin="*", headers=["Content-Type"])
def reporters():
    dt=[]
    data=cursor.execute("SELECT name from info")
    results = cursor.fetchall()
    # mysql.connection.commit()
    # cur.close()
    
    print(results)
    return json.dumps(results)


if __name__ == '__main__':
    app.run(debug=True)
    