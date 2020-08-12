# Sprintify

### 1) Create a Spotify app
- Visit https://developer.spotify.com/ 
- Enter http//localhost:8888/callback as the redirect uri
- Copy: Redirect URI, Client ID, Client Secret

### 2) Start Auth Server
- 'npm install' from auth-spotify-server dir
- In auth-spotify-server/authorization_code/app.js, add Redirect, ID, Secret
- Run auth server with 'node authorization_code/app.js'

### 3) Start Client
- Nagivate to Client, 'npm install' followed by 'npm start'

This project is a psudo-fork of, would be hitting my head against the wall without this boiler plate:
https://medium.com/@jonnykalambay/now-playing-using-spotifys-awesome-api-with-react-7db8173a7b13Huge
