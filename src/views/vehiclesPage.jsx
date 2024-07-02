import React, { useEffect, useState } from 'react';
import { fetchVehicles } from '../stored/flux';
import Card from '../componentes/Card';
import Navbar from '../componentes/Navbar';

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const vehiclesData = await fetchVehicles();
        setVehicles(vehiclesData.slice(0, 9));
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <h1>Vehiculos</h1>
      <div className="row">
        {vehicles.map(vehicle => (
          <div className="col-md-4 mb-3" key={vehicle.uid}>
            <Card data={vehicle} type="vehicles" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehiclesPage;
