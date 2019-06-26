import React from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';
  
  export default class Example extends React.Component {
	constructor(props) {
	  super(props);
  
	  this.toggle = this.toggle.bind(this);
	  this.state = {
		isOpen: false
	  };
	}
	toggle() {
	  this.setState({
		isOpen: !this.state.isOpen
	  });
	}
	render() {
	  return (
		<div>
		  <Navbar color="light" light expand="md">
			<NavbarBrand href="/">GetHealthy</NavbarBrand>
			<NavbarToggler onClick={this.toggle} />
			<Collapse isOpen={this.state.isOpen} navbar>
			  <Nav className="ml-auto" navbar>
				<UncontrolledDropdown nav inNavbar>
				  <DropdownToggle nav caret>
					Medications
				  </DropdownToggle>
				  <DropdownMenu right>
					<DropdownItem>
					  Schedule
					</DropdownItem>
					<DropdownItem>
					  Medication Lookup
					</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>
					  Find A Pharmacy
					</DropdownItem>
				  </DropdownMenu>
				</UncontrolledDropdown>
			  </Nav>
			</Collapse>
		  </Navbar>
		</div>
	  );
	}
  }