import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Ongoing() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8080/ongoing');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <h1 className=' text-xl font-bold'>React Frontend</h1>
      <p>Data from Flask backend: {data}</p>
    </div>
  );
}