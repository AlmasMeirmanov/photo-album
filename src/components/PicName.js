import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/albumname.css"
import { getPhoto } from "../actions/Albums"

export default props => {
  const [photo, setPhoto] = useState({})

  useEffect(() => {
    getPhoto(props.match.params.id).then(pic => {
      console.log(pic)
      setPhoto(pic)
    })
  }, [props.match.params])

  return (
    <div id="photo">
      <img src={photo.url}></img>
    </div>
  )
}
