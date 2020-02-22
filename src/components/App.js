import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import MyAlbums from "./MyAlbums"
import AlbumName from "./AlbumName"
import PicName from "./PicName"
export default props => {
  return (
    <Router>
      <div className="box">
        <Route exact path="/" component={MyAlbums} />
        <Route path="/AlbumName/:id" component={AlbumName} />
        <Router path="/PicName/:id" component={PicName} />
      </div>
    </Router>
  )
}
