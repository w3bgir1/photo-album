import * as React from 'react'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { getAlbums, createAlbum } from '../actions/albums'
import AddAlbumForm from './AddAlbumForm'

class AlbumsListContainer extends React.Component {
  state = {}

    componentDidMount() {
        console.log(this.props.albums)
        if (this.props.albums.length === 0 ) {
            this.props.getAlbums()
        }
    }

    render() {
        if (!this.props.albums) return 'Loading...'
        return (
            <div>
                <AlbumsList albums={this.props.albums} />
                <AddAlbumForm createAlbum={this.props.createAlbum} />
          </div>)
    }
}

const mapStateToProps = state => {
    return {
        albums: state.albums
    }
}

export default connect(mapStateToProps, { getAlbums, createAlbum })(AlbumsListContainer)