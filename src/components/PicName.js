import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/albumname.css"
import { getPhoto } from "../actions/Albums"

export default props => {
  const [photo, setPhoto] = useState({})

  useEffect(
    props => {
      getPhoto(props.match.params).then(photo => {
        setPhoto(photo)
        console.log(props)
      })
    },
    [props.match.params]
  )

  return (
    <div>
      <h1>{photo.title}</h1>
      <div className="photo">
        <img src={photo.url}></img>
        <p className="pic">{photo.title}</p>
      </div>
    </div>
  )
}
