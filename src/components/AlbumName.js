import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/albumname.css"
import { getAlbum, getAlbums } from "../actions/Albums"

export default props => {
  const [album, setAlbum] = useState({})
  const [photos, setPhotos] = useState([])
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    getAlbum(props.match.params.id).then(data => {
      setAlbum(data)
      setPhotos(data.photos)
    })
    getAlbums().then(data => setAlbums(data))
  }, [props.match.params])

  return (
    <div id="box">
      <h1 className="head">{album.name}</h1>
      <div className="albums">
        {albums.map(album => (
          <p>
            <Link key={"album-link-" + album.id} to={`/AlbumName/${album.id}`}>
              {album.name}
            </Link>
          </p>
        ))}
      </div>
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
