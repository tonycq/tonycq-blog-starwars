import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPerson, fetchVehicle, fetchPlanet } from '../stored/flux'; 

const Details = () => {
  const { type, id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        switch (type) {
          case 'people':
            data = await fetchPerson(id);
            break;
          case 'vehicles':
            data = await fetchVehicle(id);
            break;
          case 'planets':
            data = await fetchPlanet(id);
            break;
          default:
            throw new Error(`Unsupported type: ${type}`);
        }
        setDetail(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false); 
      }
    };
    fetchData();
  }, [type, id]);

  if (loading) {
    return <p>Loading...</p>; 
  }

  const imageUrl = `https://starwars-visualguide.com/assets/img/${type === 'people' ? 'characters' : type}/${id}.jpg`;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img src={imageUrl} className="card-img-top" alt={detail.name} />
            <div className="card-body">
              <h5 className="card-title">{detail.name}</h5>
              <p className="card-text">
                <strong>Gender:</strong> {detail.gender}<br />
                <strong>Height:</strong> {detail.height} cm<br />
                <strong>Mass:</strong> {detail.mass} kg<br />
              
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
