import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/sw-api';

const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})

  let location = useLocation()

  useEffect(() => {
    getDetails(location.state.starship.url)
    .then(starshipDetails => setStarshipDetails(starshipDetails))
  })
  return (  
    <>
    <div className='starships-detail-div'>
      <h1>Starship Detail</h1>
      <h3>{starshipDetails.name}</h3>
      <h3>{starshipDetails.model}</h3>
      <a href="/starship-list">Return to Starship List</a>
    </div>
    </>
  );
}
export default StarshipDetails;

