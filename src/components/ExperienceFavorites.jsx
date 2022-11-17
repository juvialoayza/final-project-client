import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Link, useNavigate } from "react-router-dom"
import {getFavoritesListService} from "../services/experience.services"

function ProfileFavorites() {
    const [favoritesList, setFavoritesList] = useState([])
    const [isFetching, setIsFetching] = useState("")

  useEffect(() => {
  getFavoritesList()
  }, [])
 
  const getFavoritesList = async () => {
    try {
      const response = await getFavoritesListService()
      console.log(response)
      setFavoritesList(response.data)
      setIsFetching(false)

    } catch(error) {
        console.log(error)
    }
  }

  if (isFetching === true) {
    return <h3>...buscando</h3>
  }

  return (
    <div>
    {favoritesList.map((eachFavorite) => {
    return (
        <p key={eachFavorite._id}>
          {eachFavorite.map((eachFavorite)=>{
        return(
          <p>{eachFavorite.name}</p>
        )
      })}
        <h6>{eachFavorite.name}</h6>
        <img src={eachFavorite.photoExperience} alt="photoExperience" width={80}/>
        </p>
    )
    })}
    </div>
  )
}

export default ProfileFavorites