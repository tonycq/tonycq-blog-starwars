import React, { useEffect, useState } from 'react';
import { fetchPlanets } from '../stored/flux';
import Card from '../componentes/Card';
import Navbar from '../componentes/Navbar';

const PlanetsPage = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const planetsData = await fetchPlanets();
        setPlanets(planetsData.slice(0,9)); 
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <h1>Planetas</h1>
      <div className="row">
        {planets.map(planet => (
          <div className="col-md-4 mb-3" key={planet.uid}>
            <Card data={planet} type="planets" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanetsPage;
