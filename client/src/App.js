import React from 'react';
import logo from './logo.svg';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';
//https://github.com/jmperez/spotify-web-api-js
import { Route, Switch } from 'react-router-dom';

const spotifyApi = new SpotifyWebApi();

class App extends React.Component {

  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    console.log(params)
    if (token){
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: ' '},
      playlists: {},
      dispPlaylist: false
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }
  getNowPlaying(){
    spotifyApi.getMyCurrentPlaybackState()
    .then((response) => {
      this.setState({
        nowPlaying: {
          name: response.item.name,
          albumArt: response.item.album.images[0].url
        }
      });
    })
  }

  getPlaylists(){
    spotifyApi.getUserPlaylists()
    .then((response) => {
      console.log(response);
      let playlists = response.items;
      this.setState({ playlists: response.items[0].name,
                      dispPlaylist: true
                    });
    })

    console.log(this.state.playlists)
  }


  render() {
    if (!this.state.loggedIn){
      return (
        <div className='App'>
          <a href='http://localhost:8888/login' className='signup-btn'><span> Login to Spotify </span></a>
        </div>
      );
    } else if (!this.state.dispPlaylist){
      return (
        <div>
          <h1>Playlist List ;p</h1>
          { this.state.loggedIn && 
            <button onClick={() => this.getPlaylists()}> 
            get the playlists
            </button>
          }
        </div>
      );
    } else{
      return(
        <div>
              {this.state.playlists}
        </div>
      )
    }
  }
}

export default App;
