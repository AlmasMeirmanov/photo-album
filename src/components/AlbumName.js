import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/albumname.css"
import { getAlbum } from "../actions/Albums"

export default props => {
  const [album, setAlbum] = useState([])
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    getAlbum(props.match.params.id).then(album => {
      setAlbum(album)
      setPhotos(album.photos)
    })
  }, [props.match.params])

  return (
    <div id="box">
      <h1 className="head">Album 1</h1>
      {photos.map(photo => (
        <Link to={"/PicName/" + photo.id}>
          <div className="photos">
            <img src={photo.url}></img>
          </div>
        </Link>
      ))}
    </div>
  )
}
