import { useEffect, useState } from "react"
import { getStarshipList } from "../services/sw-api"
import { Link } from 'react-router-dom'

const StarshipList = (props) => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(()=> {
    getStarshipList()
    .then(starshipList => setStarshipList(starshipList.results))
  }, [])

  return (
    <>
      <div className="starships-container">
        {starshipList.map((starship) => (
        <Link
          to='/starship'
          state={{starship}}
          key={starship.name}>
        </Link>

        ))}
      </div>
    </>
    );
}
export default StarshipList;