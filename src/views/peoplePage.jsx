import React, { useEffect, useState } from 'react';
import { fetchPeople } from '../stored/flux';
import Card from '../componentes/Card';
import Navbar from '../componentes/Navbar';

const PeoplePage = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const peopleData = await fetchPeople();
        setPeople(peopleData.slice(0,9)); 
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <h1>Personas</h1>
      <div className="row">
        {people.map(person => (
          <div className="col-md-4 mb-3" key={person.uid}>
            <Card data={person} type="people" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeoplePage;
