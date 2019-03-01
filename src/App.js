import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import AlbumsListContainer from './components/AlbumsListContainer';
import { Route, Link } from 'react-router-dom'
import PhotoPageContainer from './components/PhotoPageContainer'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">PhotoAlbum</h1>
            <Link to={'/'}>Go back to index</Link>
          </header>
          <main>
          <Route exact path="/" component={AlbumsListContainer} />
          <Route exact path="/albums/:id" component={PhotoPageContainer} />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
