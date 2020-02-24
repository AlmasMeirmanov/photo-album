import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/albumname.css"
import { getAlbum } from "../actions/Albums"

export default props => {
  const [album, setAlbum] = useState({})
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    getAlbum(props.match.params.id).then(album => {
      setAlbum(album)
      setPhotos(album.photos)
    })
  }, [props.match.params])

  return (
    <div id="box">
      <h1 className="head">{album.name}</h1>
      <div className="photos">
        {photos.map(photo => (
          <Link key={"photo-link-" + photo.id} to={"/PicName/" + photo.id}>
            <div>
              <img src={photo.url}></img>
              <p className="picname">{photo.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
