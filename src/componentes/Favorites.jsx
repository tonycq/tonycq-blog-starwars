import React, { useContext } from 'react';
import { AppContext } from '../stored/appContext';
import Card from '../componentes/Card';
import Navbar from '../componentes/Navbar';

const Favorites = () => {
  const { favorites } = useContext(AppContext);

  return (
    <div className="container">
      <Navbar />
      <h2>Favorites</h2>
      <div className="row">
        {favorites.map((favorite) => (
          <div className="col-md-4" key={favorite.uid}>
            <Card
              data={favorite}
              type={favorite.type}
              buttonLabel="Remove from Favorites"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
