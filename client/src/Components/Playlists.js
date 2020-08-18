import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
//https://github.com/jmperez/spotify-web-api-js

const spotifyApi = new SpotifyWebApi();

class Playlists extends React.Component {
	render() {
		return (
			<div>
				<h3 style={{color: 'white'}}> We need playlists here ❤️</h3>
			</div>
		);
	}
}

export default Playlists;
