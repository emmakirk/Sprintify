// https://www.youtube.com/watch?v=SbelQW2JaDQ -> https://github.com/awicks44/JavaScript-SpotifyAPI

const APIController = (function() {
	const clientId = '6036ff2bcb164ba6bf64ecabe443cdc8';
	const clientSecret = 'c481171dcee24ac0bb7419826ac42045';
	const redirect_uri = 'http://localhost:8000/';
	const scopes = 'user-top-read';

	// private methods

	// https://medium.com/@leemartin/creating-a-simple-spotify-authorization-popup-in-javascript-7202ce86a02f

	function implicitGrantFlow() {
		$.ajax({
			url: "https://accounts.spotify.com/authorize?$client_id={$clientId}&redirect_uri={$redirectUri}&scope={$scopes}&response_type=token",
			type: 'Get',
			contentType: 'application/json',
			data: {
				client_id: clientId,
				redirect_uri: redirectUri,
				scope: scopes,
				response_type: 'token',
			}
		}).done(function callback(response){
			console.log("maybe a success?");
			$(location).attr('href', this.url);
		}).fail(function (error){
			console.log(this.url);
			$(location).attr('href', this.url);

		})
	}

	const _getToken = async () => {
		const result = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type' : 'application/x-www-form-urlencoded',
				'Authorization' : 'Basic ' + btoa(clientId + ":" + clientSecret)
			},
			body: 'grant_type=client_credentials'
		});
		const data = await result.json();
		return data.access_token;
	}

	const _getPlaylists = async (token, userId) => {
		// eventually get more than first 50 playlists
		const limit = 50;

		const result = await fetch('https://api.spotify.com/v1/users/${userId}/playlists?limit=${limit}', {
			method: 'GET',
			headers: {'Authorization' : 'Bearer ' + token}
		})
		const data = await result.json()
		return data.playlists.items;
	}

	return {
		implicitGrantFlow(){
			return implicitGrantFlow();
		},
		getToken(){
			return _getToken();
		}, 
		getPlaylists(token, userId){
			return _getPlaylists(token, userId);
		}
	}

})();

// UI Module
const UIController = (function() {
	// obj to hold references to html

	const DOMElements = {
		LButton: '#LoginButton',
		hfToken: '#hidden_token'
	}

	// public methods 
	return {
		inputField() {
			return {
				LButton: document.querySelector(DOMElements.LButton)
			}
		},

		storeToken(value){
			document.querySelector(DOMElements.hfToken).value = value;
		},

		getStoredToken() {
			return {
				token: document.querySelector(DOMElements.hfToken).value
			}
		}
	}
})();

const APPController = (function(UIController, APIController){
	// load profile


	const DOMInputs = UIController.inputField();

	return {
		init() {
			console.log('App is starting');
			loadProfile();
		},

		loadProfile(){
			return _loadProfile();
		}
	}
})(UIController, APIController);

