import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../stored/appContext';

const Card = ({ data, type, buttonLabel }) => {
  const { toggleFavorite, favorites } = useContext(AppContext);

  const isFavorite = favorites.some(item => item.uid === data.uid);

  const handleToggleFavorite = () => {
    toggleFavorite({ ...data, type });
  };

  const imageUrl = `https://starwars-visualguide.com/assets/img/${type === 'people' ? 'characters' : type}/${data.uid}.jpg`;

  return (
    <div className="card mb-3">
      <img src={imageUrl} className="card-img-top" alt={data.name} />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button className={`btn ${isFavorite ? 'btn-warning' : 'btn-outline-warning'}`} onClick={handleToggleFavorite}>
          {buttonLabel || (isFavorite ? 'Remove from Favorites' : 'Add to Favorites')}
        </button>
        <Link to={`/details/${type}/${data.uid}`} className="btn btn-primary ml-2">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
