import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/picname.css"
import { getPhoto } from "../actions/Albums"

export default props => {
  const [photo, setPhoto] = useState({})
  useEffect(() => {
    getPhoto(props.match.params.id).then(photo => {
      setPhoto(photo)
      console.log(props.match.params.id)
    })
  }, [props.match.params])

  return (
    <div className="wrapper">
      <h1>{photo.title}</h1>
      <div className="photo">
        <img src={photo.url}></img>
        <p className="pic">{photo.title}</p>
      </div>
    </div>
  )
}
