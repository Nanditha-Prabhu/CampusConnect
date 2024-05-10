from flask import Flask, request

# py2neo is now End Of Life, we must use neomdel instead
# from py2neo import Graph, Node, Relationship

from neomodel import db, config, StructuredNode, RelationshipTo, RelationshipFrom
import pandas as pd
from flask_cors import CORS


# graph = Graph("bolt://localhost:7687", user="neo4j", password="projectnetwork")
# Neomodel connection
config.DATABASE_URL = "bolt://neo4j:projectnetwork@localhost:7687"

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return 'its working'

@app.route('/ongoing')
def ongoing_projects():
    query1 = """
    MATCH (p:PROJECT {status: 'Ongoing'}) return p.title, p.area_of_interest
    """

    result, meta = db.cypher_query(query1)

    # This returns a dictionary, the keys being the name of the Cypher variables - 'name' in our example
    result_as_dict = [dict(zip(meta, row)) for row in result]
    # lst = []
    # for d in result1:
    #     print(d)
    #     lst.append(d)
    return result_as_dict

@app.route('/all_areas')
def all_area_of_interests():
    query = """
    MATCH (s:STUDENT) 
    UNWIND s.area_of_interest AS student_interest 
    WITH COLLECT(DISTINCT student_interest) AS student_interests

    MATCH (f:FACULTY) 
    UNWIND f.area_of_interest AS faculty_interest 
    WITH COLLECT(DISTINCT faculty_interest) AS faculty_interests, student_interests

    WITH student_interests + faculty_interests AS all_interests
    UNWIND all_interests AS interest
    RETURN DISTINCT interest
    ORDER BY interest
    """
    result, meta = db.cypher_query(query)
    # print(result)
    return result

@app.route('/find_people', methods=['POST'])
def find_people():
    data = request.json
    people = data.get('people')
    area = data.get('area')
    query = "MATCH (n:" + people + ") WHERE '" + area + "' in n.area_of_interest RETURN n.name, n.student_name, n.department, n.designation, n.usn, n.email_id"

    nodes = [[],[],[],[]]
    result, meta = db.cypher_query(query)
    print(result)
    print(len(result))
    # result_as_dict = [dict(zip(meta, row)) for row in result]
    # print(result_as_dict)

    if people == 'FACULTY':
        for i in range(len(result)):
            nodes[0].append(result[i][0])
            nodes[1].append(result[i][2])
            nodes[2].append(result[i][3])
            nodes[3].append(result[i][5])
    elif people == 'STUDENT':
        for i in range(len(result)):
            nodes[0].append(result[i][1])
            nodes[1].append(result[i][2])
            nodes[2].append(result[i][4])
            nodes[3].append(result[i][5])

    if nodes[0] == [] :
        for i in range(len(nodes)):
            nodes[i].append('None')
    print(nodes)
    return nodes


if __name__ == '__main__':
    app.run(debug=True, port=8080)


# connect it to frontend as follows:
# import React, { useState, useEffect } from 'react';
# import axios from 'axios';

# function App() {
#   const [data, setData] = useState('');

#   useEffect(() => {
#     fetchData();
#   }, []);

#   const fetchData = async () => {
#     try {
#       const response = await axios.get('http://localhost:5000/api/data');
#       setData(response.data.message);
#     } catch (error) {
#       console.error('Error fetching data:', error);
#     }
#   };

#   return (
#     <div className="App">
#       <h1>React Frontend</h1>
#       <p>Data from Flask backend: {data}</p>
#     </div>
#   );
# }

# export default App;

