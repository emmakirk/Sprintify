import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
//https://github.com/jmperez/spotify-web-api-js

class About extends React.Component {
	render() {
		return(
			<div style={{alignItems: 'center', justifyContent:'center'}}>
				<h3 style={{marginTop: 3 + 'em', color:'white'}}>Running On Tempo</h3>
				<div style={{display:'flex', margin: 3 + 'em', color:'white', textAlign:'left', justifyContent:'center'}}>
					<p style={{maxWidth:"75em"}}>Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Vivamus gravida ut ipsum at venenatis. 
					Nullam lobortis odio lacinia accumsan elementum. Ut rhoncus hendrerit 
					dictum. Nulla vulputate scelerisque augue, eu interdum risus lobortis 
					sed. Cras cursus lorem nec pulvinar faucibus. Sed eget auctor nisl, a 
					rhoncus eros. Nullam ullamcorper mattis ex, ut congue lorem rhoncus a. 
					Cras id nulla sem. Mauris arcu libero, malesuada ut lacus eu, dignissim
					congue ante. Cras vel libero justo. Aenean eu sem sed elit pellentesque
					feugiat sit amet a leo.Lorem ipsum dolor sit amet, lorem ipsum dolor sit
					consectetur adipiscing elit. Vivamus gravida ut ipsum at venenatis. 
					Nullam lobortis odio lacinia accumsan elementum. Ut rhoncus hendrerit 
					dictum. Nulla vulputate scelerisque augue, eu interdum risus lobortis 
					sed. Cras cursus lorem nec pulvinar faucibus. Sed eget auctor nisl, a 
					rhoncus eros. Nullam ullamcorper mattis ex, ut congue lorem rhoncus a. 
					Cras id nulla sem. Mauris arcu libero, malesuada ut lacus eu, dignissim
					congue ante. Cras vel libero justo. Aenean eu sem sed elit pellentesque
					feugiat sit amet a leo.</p>
				</div>
				<div style={{display:'flex', margin: 3 + 'em', color:'white', textAlign:'left', justifyContent:'center'}}>
					<p style={{maxWidth:"75em"}}>Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Vivamus gravida ut ipsum at venenatis. 
					Nullam lobortis odio lacinia accumsan elementum. Ut rhoncus hendrerit 
					dictum. Nulla vulputate scelerisque augue, eu interdum risus lobortis 
					sed. Cras cursus lorem nec pulvinar faucibus. Sed eget auctor nisl, a 
					rhoncus eros. Nullam ullamcorper mattis ex, ut congue lorem rhoncus a. 
					Cras id nulla sem. Mauris arcu libero, malesuada ut lacus eu, dignissim
					congue ante. Cras vel libero justo. Aenean eu sem sed elit pellentesque
					feugiat sit amet a leo.</p>
				</div>
			</div>
		)
	}
}

export default About;
