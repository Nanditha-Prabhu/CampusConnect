from flask import Flask, request, jsonify

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

# testing route
@app.route('/')
def index():
    return 'its working'

# lists all area of interests
@app.route('/all_areas')
def all_area_of_interests():
    query = """
    MATCH (s:STUDENT) 
    UNWIND s.area_of_interest AS student_interest 
    WITH COLLECT(DISTINCT student_interest) AS student_interests

    MATCH (f:FACULTY) 
    UNWIND f.area_of_interest AS faculty_interest 
    WITH COLLECT(DISTINCT faculty_interest) AS faculty_interests, student_interests

    MATCH (p:PROJECT)
    UNWIND p.area_of_interest AS project_interest
    WITH COLLECT(DISTINCT project_interest) AS project_interests, faculty_interests, student_interests

    WITH student_interests + faculty_interests + project_interests AS all_interests
    UNWIND all_interests AS interest
    RETURN DISTINCT interest
    ORDER BY interest
    """
    result, meta = db.cypher_query(query)
    # print(result)
    return result

# lists all skills
@app.route('/all_skills')
def all_skills():
    query = """
    MATCH(s:STUDENT)
    UNWIND s.skills AS sk
    RETURN DISTINCT sk
    ORDER BY sk
    """
    result, meta = db.cypher_query(query)
    print(result)
    return result

# creates student node
@app.route('/create_student', methods=['POST'])
def create_student():
    data = request.json
    sname = data.get('student_name')
    usn = data.get('usn')
    email = data.get('email_id')
    dept = data.get('department')
    aoi1 = data.get('area_of_int1')
    aoi2 = data.get('area_of_int2')
    sem = data.get('sem')
    skills = data.get('skills')

    aoi = []
    aoi.append(aoi1)
    aoi.append(aoi2)

    query = """
    CREATE (s:STUDENT {student_name: $sname, usn: $usn, email_id: $email, department: $dept, area_of_interest: $aoi, semester: $sem, skills: $skills})
    """    
    parameters = {
    "sname": sname,
    "usn": usn,
    "email": email,
    "dept": dept,
    "aoi": aoi,
    "sem": sem,
    "skills": skills  # Pass the list directly as a parameter
    }
    result, meta = db.cypher_query(query, params=parameters)
    print(result)
    return result

# creates faculty node
@app.route('/create_faculty', methods=['POST'])
def create_faculty():
    data = request.json
    fname = data.get('name')
    email = data.get('email_id')
    dept = data.get('department')
    aoi1 = data.get('area_of_int1')
    aoi2 = data.get('area_of_int2')
    desigtn = data.get('designation')

    aoi = []
    aoi.append(aoi1)
    aoi.append(aoi2)

    query = """
    CREATE (f:FACULTY {name: $fname, email_id: $email, department: $dept, area_of_interest: $aoi, designation: $desigtn})
    """    
    parameters = {
    "fname": fname,
    "email": email,
    "dept": dept,
    "aoi": aoi,
    "desigtn": desigtn # Pass the list directly as a parameter
    }
    result, meta = db.cypher_query(query, params=parameters)
    print(result)
    return result

# find people with similar interest
@app.route('/find_people', methods=['POST'])
def find_people():
    data = request.json
    people = data.get('people')
    area = data.get('area')
    query1 = "MATCH (n:" + people + ") WHERE '" + area + "' in n.area_of_interest RETURN n.name, n.student_name, n.department, n.designation, n.usn, n.email_id"
    query2 = "MATCH (n) WHERE '" + area + "' in n.area_of_interest RETURN n.name, n.student_name, n.department, n.designation, n.usn, n.email_id"

    # null results are also handled(only in this function)
    nodes = [[],[],[],[]]
    if(people=='ALL'):
        result, meta = db.cypher_query(query2)
    else:
        result, meta = db.cypher_query(query1)
    print(result)
    # print(meta)
    # print(len(result))
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
    else:
        for i in range(len(result)):
            # faculty details
            if(result[i][0] != None):
                nodes[0].append(result[i][0])
                nodes[1].append(result[i][2])
                nodes[2].append(result[i][3])
                nodes[3].append(result[i][5])
            # student details
            if(result[i][1] != None):
                nodes[0].append(result[i][1])
                nodes[1].append(result[i][2])
                nodes[2].append(result[i][4])
                nodes[3].append(result[i][5])

    if nodes[0] == [] :
        for i in range(len(nodes)):
            nodes[i].append('None')
    print(nodes)
    return nodes

# find projects according to area of interest
@app.route('/find_projects', methods=['POST'])
def find_projects():
    data = request.json
    status = data.get('status')
    area = data.get('area')
    query1 = "MATCH (P:PROJECT) WHERE '"+ area +"' IN P.area_of_interest AND P.status= '" + status + "' RETURN P.title, P.area_of_interest, P.description, P.status "
    query2 = "MATCH (P:PROJECT) WHERE '"+ area +"' IN P.area_of_interest RETURN P.title, P.area_of_interest, P.description, P.status "

    if status =='All':
        result, meta = db.cypher_query(query2)
        print(result)
    else:
        result, meta = db.cypher_query(query1)
        print(result)
    return result

# find students according to the skill
@app.route('/find_students', methods=['POST'])
def find_students():
    data = request.json
    areaOfInterest = data.get('areaOfInterest')
    skill = data.get('skill')
    query = """
    MATCH (s:STUDENT)
    WHERE $areaOfInterest IN s.area_of_interest OR $skill IN s.skills
    RETURN s.student_name, s.department, s.area_of_interest, s.skills, s.email_id
    """
    parameters = {
        'areaOfInterest': areaOfInterest,
        'skill': skill
    }
    result, meta = db.cypher_query(query, params=parameters)
    print(result)
    return result

# list the entire team
@app.route('/know-team', methods=['POST'])
def get_projects():
    data = request.json
    status = data.get('status')
    query1 = """
    MATCH (p:PROJECT)
    OPTIONAL MATCH (p)<-[:WORKING_ON]-(s:STUDENT)
    OPTIONAL MATCH (p)<-[:WORKING_ON]-(f:FACULTY)
    OPTIONAL MATCH (f)-[:GUIDES]->(s)
    WITH p, COLLECT(DISTINCT s) AS Students, COLLECT(DISTINCT f) AS Faculties
    WHERE size(Students) > 0 AND size(Faculties) > 0 AND p.status= $status
    RETURN p.title AS ProjectTitle, 
           p.description AS ProjectDescription, 
           p.status AS ProjectStatus, 
           [s IN Students | s.student_name] AS Students,
           [f IN Faculties | f.name] AS Faculties
    ORDER BY ProjectTitle
    """
    query2 = """
    MATCH (p:PROJECT)
    OPTIONAL MATCH (p)<-[:WORKING_ON]-(s:STUDENT)
    OPTIONAL MATCH (p)<-[:WORKING_ON]-(f:FACULTY)
    OPTIONAL MATCH (f)-[:GUIDES]->(s)
    WITH p, COLLECT(DISTINCT s) AS Students, COLLECT(DISTINCT f) AS Faculties
    WHERE size(Students) > 0 AND size(Faculties) > 0 
    RETURN p.title AS ProjectTitle, 
           p.description AS ProjectDescription, 
           p.status AS ProjectStatus, 
           [s IN Students | s.student_name] AS Students,
           [f IN Faculties | f.name] AS Faculties
    ORDER BY ProjectTitle
    """
    parameters = {
        'status': status
    }
    # result, meta = db.cypher_query(query2, params=parameters)
    # print(result)
    if status =='All':
        result, meta = db.cypher_query(query2)
        print(result)
    else:
        result, meta = db.cypher_query(query1, params=parameters)
        print(result)
    projects = []
    for record in result:
        project = {
            "ProjectTitle": record[0],
            "ProjectDescription": record[1],
            "ProjectStatus": record[2],
            "Students": record[3],
            "Faculties": record[4]
        }
        projects.append(project)
    print(projects)
    return projects

## statistics
# total people
@app.route('/stat_count_total_ppl')
def stat_count_student_faculty():
    query = """
    MATCH (s:STUDENT)
    WITH count(s) AS total_students
    MATCH (f:FACULTY)
    RETURN total_students, count(f) AS total_faculty
    """
    result, meta = db.cypher_query(query)
    print(result)
    return result

# labs
@app.route('/stat_count_labs')
def stat_count_labs():
    query = """
    MATCH (l:LABORATORY)
    RETURN count(l) AS total_laboratories
    """
    result, meta = db.cypher_query(query)
    print(result)
    return result

# ppl engaged in projects
@app.route('/stat_count_engaged_ppl')
def stat_count_engaged_ppl():
    query = """
    MATCH (s:STUDENT)-[:WORKING_ON]->(p:PROJECT)
    WITH count(DISTINCT s) AS students_engaged
    MATCH (f:FACULTY)-[:WORKING_ON]->(p:PROJECT)
    RETURN students_engaged, count(DISTINCT f) AS faculty_engaged
    """
    result, meta = db.cypher_query(query)
    print(result)
    return result

# projects
@app.route('/stat_count_projects')
def stat_count_projects():
    query = """
    MATCH (p:PROJECT)
    RETURN 
        count(CASE WHEN p.status = 'Ongoing' THEN 1 END) AS ongoing_projects, 
        count(CASE WHEN p.status = 'Planned' THEN 1 END) AS planned_projects, 
        count(CASE WHEN p.status = 'Completed' THEN 1 END) AS completed_projects
    """
    result, meta = db.cypher_query(query)
    print(result)
    return result
    

if __name__ == '__main__':
    app.run(debug=True, port=8080)


# simple template to connect backend to frontend inorder to check the working:
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

