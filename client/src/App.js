import React from 'react';
import Playlists from './Components/Playlists.js'
import logo from './logo.svg';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';
//https://github.com/jmperez/spotify-web-api-js

const spotifyApi = new SpotifyWebApi();

class App extends React.Component {

	constructor(){
		super();
		const params = this.getHashParams();
		const token = params.access_token;
		if (token){
			spotifyApi.setAccessToken(token);
		}
		this.state = {
			loggedIn: token ? true : false,
			username: "",
			nowPlaying: { name: 'null', albumArt: ' '}
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
	getUserInfo(){
		spotifyApi.getMe()
		.then((response) => {
			console.log(response.item)
			this.setState({
				username: response.display_name
			});
		})
	}

	render() {
		if (!this.state.loggedIn){
			return (
				<div className='App'>
					<a href='http://localhost:8888/login' className='signup-btn'><span> Login to Spotify </span></a>
					{this.state.username}
				</div>
			);
		} else{
			return (
				<div className='App'>
					<Playlists/>
				</div>
			);
		}
	}
}

export default App;
