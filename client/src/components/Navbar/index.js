import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default class NavBar extends React.Component {
	render() {
		return (
			<>
				<Navbar bg="primary" variant="dark">
					<Navbar.Brand href="/">HealthApp</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/user/new-user">New User</Nav.Link>
						<Nav.Link href="/">blank</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Nonfunctional" className="mr-sm-2" />
						<Button variant="outline-info">Search</Button>
					</Form>
				</Navbar>
			</>
		)
	}
}