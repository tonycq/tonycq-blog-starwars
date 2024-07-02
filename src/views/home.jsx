import React, { useEffect, useState, useContext } from 'react';
import { fetchPeople, fetchVehicles, fetchPlanets } from '../stored/flux';
import { AppContext } from '../stored/appContext';
import Navbar from '../componentes/Navbar';
import Card from '../componentes/Card';
import '../styles/App.css';

const Home = () => {
  const [people, setPeople] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [planets, setPlanets] = useState([]);
  const { favorites, toggleFavorite } = useContext(AppContext);

  useEffect(() => {
    const loadData = async () => {
      try {
        const peopleData = await fetchPeople();
        setPeople(peopleData);

        const vehiclesData = await fetchVehicles();
        setVehicles(vehiclesData);

        const planetsData = await fetchPlanets();
        setPlanets(planetsData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, []);

  return (
    <div className="container">
      <Navbar />

      <h2>Personas</h2>
      <div className="row">
        {people.map(person => (
          <div className="col-md-4" key={person.uid}>
            <Card
              data={person}
              type="people"
              buttonLabel={favorites.some(item => item.uid === person.uid) ? 'Remove from Favorites' : 'Add to Favorites'}
            />
          </div>
        ))}
      </div>

      <h2>Vehiculos</h2>
      <div className="row">
        {vehicles.map(vehicle => (
          <div className="col-md-4" key={vehicle.uid}>
            <Card
              data={vehicle}
              type="vehicles"
              buttonLabel={favorites.some(item => item.uid === vehicle.uid) ? 'Remove from Favorites' : 'Add to Favorites'}
            />
          </div>
        ))}
      </div>

      <h2>Planetas</h2>
      <div className="row">
        {planets.map(planet => (
          <div className="col-md-4" key={planet.uid}>
            <Card
              data={planet}
              type="planets"
              buttonLabel={favorites.some(item => item.uid === planet.uid) ? 'Remove from Favorites' : 'Add to Favorites'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
