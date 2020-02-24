import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAlbums } from "../actions/Albums"
import "../styles/myalbums.css"

export default function() {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    getAlbums().then(data => setAlbums(data))
  }, [])
  return (
    <div id="container">
      <h1>My Albums</h1>
      <div className="row1">
        {albums.map(album => (
          <Link key={"album-link-" + album.id} to={"/AlbumName/" + album.id}>
            <div className="album">
              <img src={album.coverPhoto} />
              <p className="album">{album.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
