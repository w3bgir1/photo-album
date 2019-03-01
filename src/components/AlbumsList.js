import * as React from 'react'
import { Link } from 'react-router-dom'

export default function AlbumsList(props) {
 
  return (
  <div>
    <h1>All Albums</h1>
    There are { props.albums.length } albums available.
    {props.albums && props.albums.map(album => {
        return (
            <Link to={`/albums/${album.id}`}><ul key={album.id}>
                <li>{album.title}</li>
            </ul></Link>
        )
    })}
    
    <ul></ul>
  </div>)
}