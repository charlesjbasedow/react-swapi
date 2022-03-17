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
    <div className="starship-details-container">
      <div className="starship-details-div">
      <p> NAME:  {starshipDetails.name} <br />
          MODEL: {starshipDetails.model} <br />
      <a className="Return-link" href="/">RETURN</a>
      </p>
      </div>
    </div>
    </>
  );
}
export default StarshipDetails;

