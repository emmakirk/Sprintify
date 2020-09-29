import React from 'react';
import Navbar from "react-bootstrap/NavBar"
import Nav from "react-bootstrap/Nav"

class Sprint_Nav extends React.Component {
	render() {
		const loggedIn = this.props.loggedIn
		return (
		  	<Navbar variant="dark" fixed="top">	
		  		 <Navbar.Brand href="#home">Sprintify</Navbar.Brand>
		  		 <Navbar.Collapse id="basic-navbar-nav">
			     <Nav className="mr-auto">
			      	<Nav.Link href="#home">Home</Nav.Link>
			      	<Nav.Link href="#link">Link</Nav.Link>
			      	{!loggedIn &&
			      		<a href='http://localhost:8888/login' className='signup-btn'><span> Login to Spotify </span></a>
			      	}
			    </Nav>
			    </Navbar.Collapse>
		  	</Navbar>
		);
	}
}

export default Sprint_Nav;
