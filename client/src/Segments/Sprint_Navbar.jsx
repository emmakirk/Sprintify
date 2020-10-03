import React from 'react';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Navbar from "react-bootstrap/NavBar"
import Nav from "react-bootstrap/Nav"


// Local Imports
import About from '../Components/About.js'

class Sprint_Nav extends React.Component {
	render() {
		const loggedIn = this.props.loggedIn
		return (
			<BrowserRouter>
				<div>
					<div>
					  	<Navbar variant="dark" fixed="top">	
					  		 <Navbar.Brand href="/home">Sprintify</Navbar.Brand>
					  		 <Navbar.Collapse id="basic-navbar-nav">
						     <Nav className="mr-auto">
						      	<Nav.Link href="/about">About</Nav.Link>
						      	{!loggedIn &&
						      		<a href='http://localhost:8888/login' className='signup-btn'><span> Login to Spotify </span></a>
						      	}
						    </Nav>
						    </Navbar.Collapse>
					  	</Navbar>
					</div>
					<div>
						<Switch>
							<Route exact path="/about" component={About} />
						</Switch>
					</div>
			  	</div>
		  	</BrowserRouter>
		);
	}
}

export default Sprint_Nav;
