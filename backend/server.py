from flask import Flask
from py2neo import Graph
from py2neo import Node
from py2neo import Relationship
import pandas as pd
from flask_cors import CORS


graph = Graph("bolt://localhost:7687", user="neo4j", password="projectnetwork")

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

    result1 = graph.run(query1)
    lst = []
    for d in result1:
        print(d)
        lst.append(d)
    return lst

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

